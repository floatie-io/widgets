export interface BasicWidgetUiConfig {
  sendButtonLabel?: string
  confirmationMessage?: string
  size?: 'medium' | 'large'
  offsetBottom?: number
  offsetRight?: number
  title?: string
  placeholder?: string
}

export interface BasicWidgetData {
  type: 'BUG' | 'FEATURE' | 'COMMENT'
  message: string
}