const pageQuantity = 34;

const url = 'https://rickandmortyapi.com/api/character/?page=';
const btn = document.querySelector('.load-btn');
const ul = document.querySelector('.character-list');
const select = document.querySelector('.pages');

btn.addEventListener('click', loadNames);

for (let index = 1; index <= pageQuantity; index++) {
    const option = document.createElement('option');
    option.innerText = 'Страница ' + index;
    option.value = index;
    select.append(option);
}

function loadNames() {
    btn.innerText = 'Getting data...'
    
    fetch(url + select.value)
    .then(response => response.json())
    .then(res => {
        ul.innerHTML = '';
        btn.innerText = 'Get data'

        if (res.error) {
            btn.disabled = true
            return;
        }

        res.results.forEach(el => {
            const li = document.createElement('li');
            li.innerText = el.name;
            ul.append(li)
        });
    })
}