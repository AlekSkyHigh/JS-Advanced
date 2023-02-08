function getArticleGenerator(articles) {

    const divContent = document.getElementById('content');

    return function showNext() {
        if (articles.length) {
            let article = document.createElement('article');
            article.textContent = articles.shift();
            divContent.appendChild(article);
        }
    };
}
