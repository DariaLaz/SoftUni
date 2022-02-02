function solution(option){
    switch(option){
        case 'upvote':
            upvote.call(this);
            break;
        case 'downvote':
            downvote.call(this);
            break;
        case 'score':
            return (score.call(this));
    }
    function upvote(){
        this.upvotes++;
    }
    function downvote(){
        this.downvotes++;
    }
    function score(){
        let balance = this.upvotes - this.downvotes
        let obfuscation = Math.ceil(0.25 * Math.max(this.upvotes, this.downvotes))
        let up = this.upvotes;
        let down = this.downvotes;
        if(this.upvotes + this.downvotes > 50){
            up += obfuscation;
            down += obfuscation;
        }
        function rating(){
            let rating = '';
            if((this.upvotes + this.downvotes) < 10){
                rating = 'new';
            } else if(this.upvotes > 0.66 * (this.upvotes + this.downvotes)){
                rating = 'hot'
            } else if(balance < 0){
                rating = 'unpopular'
            } else if(balance >= 0 && (this.upvotes + this.downvotes) > 100){
                rating = 'controversial'
            } else{
                rating = 'new'
            }
            return rating;
        }
        return[up, down, balance, rating.call(this)]
    }
}
// var forumPost = {
//     id: '2',
//     author: 'gosho',
//     content: 'whats up?',
//     upvotes: 120,
//     downvotes: 30
// };

// var answer = solution.call(forumPost, 'score'); //[150, 60, 90, 'hot'];
// console.log(answer)

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score)
for (let i = 0; i < 50; i++) {
    solution.call(post, 'downvote');
} // (executed 50 times)
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
console.log(score)

// var forumPost = {
//     id: '1',
//     author: 'pesho',
//     content: 'hi guys',
//     upvotes: 0,
//     downvotes: 0
// };

// solution.call(forumPost, 'upvote');

// var answer = solution.call(forumPost, 'score'); //[1, 0, 1, 'new'];
// console.log(answer)