const category = () =>
  import('@/views/main/product-center/goods-category/index.vue')
export default {
  path: '/main/product/category',
  name: 'goodsCategory',
  component: category,
  children: []
}
