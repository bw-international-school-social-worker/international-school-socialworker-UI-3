

// Purpose: When the 'open / close' button is clicked the .article element expands to show the associated picture and text


// Article class defined here
class Article {
    constructor(domElement){
        
        this.domElement = domElement;

        this.openButton = domElement.querySelector('.openButton');
        
        this.openButton.textContent = 'open / close';

        this.openButton.addEventListener('click', () => this.openArticle());

    }

    openArticle() {
        this.domElement.classList.toggle('article-open');
    }

}



// .articles variable defined here

let articles = document.querySelectorAll('.article');

articles.forEach(function(article){
    return new Article(article);
})
