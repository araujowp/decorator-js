const grid = document.querySelector(".grid");

const creatElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element; 
}

var itensList = [
    new Item('k1', 'pond', 'lago'),
    new Item('k2', 'pound', 'curral'),
    new Item('k3', 'care', 'cuidado'),
    new Item('k4', 'shut', 'fechar'),
    new Item('k5', 'settlement', 'assentamento')
];

loadPage = () => {
    itensList.forEach((item) => {
        const buttonItem = creatElement('BUTTON','card');
        var myLabel = document.createTextNode(item.getWord()); 
        buttonItem.appendChild(myLabel);
        grid.appendChild(buttonItem);
    });
}

window.onload = () => {
    loadPage();
}
