export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items: Array<Item> = []) {
      this.items = items;
  }

  updateQuality(): Array<Item> {
      this.items.forEach(item => {
          switch (item.name) {
              case "Aged Brie":
                  this.increaseQuality(item);
                  break;
              case "Backstage passes to a TAFKAL80ETC concert":
                  this.increaseQuality(item);
                  if (item.sellIn < 11) this.increaseQuality(item);
                  if (item.sellIn < 6) this.increaseQuality(item);
                  if (item.sellIn < 0) item.quality = 0;
                  break;
              case "Sulfuras, Hand of Ragnaros":
                  break;
              default:
                  this.decreaseQuality(item);
          }

          if (item.name !== "Sulfuras, Hand of Ragnaros") {
              item.sellIn--;
              if (item.sellIn < 0) {
                  item.name === "Aged Brie" ? this.increaseQuality(item) : this.decreaseQuality(item);
              }
          }
      });

      return this.items;
  }

  increaseQuality(item: Item): void {
     
  }

  decreaseQuality(item: Item): void {
 
  }
}