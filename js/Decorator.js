var itensBase  = [];
var _count  = 0;
var itemsListWord = [];
var itemsListTranslation = [];
let firstCard = null;
let secondCard = null; 

var wordBusiness = new WordBusiness();
itensBase = wordBusiness.get(7);

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

loadPage = () => {
    Page.addItemsGrid(itemsListTranslation, itemsListWord);
}

window.onload = () => {
    loadPage();
}
