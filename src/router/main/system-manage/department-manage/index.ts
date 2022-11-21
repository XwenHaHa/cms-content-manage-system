const department = () =>
  import('@/views/main/system-manage/department-manage/index.vue')
export default {
  path: '/main/system/department',
  name: 'departmentManage',
  component: department,
  children: []
}
