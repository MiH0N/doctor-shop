export default class CategoryHelper {
  static capitalizeFirstLetter = (input: string) =>
    input.charAt(0).toUpperCase() + input.slice(1);

  static formatTitle = (title: string) =>
    this.capitalizeFirstLetter(title.split('-').join(' '));
}
