const role = () =>
  import('@/views/main/system-manage/role-manage/views/list/index.vue')
export default {
  path: '/main/system/role',
  name: 'roleManage',
  component: role,
  children: []
}
