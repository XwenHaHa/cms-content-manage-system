import { RouteRecordRaw } from 'vue-router'

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1.先去加载所有默认的routes
  const allRoutes: RouteRecordRaw[] = []
  // webpack内置,表示去main这个文件夹里面去查找所有的.ts文件
  const routerFiles = require.context('../router/main', true, /\.ts/)
  routerFiles.keys().forEach((key) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })

  // 2.根据菜单获取需要添加的routes
  // userMenus
  // type === 1 -> children -> type === 1
  // type === 2 -> url -> route
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) {
          routes.push(route)
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenus)
  return routes
}
