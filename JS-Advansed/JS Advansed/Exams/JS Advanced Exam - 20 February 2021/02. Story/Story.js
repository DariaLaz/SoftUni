
class Story {
    #comments = [];
    #likes = [];
    constructor(title, creator){
        this.title = title;
        this.creator = creator;
    }
    get likes(){
        if(this.#likes.length == 0){
            return `${this.title} has 0 likes`
        } else if(this.#likes.length == 1){
            return `${this.#likes[0]} likes this story!`
        } else{
            return `${this.#likes[0]} and ${this.#likes.length - 1} others like this story!`
        }
    }
    like (username){
        if(this.#likes.includes(username)){
            throw "You can't like the same story twice!";
        } else if(username == this.creator){
            throw "You can't like your own story!";
        }
        this.#likes.push(username);
        return `${username} liked ${this.title}!`
    }
    dislike (username){
        if(!this.#likes.includes(username)){
            throw "You can't dislike this story!"
        } 
        this.#likes.splice(this.#likes.indexOf(username), 1);
        return `${username} disliked ${this.title}`
    }
    comment (username, content, id){
        if(!this.#comments[id]){
            let realid = this.#comments.length == 0 ? 1 : this.#comments.length

            this.#comments[realid] = {
                id: realid,
                username,
                content,
                replies: []
            }
            return `${username} commented on ${this.title}`
        } 
        
        let reply = {
            replyId: `${id}.${this.#comments[id].replies.length == 0 ? 1 : this.#comments[id].replies.length + 1}`,
            rusername: username,
            rcontent: content
        }
        this.#comments[id].replies.push(reply)

        return "You replied successfully"
    }
    toString(sortingType){
        if(sortingType == 'asc'){
            this.#comments.sort((a, b) => a.id - b.id)
            for (const comment of this.#comments) {
                if(comment){
                    comment.replies.sort((a, b) => a.replyId - b.replyId)
                }
            }
        } else if(sortingType == 'desc'){
            this.#comments.sort((a, b) => b.id - a.id)
            for (const comment of this.#comments) {
                if(comment){
                    comment.replies.sort((a, b) => b.replyId - a.replyId)
                }
            }
        } else if(sortingType == 'username'){
            this.#comments.sort((a, b) => (a.username).localeCompare(b.username))
            for (const comment of this.#comments) {
                if(comment){
                    comment.replies.sort((a, b) => (a.rusername).localeCompare(b.rusername))
                }
            }
        }

        let result = [];
        result.push(`Title: ${this.title}`)
        result.push(`Creator: ${this.creator}`)
        result.push(`Likes: ${this.#likes.length}`)
        result.push(`Comments:`)
        
        for (const comment of this.#comments) {
           if(comment){
                result.push(`-- ${comment.id}. ${comment.username}: ${comment.content}`);
                for (const reply of comment.replies) {
                result.push(`--- ${reply.replyId}. ${reply.rusername}: ${reply.rcontent}`)
            }
           }
        }
        return result.join('\n')
    }
}


let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
