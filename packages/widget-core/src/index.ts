import type { WidgetConfig } from './config.ts'
import { UAParser } from 'ua-parser-js'

export * from './config.ts'
export * from './data-status.enum.ts'
export * from './floatie-error.interface.ts'

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

  const ua = {
    ...uaParser.getResult(),
  }

  const requestBody = JSON.stringify({
    type,
    message,
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
