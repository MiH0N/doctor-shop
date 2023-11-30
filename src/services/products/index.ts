import getCategoryList from './category';
import getProductList from './productList';

export default class ProductService {
  static getAll = getProductList;

  static getCategories = getCategoryList;
}
