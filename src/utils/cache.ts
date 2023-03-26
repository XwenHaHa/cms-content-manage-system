import { type ThemeName } from '@/hooks/useTheme'
import CacheKey from '@/constant/cacheKey'
class localCache {
  setCache(key: string, value: any) {
    window.sessionStorage.setItem(key, JSON.stringify(value))
  }

  getCache(key: string) {
    // obj => string => obj
    const value = window.sessionStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  deleteCache(key: string) {
    window.sessionStorage.removeItem(key)
  }

  clearCache() {
    window.sessionStorage.clear()
  }

  getActiveThemeName() {
    return localStorage.getItem(CacheKey.ACTIVE_THEME_NAME) as ThemeName
  }
  setActiveThemeName(themeName: ThemeName) {
    localStorage.setItem(CacheKey.ACTIVE_THEME_NAME, themeName)
  }
}

export default new localCache()
