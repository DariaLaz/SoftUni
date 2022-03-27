import { render, html } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs'

export const teamTemplate = (teams) => html`
    ${teams.map(t => html`
    <article class="layout">
        <img src="./assets/atat.png" class="team-logo left-col">
        <div class="tm-preview">
            <h2>${t.name}</h2>
            <p>${t.description}</p>
            <span class="details">${getMembers(t._id).length} Members</span>
            <div><a href="#" class="action">See details</a></div>
        </div>
    </article>`)}`;

export async function getMembers(teamId) {
    // const query = encodeURIComponent(`teamId IN ("${teamIds.join('", "')}") AND status="member"`);
    const response = await fetch(`http://localhost:3030/data/members?where=${query}`);
    // return await response.json();
}
