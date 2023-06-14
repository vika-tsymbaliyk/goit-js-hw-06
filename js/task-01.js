const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesItems.length}`);
categoriesItems.forEach(element => {
    console.log(`Category: ${element.querySelector('h2').textContent}`);
    console.log(`Elements: ${element.querySelectorAll('li').length}`)
    
});