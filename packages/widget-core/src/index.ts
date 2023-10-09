import type { WidgetConfig } from './config.js'

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
    floatieInstance: 'https://floatie.io/api/project/feedback',
  }

  const mergedConfig = Object.assign(defaultConfig, config)

  const requestBody = JSON.stringify({
    type,
    message,
  })

  try {
    await fetch(mergedConfig.floatieInstance!, {
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
