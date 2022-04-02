import { addDonation, deletePet, getDonationsByUser, getDonationsCount, getPetById } from '../api/user.js';
import {html} from '../library.js'
import { getUserDetails } from '../userData.js'

const detailsTemplate = (pet, isOwner, onDelete, donations, hasDonated, onDonation) => html`
    <!--Details Page-->
    <section id="detailsPage">
        <div class="details">
            <div class="animalPic">
                <img src="./images/Shiba-Inu.png">
            </div>
            <div>
                <div class="animalInfo">
                    <h1>Name: ${pet.name}</h1>
                    <h3>Breed: ${pet.breed}</h3>
                    <h4>Age: ${pet.age}</h4>
                    <h4>Weight: ${pet.weight}</h4>
                    <h4 class="donation">Donation: ${donations * 100}$</h4>
                </div>
                
                ${Boolean(getUserDetails()) ?
                html`
                <div class="actionBtn">
                    ${isOwner ?
                    html`
                   <a href="/edit/${pet._id}" class="edit">Edit</a>
                    <a href="javascript:void(0)" @click=${onDelete} class="remove">Delete</a>`
                    : html`${hasDonated ?
                    null : html`<a href="javascript:void(0)"  @click=${onDonation} class="donate">Donate</a>`}`}
                </div>` : null}
                
            </div>
        </div>
    </section>`

export async function detailsPage(ctx){
    const userData = getUserDetails();
    let id = ctx.params.id;

    const [pet, donations, hasDonated] = await Promise.all([
        getPetById(id),
        getDonationsCount(id),
        userData ? getDonationsByUser(id, userData.id) : 0
    ])
    const isOwner = userData && pet._ownerId == userData.id;
    
    ctx.render(detailsTemplate(pet, isOwner, onDelete, donations, hasDonated, onDonation))
    
    async function onDelete(){
        const choice = confirm('Are you sure you want to delete this')
        if(choice){
            await deletePet(ctx.params.id);
            ctx.page.redirect('/')
        }
    }
    async function onDonation(){
        addDonation(id)
        ctx.page.redirect(`/details/${id}`)
    }
}