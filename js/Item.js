class Item{
    constructor( key, word, translation){
        this._key = key;
        this._word = word;
        this._translation = translation;
    }
    
    getKey(){
        return this._key;
    }
    getWord(){
        return this._word;
    }
    getTranslation(){
        return this._translation;
    }
}