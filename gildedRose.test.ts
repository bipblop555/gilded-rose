import { Item, GildedRose } from './src/index'; // Assurez-vous de mettre le chemin correct vers votre code source

describe('GildedRose', () => {
  // Test pour la mise à jour de la qualité de l'Item "Aged Brie"
  it('Devrait update AgedBrie correctement', () => {
    const agedBrie = new Item('Aged Brie', 10, 20);
    const gildedRose = new GildedRose([agedBrie]);

    gildedRose.updateQuality();

    expect(agedBrie.quality).toBe(21);
  });

  it('Devrait update la qualité de Backstage Pass', () => {
    const backstagePass = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20);
    const gildedRose = new GildedRose([backstagePass]);

    gildedRose.updateQuality();

    expect(backstagePass.quality).toBe(22);
  });

  it('devrait update la qualité de Backstage Pass quality quand sellIn <= 5', () => {
    const backstagePass = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20);
    const gildedRose = new GildedRose([backstagePass]);

    gildedRose.updateQuality();

    expect(backstagePass.quality).toBe(23);
  });

  it('Devrait update la qualité de  Backstage Pass à 0 quand sellIn <= 0', () => {
    const backstagePass = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20);
    const gildedRose = new GildedRose([backstagePass]);

    gildedRose.updateQuality();

    expect(backstagePass.quality).toBe(0);
  });

  it('Ne devrait pas update la qualité de Sulfuras', () => {
    const sulfuras = new Item('Sulfuras, Hand of Ragnaros', 10, 80);
    const gildedRose = new GildedRose([sulfuras]);

    gildedRose.updateQuality();

    expect(sulfuras.quality).toBe(80);
  });
  
  it('Devrait update Conjured correctement', () => {
    const conjuredItem = new Item('Conjured Mana Cake', 10, 20);
    const gildedRose = new GildedRose([conjuredItem]);

    gildedRose.updateQuality();

    expect(conjuredItem.quality).toBe(18);
  });
});
