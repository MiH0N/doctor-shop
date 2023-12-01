import getCategoryList from './categoryList';
import getProductList from './productList';
import getProductsCategory from './productsCategory';

export default class ProductService {
  static getAll = getProductList;

  static getCategories = getCategoryList;

  static getProductsCategory = getProductsCategory;
}
