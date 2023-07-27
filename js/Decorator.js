const grid = document.querySelector(".grid");

const creatElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element; 
}

var _wordRepository = new WordRepository();
var _records = _wordRepository.getAll();
var _shuffleRecords = new Shuffle(_records).get();
var _sliceRecords = _shuffleRecords.slice(0,7); 
var itensBase  = [];
var _count  = 0;

for (var _count = 0; _count < _sliceRecords.length && _count < 7; _count++) {
    var record = _sliceRecords[_count];
    itensBase.push(new Item('k' + (_count + 1), record[0], record[1]));
}

var itemsListWord = [];
var itemsListTranslation = [];
let firstCard = null;
let secondCard = null; 

itensBase.forEach(
    (item) => {
        itemsListWord.push(new Element(item.getKey(), item.getWord()));
        itemsListTranslation.push(new Element(item.getKey(), item.getTranslation()));
    }
)

itemsListTranslation = new Shuffle(itemsListTranslation).get();

const checkPair = () => {
    if (firstCard.getAttribute('data-key') === secondCard.getAttribute('data-key')){
        firstCard.classList.add('correct');
        secondCard.classList.add('correct');
        firstCard = null;
        secondCard = null;
    }else{
        setTimeout(()=>{
            firstCard.classList.remove('marked');
            secondCard.classList.remove('marked');

            firstCard = null;
            secondCard = null;
        },500);
    }
}

const myClick = ({target}) =>{
 
    if(target.className.includes('marked')){
        return;
    }

    target.classList.add('marked');


    if (firstCard === null){
        firstCard = target;
    }else{
        secondCard = target;
        checkPair();
    }
}

const createCard = (element) => {
    const cardItem = creatElement('div','card');
    var myLabel = document.createTextNode(element.getValue()); 
    cardItem.addEventListener('click',myClick);
    cardItem.appendChild(myLabel);
    cardItem.setAttribute('data-key',element.getKey())
    return cardItem;
}

loadPage = () => {
    let counIndex = 0;
    while (counIndex < itemsListTranslation.length) {
        grid.appendChild(createCard(itemsListWord[counIndex]));
        grid.appendChild(createCard(itemsListTranslation[counIndex]));
        counIndex++;
    }
}

window.onload = () => {
    loadPage();
}
