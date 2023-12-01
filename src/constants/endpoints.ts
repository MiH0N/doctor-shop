const endpoints = {
  products: '/products',
  categories: 'products/categories',
  productsCategory: (category: string) => `products/category/${category}`,
};

export default endpoints;
