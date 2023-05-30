import { App } from 'vue'
import registerElement from './register-element'

export function globalregisterApp(app: App): void {
  registerElement(app)
}
