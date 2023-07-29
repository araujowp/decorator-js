class WordBusiness{

    constructor() {
        this._wordRepository = new WordRepository();
    }

    get(numberOfWords) {
        var _records = this._wordRepository.getAll();
        var _shuffleRecords = new Shuffle(_records).get();
        var _sliceRecords = _shuffleRecords.slice(0,numberOfWords);
        // return _sliceRecords;

        var itensBase  = [];
        for (var _count = 0; _count < _sliceRecords.length && _count < numberOfWords; _count++) {
            var record = _sliceRecords[_count];
            itensBase.push(new Item('k' + (_count + 1), record[0], record[1]));
        }

        return itensBase;

    }

}