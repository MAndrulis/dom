import { renderHeader } from "./header.js";

renderHeader(false);

const goods = [
    { name: 'Morka', price: 1, },
    { name: 'Kopustas', price: 1.5, },
    { name: 'Svogunas', price: 2, },
    { name: 'Agurkas', price: 3, },
    { name: 'Pomidoras', price: 4.5, },
    { name: 'Bulve', price: 1.29, },
    { name: 'Kalafioras', price: 102.99, },
];

const listDOM = document.querySelector('ul');

for (const { name, price } of goods) {
    const formatedPrice = price.toFixed(2).replace('.', ',');

    listDOM.innerHTML += `<li>${name} (${formatedPrice} Eur)</li>`;
}
//listDOM.innerHTML += `<li>${item.name} (${item.price.toFixed(2).replace('.', ',')} Eur)</li>`;
//listDOM.innerHTML += newItemHTML
/*for (let i = 0; i < goods.length; i++) {
    const item = goods[i];
    const price = prices[i];

    listDOM.innerHTML += `<li>${item} (${price.toFixed(2)} Eur)</li>`;    
}*/
