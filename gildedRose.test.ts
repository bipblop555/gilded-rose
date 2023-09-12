import {Item, GildedRose} from "./src/index"

describe('GildedRose', () => {
    // Test pour la mise à jour de la qualité de l'Item "Aged Brie"
    it('should update Aged Brie quality correctly', () => {
      const agedBrie = new Item('Aged Brie', 10, 20);
      const gildedRose = new GildedRose([agedBrie]);
  
      gildedRose.updateQuality();
  
      expect(agedBrie.quality).toBe(21);
    });
})