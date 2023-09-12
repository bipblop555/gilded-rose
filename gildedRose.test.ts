import { Item, GildedRose } from './src/index'; // Assurez-vous de mettre le chemin correct vers votre code source

describe('GildedRose', () => {
  // Test pour la mise à jour de la qualité de l'Item "Aged Brie"
  it('should update Aged Brie quality correctly', () => {
    const agedBrie = new Item('Aged Brie', 10, 20);
    const gildedRose = new GildedRose([agedBrie]);

    gildedRose.updateQuality();

    expect(agedBrie.quality).toBe(21);
  });

  it('should update Backstage Pass quality correctly', () => {
    const backstagePass = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20);
    const gildedRose = new GildedRose([backstagePass]);

    gildedRose.updateQuality();

    expect(backstagePass.quality).toBe(22);
  });

});
