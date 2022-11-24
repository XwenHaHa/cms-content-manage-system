const user = () =>
  import('@/modules/main/system-manage/user-manage/views/list/index.vue')
export default {
  path: '/main/system/user',
  name: 'userManage',
  component: user,
  children: []
}
