const searchInput = document.getElementById('search');

searchInput.addEvenListener('input', (event) => {
    const value = formatString(event.target.value);

    const items = document.querySelectorAll('.itens .item-pesquisado');

    let hasResults = false;

    items.forEach(item => {
        //const itemTitle = item.querySelector('.item-title').textContent;

        if ((formatString(item.textContent)).indexOf(value) !== -1) {
            item.style.display = 'flex';
            hasResults = true;
        } else {
            item.style.display = 'none';
        }
    })
    if (hasResults){
        noResults.style.display = 'none';
    } else {
        noResults.style.display = 'block';
    }

})




function formatString(value) {
    return value
    .toLowCase()
    .trim()
    .normalize()
    .replace(/[\u0300-\u036f]/g, '')

}