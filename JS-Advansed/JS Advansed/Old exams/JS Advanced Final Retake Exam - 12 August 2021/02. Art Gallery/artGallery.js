class ArtGallery{
    constructor(creator){
        this.creator = creator
        this.possibleArticles = { 
            picture:200,
            photo:50,
            item:250 }
        this.listOfArticles = []
        this.guests = []
    }

    addArticle(articleModel, articleName, quantity ){ 
        if(!this.possibleArticles[articleModel.toLowerCase()]){
            throw new Error("This article model is not included in this gallery!");
        } else if(this.listOfArticles.find(x => x.articleName == articleName && x.articleModel == articleModel.toLowerCase())){
            this.listOfArticles.find(x => x.articleName == articleName && x.articleModel == articleModel.toLowerCase()).quantity += quantity;
        } else{
            this.listOfArticles.push({
                articleModel: articleModel.toLowerCase(),
                articleName,
                quantity
            })
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest(guestName, personality){
        if(this.guests.find(x => x.guestName == guestName)){
            throw new Error(`${guestName} has already been invited.`)
        }
        let points = 50;
        if(personality == "Vip"){
            points = 500;
        } else if(personality == "Middle"){
            points = 250;
        }
        this.guests.push({
            guestName, 
            points,
            purchaseArticle: 0
        })
        return `You have successfully invited ${guestName}!`
    }
    buyArticle(articleModel, articleName, guestName){
        let currArticle = this.listOfArticles.find(x => x.articleName == articleName && x.articleModel == articleModel.toLowerCase());
        let currGuest = this.guests.find(x => x.guestName == guestName);
        if(!currArticle){
            throw new Error("This article is not found.");
        } else if(currArticle.quantity == 0){
            return `The ${articleName} is not available.`
        } else if(!this.guests.find(x => x.guestName == guestName)){
            return "This guest is not invited.";
        }
        let nessesaryPoints = this.possibleArticles[articleModel.toLowerCase()];
        if(nessesaryPoints > currGuest.points){
            return "You need to more points to purchase the article."
        }

        currGuest.points -= nessesaryPoints;
        currGuest.purchaseArticle ++;
        currArticle.quantity --;

        return `${guestName} successfully purchased the article worth ${nessesaryPoints} points.`
    }
    showGalleryInfo (criteria){
        let result = [];
        if(criteria == "article"){
            result.push("Articles information:");
            for (const article of this.listOfArticles) {
                result.push(`${article.articleModel} - ${article.articleName} - ${article.quantity}`)
            }
        } else if(criteria == "guest"){
            result.push("Guests information:");
            for (const guest of this.guests) {
                result.push(`${guest.guestName} - ${guest.purchaseArticle}`)
            }
        }
        return result.join('\n')
    }
}
