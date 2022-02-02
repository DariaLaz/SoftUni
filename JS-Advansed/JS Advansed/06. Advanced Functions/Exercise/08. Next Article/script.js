function getArticleGenerator(articles) {
    let content = document.getElementById('content');
    return () => {
        while(articles.length > 0){
            let newArticleEl = document.createElement('article');
            newArticleEl.textContent = articles.shift();
            content.appendChild(newArticleEl)
        }
    }
}