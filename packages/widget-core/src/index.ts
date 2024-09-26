import type { BaseConfig } from './widgets/base/config.ts'
import { WidgetType } from './widgets'
import { UAParser } from 'ua-parser-js'

export * from './widgets'
export * from './data-status.enum'
export * from './floatie-error.interface'

export const send = async <WidgetData>(
  clientKey: string,
  widgetType: WidgetType,
  data: WidgetData,
  config: any = {}
) => {
  const defaultConfig: BaseConfig = {
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
        'x-floatie-client-key': clientKey,
      },
    })
  } catch (err) {
    throw new Error('Failed to send feedback')
  }
}
