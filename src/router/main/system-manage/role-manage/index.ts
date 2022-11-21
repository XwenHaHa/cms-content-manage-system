const role = () => import('@/views/main/system-manage/role-manage/index.vue')
export default {
  path: '/main/system/role',
  name: 'roleManage',
  component: role,
  children: []
}
