const user = () => import('@/views/main/system-manage/user-manage/index.vue')
export default {
  path: '/main/system/user',
  name: 'userManage',
  component: user,
  children: []
}
