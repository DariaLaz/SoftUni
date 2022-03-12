import {showHomePage, hideItems} from './view.js'



export const addMovie = async function(){
    document.querySelector('#add-movie').classList.remove('hide');
    let addMovieSection = document.querySelector('#add-movie');
    let form = addMovieSection.children[0];

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        let formData = new FormData(form);
    
        let title = formData.get('title')
        let description = formData.get('description')
        let imageUrl = formData.get('imageUrl')

        let movie = {
            title,
            description,
            img: `${imageUrl}`,
        }

        let token = JSON.parse(sessionStorage.userData).token;
        try{
            if(title == '' || description == '' || imageUrl == ''){
                throw new Error('All fields are required')
            }
            fetch('http://localhost:3030/data/movies', {
                method: 'POST',
                headers: {
                    'X-Authorization': `${token}`
                },
                body: JSON.stringify(movie)
            })    
        } catch(err){
            alert(err.message)
        }
        form.reset()
        showHomePage()
        document.querySelector('#add-movie').classList.add('hide');
    })
}