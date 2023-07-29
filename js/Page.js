class Page {

    static getByClass(className){
        return document.querySelector('.' + className);
    }

    static creatElement(tag, className) {
        const element = document.createElement(tag);
        element.className = className;
        return element; 
    }

    static createCard(element) {
        const cardItem = Page.creatElement('div','card');
        var myLabel = document.createTextNode(element.getValue()); 
        cardItem.addEventListener('click',myClick);
        cardItem.appendChild(myLabel);
        cardItem.setAttribute('data-key',element.getKey())
        return cardItem;
    }

    static addItemsGrid(itemsListTranslation, itemsListWord){

        const grid = Page.getByClass("grid");
        grid.innerHTML = "";
        
        let counIndex = 0;
        while (counIndex < itemsListTranslation.length) {
            grid.appendChild(Page.createCard(itemsListWord[counIndex]));
            grid.appendChild(Page.createCard(itemsListTranslation[counIndex]));
            counIndex++;
        }
    }

}