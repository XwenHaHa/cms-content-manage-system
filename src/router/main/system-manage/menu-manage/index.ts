const userMenu = () =>
  import('@/views/main/system-manage/menu-manage/index.vue')
export default {
  path: '/main/system/menu',
  name: 'menuManage',
  component: userMenu,
  children: []
}
