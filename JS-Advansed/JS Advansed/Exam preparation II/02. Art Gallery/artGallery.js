class ArtGallery{
    constructor(creator){
        this.creator = creator;
        this.possibleArticles = { 
            picture:200,
            photo:50,
            item:250 
        };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity){
        if(!Object.keys(this.possibleArticles).includes(articleModel.toLowerCase())){
            throw new Error("This article model is not included in this gallery!");
        }

        if(!this.listOfArticles.find(x => x.articleModel.toLowerCase() == articleModel.toLowerCase() &&
            x.articleName == articleName)){
                this.listOfArticles.push({
                    articleModel: articleModel.toLowerCase(),
                    articleName,
                    quantity: 0
                })
            }
        this.listOfArticles.find(x => x.articleModel == articleModel.toLowerCase() && x.articleName == articleName).quantity += quantity;
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest(guestName, personality){
        if(this.guests.find(x => x.guestName == guestName)){
            throw new Error(`${guestName} has already been invited.`)
        }
        let points = 50;
        if(personality == 'Vip'){
            points = 500;
        } else if(personality == 'Middle'){
            points = 250;
        }
        this.guests.push({
            guestName,
            points,
            purchaseArticle: 0
        })
        return `You have successfully invited ${guestName}!`
    }

    buyArticle ( articleModel, articleName, guestName){
        let currArticle = this.listOfArticles.find(x => x.articleModel == articleModel.toLowerCase() && x.articleName == articleName);
        let currGuest = this.guests.find(x => x.guestName == guestName)
        if(!currArticle){
            throw new Error("This article is not found.")
        } else if(currArticle.quantity == 0){
            return `The ${articleName} is not available.`;
        } else if(!currGuest){
            return "This guest is not invited."
        } 

        if(currGuest.points < this.possibleArticles[articleModel.toLowerCase()]){
            return "You need to more points to purchase the article."
        }

        currGuest.points -= this.possibleArticles[articleModel.toLowerCase()];
        currArticle.quantity --;
        currGuest.purchaseArticle++;

        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel.toLowerCase()]} points.`
    }

    showGalleryInfo (criteria){
        let result = []
        if(criteria == 'article'){
            result.push("Articles information:");
            for (const article of this.listOfArticles) {
                result.push(`${article.articleModel} - ${article.articleName} - ${article.quantity}`)
            }
        } else if(criteria == 'guest'){
            result.push("Guests information:");
            for (const guest of this.guests) {
                result.push(`${guest.guestName} - ${guest.purchaseArticle}`)
            }
        }

        return result.join('\n')
    }
}

const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

