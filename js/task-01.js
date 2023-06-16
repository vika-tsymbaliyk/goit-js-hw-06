const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(element => {
    console.log(`Category: ${element.children[0].textContent}`);
    console.log(`Elements: ${element.children[1].children.length}`)
    
});