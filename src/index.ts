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

  private isAgedBrie(item: Item) {
    return item.name === 'Aged Brie';
  }

  private isBackstagePass(item: Item) {
    return item.name === 'Backstage passes to a TAFKAL80ETC concert';
  }

  
  private isSulfuras(item: Item) {
    return item.name === 'Sulfuras, Hand of Ragnaros';
  }

  private isConjured(item: Item) {
    return item.name.includes('Conjured');
  }

  private updateAgedBrieQuality(item: Item) {
    if (item.quality < 50) {
      item.quality++;
    }
  }
  
  private updateBackstagePassQuality(item: Item) {
    if (item.quality < 50) {
      item.quality++;
      if (item.sellIn <= 10) {
        item.quality++;
      }
      if (item.sellIn <= 5) {
        item.quality++;
      }
    }
    if (item.sellIn <= 0) {
      item.quality = 0;
    }
  }

  private updateNormalItemQuality(item: Item) {
    if (item.quality > 0) {
      const qualityChange = this.isConjured(item) ? 2 : 1;
      item.quality -= qualityChange;
    }
  }

  private updateQualityForItem(item: Item) {
    if (!this.isSulfuras(item)) {
      item.sellIn--;

      if (this.isAgedBrie(item)) {
        this.updateAgedBrieQuality(item);
      } else if (this.isBackstagePass(item)) {
        this.updateBackstagePassQuality(item);
      } else {
        this.updateNormalItemQuality(item);
      }
    }
  }

  updateQuality() {
    for (const item of this.items) {
      this.updateQualityForItem(item);
    }

    return this.items;
  }
}