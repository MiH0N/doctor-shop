import getCategoryList from './categoryList';
import getProductList from './productList';
import getProductsCategory from './productsCategory';
import searchProducts from './search';

export default class ProductsServices {
  static getAll = getProductList;

  static getCategories = getCategoryList;

  static getProductsCategory = getProductsCategory;

  static search = searchProducts;
}
