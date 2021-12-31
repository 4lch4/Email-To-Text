import { IAppConfig } from '../interfaces'

const NA = 'Unknown'

/**
 * The default values needed for the Application to function properly. All of
 * the values should be saved as Environment variables, otherwise their value
 * will be "Unknown".
 */
export const AppConfig: IAppConfig = {
  name: process.env.APP_NAME || NA,
  version: process.env.VERSION || NA,
  port: parseInt(process.env.PORT || '3000'),
  apiPrefix: process.env.API_PREFIX || NA
}
