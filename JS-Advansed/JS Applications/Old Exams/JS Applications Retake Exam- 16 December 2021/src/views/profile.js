import { getMyEvents } from '../api/data.js';
import {html} from '../lib.js'
import { getUserData } from '../util.js';

const profileTemplete = (email, myevents) => html`
        <section id="profilePage">
            <div class="userInfo">
                <div class="avatar">
                    <img src="./images/profilePic.png">
                </div>
                <h2>${email}</h2>
            </div>
            <div class="board">
                ${myevents.length == 0 ?
                html`<div class="no-events">
                    <p>This user has no events yet!</p>
                </div>`
                : myevents.map(eventsTemplate)};
            </div>
        </section>`;

function eventsTemplate(event){
    return html`<div class="eventBoard">
    <div class="event-info">
        <img src="${event.imageUrl}">
        <h2>${event.title}</h2>
        <h6>${event.date}</h6>
        <a href="\details\${event._id}" class="details-button">Details</a>
    </div>
    </div>`
}

export async function profilePage(ctx){
    let user = getUserData();
    let email = user.email;
    let id = user._id;
    let myevents = await getMyEvents(id)
    console.log(myevents)
    ctx.render(profileTemplete(email, myevents))
}