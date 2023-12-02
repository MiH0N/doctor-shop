const endpoints = {
  products: '/products',
  categories: 'products/categories',
  productsCategory: (category: string) => `products/category/${category}`,
  searchProducts : 'products/search'
};

export default endpoints;
