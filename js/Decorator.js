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
let firstButton = null;
let secondButton = null; 

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
    if (firstButton.getAttribute('data-key') === secondButton.getAttribute('data-key')){
        firstButton = null;
        secondButton = null;
    }else{
        setTimeout(()=>{
            firstButton.classList.remove('marked');
            secondButton.classList.remove('marked');

            firstButton = null;
            secondButton = null;
        },500);
    }
}

const myClick = ({target}) =>{
 
    if(target.className.includes('marked')){
        return;
    }

    target.classList.add('marked');


    if (firstButton === null){
        firstButton = target;
    }else{
        secondButton = target;
        checkPair();
    }
}

const createButton = (element) => {
    const buttonItem = creatElement('BUTTON','card');
    var myLabel = document.createTextNode(element.getValue()); 
    buttonItem.addEventListener('click',myClick);
    buttonItem.appendChild(myLabel);
    buttonItem.setAttribute('data-key',element.getKey())
    return buttonItem;
}

loadPage = () => {
    let counIndex = 0;
    while (counIndex < itemsListTranslation.length) {
        grid.appendChild(createButton(itemsListWord[counIndex]));
        grid.appendChild(createButton(itemsListTranslation[counIndex]));
        counIndex++;
    }
}

window.onload = () => {
    loadPage();
}
