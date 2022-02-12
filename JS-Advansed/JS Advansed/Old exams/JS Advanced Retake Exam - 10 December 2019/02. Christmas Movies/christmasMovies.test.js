const expect = require('chai').expect;
const ChristmasMovies = require('./02. Christmas Movies_Resources');


describe("Christmas movies", function() {

    describe("Instantion", function() {
        it("Initialisation with no parameters", function() {
            let chrismasMovie = new ChristmasMovies();
            expect(chrismasMovie.movieCollection).to.deep.equal([])
            expect(chrismasMovie.watched).to.deep.equal({})
            expect(chrismasMovie.actors).to.deep.equal([])

        });
     });

     describe("buyMovie()", function() {
        it("Should throw error if the movie already exists", function() {
            let chrismasMovie = new ChristmasMovies();
            chrismasMovie.buyMovie('name', []);
            expect(() => chrismasMovie.buyMovie('name', [])).to.throw('You already own name in your collection!');
        });
        it("Should work properly", function() {
            let chrismasMovie = new ChristmasMovies();
            expect(chrismasMovie.buyMovie('name', ['a1', 'a2', 'a3'])).to.
                equal('You just got name to your collection in which a1, a2, a3 are taking part!');
            expect(chrismasMovie.movieCollection.length).to.equal(1);
        });
     });

     describe("discardMovie()", function() {
        it("Should throw error if the movie is not in the collection", function() {
            let chrismasMovie = new ChristmasMovies();
            expect(() => chrismasMovie.discardMovie('name').to.throw('name is not at your collection!'));
        });
        it("Should return string if the movie is in the watch list", function() {
            let chrismasMovie = new ChristmasMovies();
            chrismasMovie.buyMovie('name');
            chrismasMovie.watchMovie('name');
            expect(chrismasMovie.discardMovie('name')).to.equal('You just threw away name!');
        });
        it("Should throw error if the movie is not in the watch list", function() {
            let chrismasMovie = new ChristmasMovies();
            chrismasMovie.buyMovie('name');
            expect(() => chrismasMovie.discardMovie('name')).to.throw('name is not watched!');
        });
     });
     describe("watchMovie()", function() {
        it("Should throw error if there is not such movie in the collection", function() {
            let chrismasMovie = new ChristmasMovies();
            expect(() => chrismasMovie.watchMovie('name')).to.throw('No such movie in your collection!');
        });
        it('Should increase the count if the watched movie', function() {
            let chrismasMovie = new ChristmasMovies();
            chrismasMovie.buyMovie('name');
            chrismasMovie.watchMovie('name');
            expect(chrismasMovie.watched['name']).to.equal(1);
            chrismasMovie.watchMovie('name');
            expect(chrismasMovie.watched['name']).to.equal(2);
        });
     });

     describe("favouriteMovie()", function() {
        it("Should throw error if the collection is empty", function() {
            let chrismasMovie = new ChristmasMovies();
            expect(() => chrismasMovie.favouriteMovie('name')).to.throw('You have not watched a movie yet this year!');
        });
        it("Should return the favourate movie", function() {
            let chrismasMovie = new ChristmasMovies();
            chrismasMovie.buyMovie('name');
            chrismasMovie.buyMovie('name1');
            chrismasMovie.watchMovie('name');
            chrismasMovie.watchMovie('name');
            chrismasMovie.watchMovie('name1');
            expect(chrismasMovie.favouriteMovie()).to.equal('Your favourite movie is name and you have watched it 2 times!');
        });
     });

     describe("mostStarredActors()", function() {
        it("Should throw error if the collection is empty", function() {
            let chrismasMovie = new ChristmasMovies();
            expect(() => chrismasMovie.mostStarredActor('name')).to.throw('You have not watched a movie yet this year!');
        });
        it("Should return the most stared actor", function() {
            let chrismasMovie = new ChristmasMovies();
            chrismasMovie.buyMovie('name', ['a1', 'a2', 'a3'])
            chrismasMovie.buyMovie('name1', ['a4', 'a6', 'a3'])
            expect(chrismasMovie.mostStarredActor()).to.equal('The most starred actor is a3 and starred in 2 movies!');

        });
     });
});
