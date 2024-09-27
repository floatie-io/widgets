import type { Config } from './types'
import { WidgetType } from '././types'
import { UAParser } from 'ua-parser-js'

export * from './widgets'
export * from './types'

export const send = async <WidgetData>(widgetType: WidgetType, data: WidgetData, config?: Config) => {
  const defaultConfig: Config = {
    floatieInstance: 'https://floatie.io',
  }

  const mergedConfig = Object.assign(defaultConfig, config)
  const uaParser = new UAParser()

  const ua = {
    ...uaParser.getResult(),
  }

  const requestBody = JSON.stringify({
    widgetType,
    data,
    ua,
  })

  try {
    await fetch(`${mergedConfig.floatieInstance}/api/project/feedback`, {
      method: 'POST',
      body: requestBody,
      headers: {
        'Content-Type': 'application/json',
        'x-floatie-client-key': mergedConfig.clientKey || '',
      },
    })
  } catch (err) {
    throw new Error('Failed to send feedback')
  }
}
