const product = [
{
    name: 'Био-С Имун + Ваниль',
    company: 'Food master',
    fatContent: '3,2 %',
    id: 1,
    volume: '1 л',
    country: ['Almaty','Astana','Shymkent','Aktobe','Qyzylorda','Taldyqorgan'],
    img: 'https://baron.kz/image/cache/catalog/catalog/milk_egg/foodmaster/fmbios-600x400.jpg'
},
{
    name: 'Сливки 10 % Adal',
    company: 'Food master',
    fatContent: '3,2 %',
    id: 2,
    volume: '925 мл',
    country: ['Almaty','Astana','Shymkent','Aktobe','Qyzylorda','Taldyqorgan'],
    img: 'https://baron.kz/image/cache/catalog/catalog/milk_egg/adal/slivki-10-adal-925-ml-600x400.jpg'
},
{
    name: 'Молоко сгущённое цельное «3 желания»',
    company: 'Food master',
    fatContent: ' 8,5%',
    id: 3,
    volume: '380 г',
    country: ['Almaty','Astana','Shymkent','Aktobe','Qyzylorda','Taldyqorgan'],
    img: 'https://baron.kz/image/cache/catalog/catalog/bakaleya/sgushenka-600x400.jpg'
},
{
    name: 'Маргарин «3 желания» Пампушка',
    company: 'Food master',
    fatContent: '',
    id: 3,
    volume: '380 г',
    country: ['Almaty','Astana','Shymkent','Taraz','Aktobe','Qyzylorda','Taldyqorgan'],
    img: 'https://baron.kz/image/cache/catalog/catalog/milk_egg/3zhelania/maslopompush-600x400.jpg'
},
{
    name: 'Йогурт питьевой со вкусом клубники',
    company: 'Food master',
    fatContent: '2%',
    id: 3,
    volume: '900 г',
    country: ['Almaty','Astana','Shymkent','Taraz','Aktobe','Qyzylorda','Taldyqorgan'],
    img: 'https://baron.kz/image/cache/catalog/catalog/milk_egg/food-master-jogurt-pitevoj-so-vkusom-klubniki-2-900-g-600x400.jpg'
},
{
    name: 'Кефир 2,5%, 1л',
    company: 'Food master',
    fatContent: '2%',
    id: 6,
    volume: '1 л',
    country: ['Almaty','Astana','Shymkent','Taraz','Aktobe','Qyzylorda','Taldyqorgan'],
    img: 'https://baron.kz/image/cache/catalog/catalog/milk_egg/foodmaster/fm_kefir-600x400.jpg'
}

]
let milk_container = document.getElementById('milk-product');
showProducts()

function showProducts( products = product){
    document.getElementById('milk-product').innerHTML=''
    for(let i = 0; i < products.length; i++) {
        
        let image = document.createElement('img')
        image.setAttribute('class', 'milk-3-2');
        image.setAttribute('src', products[i].img);
        image.setAttribute('alt', 'photo')
        
        let h2 = document.createElement('h2');
        h2.innerText = products[i].name+'\n';
        let span1 = document.createElement('span');
        span1.innerText = products[i].company;
        span1.setAttribute('class', 'italic');
    
        h2.setAttribute('class', 'h2');
        h2.appendChild(span1);
    
        
        let p = document.createElement('p');
        p.innerText = products[i].volume;
        let span2 = document.createElement('span');
        span2.innerText = products[i].fatContent;
        span2.setAttribute('class', 'bold');
        span2.style.float = 'right';
    
        p.appendChild(span2);
    
        let div = document.createElement('div');
        div.setAttribute('class', 'milk')
        div.appendChild(image);
        div.appendChild(h2);
    
        div.appendChild(p);
    
        milk_container.appendChild(div);
    
    }
}


function selectCity() {
    let select = document.getElementById('select');
    let value = select.options[select.selectedIndex].value;
    let text = select.options[select.selectedIndex].text;
    console.log(value, text);
    const res = []
    for(let i = 0; i < product.length; i++) {
        if(product[i].country.includes(text)) {
            console.log(product[i])
            res.push(product[i])
        }
    }
    showProducts(res)
}
