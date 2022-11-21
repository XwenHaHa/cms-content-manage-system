const goods = () =>
  import('@/views/main/product-center/goods-statistics/index.vue')
export default {
  path: '/main/product/goods',
  name: 'goodsStatistics',
  component: goods,
  children: []
}
