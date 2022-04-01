import { getUserTheaters } from '../api/user.js';
import {html} from '../library.js'
import { getUserDetails } from '../userData.js'

const profileTemplate = (email, theaters) => html`
<!--Profile Page-->
<section id="profilePage">
            <div class="userInfo">
                <div class="avatar">
                    <img src="./images/profilePic.png">
                </div>
                <h2>${email}</h2>
            </div>
            <div class="board">
                
                ${theaters.length == 0
                ? html`
                <div class="no-events">
                    <p>This user has no events yet!</p>
                </div>`
                : theaters.map(theaterTemplate)}

            </div>
        </section>`

let theaterTemplate = (event) => html`
    <div class="eventBoard">
        <div class="event-info">
            <img src="${event.imageUrl}">
            <h2>${event.title}</h2>
            <h6>${event.date}</h6>
            <a href="/details/${event._id}" class="details-button">Details</a>
        </div>
    </div>`

export async function profilePage(ctx){
    let userdata = await getUserDetails();
    let email = userdata.email;
    let userTheaters = await getUserTheaters(userdata.id)

    ctx.render(profileTemplate(email, userTheaters))
}