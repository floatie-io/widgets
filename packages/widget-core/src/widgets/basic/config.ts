import type { BaseConfig } from '../base/config'

export interface BasicWidgetConfig extends BaseConfig {
  offsetBottom?: number
  offsetRight?: number
  title?: string
  placeholder?: string
}
