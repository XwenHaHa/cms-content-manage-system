const dashboard = () =>
  import('@/views/main/system-overview/goods-statistics/index.vue')
export default {
  path: '/main/analysis/dashboard',
  name: 'goods',
  component: dashboard,
  children: []
}
