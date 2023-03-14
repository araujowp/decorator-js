const grid = document.querySelector(".grid");

const creatElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element; 
}

var itensBase = [
    new Item('k1', 'pond', 'lago'),
    new Item('k2', 'pound', 'curral'),
    new Item('k3', 'care', 'cuidado'),
    new Item('k4', 'shut', 'fechar'),
    new Item('k5', 'settlement', 'assentamento')
];

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

//shuffle
let myIndex = itemsListTranslation.length;
while(myIndex > 0){
    const shuffleIndex = Math.floor(Math.random() * myIndex);
    currentItem = itemsListTranslation[myIndex -1];
    itemsListTranslation[myIndex -1] = itemsListTranslation[[shuffleIndex]]
    itemsListTranslation[shuffleIndex] = currentItem;
    myIndex--;
}

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
