import type { WidgetConfig } from './config.js'
import { UAParser } from 'ua-parser-js'

export * from './config.js'
export * from './data-status.enum.js'
export * from './floatie-error.interface.js'

export const send = async (
  clientKey: string,
  type: 'BUG' | 'FEATURE' | 'COMMENT',
  message: string,
  config: WidgetConfig = {}
) => {
  const defaultConfig: WidgetConfig = {
    floatieInstance: 'https://floatie.io',
  }

  const mergedConfig = Object.assign(defaultConfig, config)
  const uaParser = new UAParser()

  const metadata = {
    ...uaParser.getResult(),
  }

  const requestBody = JSON.stringify({
    type,
    message,
    metadata,
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
