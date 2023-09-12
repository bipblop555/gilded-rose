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
    if(item.name === 'Aged Brie'){
      console.log("true");
      return true
    }
    else return false;
  }

  private isBackstagePass(item: Item) {
    if(item.name === 'Backstage passes to a TAFKAL80ETC concert'){
      console.log("true");
      return true;
    }
    else{
      return false;
    }
  }

  private isSulfuras(item: Item) {
    if(item.name === 'Sulfuras, Hand of Ragnaros'){
      console.log("true")
      return true
    }
    else{
      return false
    }  
}

  private isConjured(item: Item) {
    if( item.name.includes('Conjured'))
    {
      console.log("true");
      return true
    }
    return false;
  }

  private updateAgedBrieQuality(item: Item) {
    if (item.quality < 50) {
      console.log("trueeee");
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