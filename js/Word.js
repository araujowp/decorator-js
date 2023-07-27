
class Word {
    constructor() {
      this._wordPairs = [
        ['pond', 'lago'], ['pound', 'libra'], ['care', 'cuidado'], ['shut', 'fechar']
      ];
    }
  
    getPairs(numPairs) {
      const pairs = [];
      const usedIndices = new Set();
      const maxIndex = this._wordPairs.length - 1;
  
      if (numPairs > this._wordPairs.length) {
        numPairs = this._wordPairs.length;
      }
  
      for (let i = 0; i < numPairs; i++) {
        let index;
        do {
          index = Math.floor(Math.random() * maxIndex);
        } while (usedIndices.has(index));
  
        usedIndices.add(index);
        pairs.push(this._wordPairs[index]);
      }
  
      return pairs;
    }
  }
  