export interface Config {
  floatieInstance: string
  clientKey?: string
}

export enum WidgetType {
  Basic = 'Basic',
  Rating = 'Rating',
}

export enum DataStatus {
  DEFAULT = 'default',
  PENDING = 'pending',
  ERROR = 'error',
  SUCCESS = 'success',
}

export interface FloatieError {
  message: string
}
