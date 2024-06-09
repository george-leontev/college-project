import { isDev } from "./env-tools";

export const AppConsts = {
    // TODO: need to use environments variable
    webApiRoot: isDev() ? 'http://localhost:8000/api' : 'http://91.144.143.40:15022/api'
}