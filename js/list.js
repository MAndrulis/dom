const goods = [
    {name: 'Morka', price: 1 , },
    {name: 'Kopustas', price: 1.50 , },
    {name: 'Svogunas', price: 2 , },
    {name: 'Agurkas', price: 3 , },
    {name: 'Pomidoras', price: 4.50 , },
    {name: 'Bulve', price: 1.29 , },
    {name: 'Kalafioras', price: 102.99 , },
];

const prices = [1, 1.5, 2, 3, 4.5, 1.29, ];

const listDOM = document.querySelector('ul');

for (const item of goods) {
    const name = item.name
    const price = item.price.toFixed(2).replace('.', ',');
     
    listDOM.innerHTML += `<li>${name} (${price} Eur) </li>`;
    //listDOM.innerHTML += `<li>${item.name} (${item.price.toFixed(2).replace('.', ',')} Eur)</li>`;
    //listDOM.innerHTML += newItemHTML
}
/*for (let i = 0; i < goods.length; i++) {
    const item = goods[i];
    const price = prices[i];

    listDOM.innerHTML += `<li>${item} (${price.toFixed(2)} Eur)</li>`;    
}*/
