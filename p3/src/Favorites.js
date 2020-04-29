export default class Favorites {
  constructor() {
    let favorites = localStorage.getItem("favorites");

    this.items = favorites ? JSON.parse(favorites) : [];
  }
  getItems() {
    return this.items;
  }
  update() {
    localStorage.setItem("favorites", JSON.stringify(this.items));
  }
  add(carId) {
    let item = this.getItem(carId);

    if (!item) {
      this.items.push({
        id: carId
      });
    }

    this.update();
  }
  remove(carId) {
    let item = this.getItem(carId);

    let itemIndex = this.items.indexOf(item);

    if (item) {
      this.items.splice(itemIndex, 1);
      this.update();
    }
  }
  getItem(carId) {
    return this.items.find(({ id }) => id === carId) || null;
  }
}
