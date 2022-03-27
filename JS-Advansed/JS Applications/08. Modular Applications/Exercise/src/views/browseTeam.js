import { getAllTeams } from "../../api/data.js";
import { render, html } from '../../node_modules/lit-html/lit-html.js';
import { teamTemplate } from "./team.js";


const homeTemplate = (teams) => html`
    <section id="browse">
    <article class="pad-med">
        <h1>Team Browser</h1>
    </article>
    <article class="layout narrow">
        <div class="pad-small"><a href="#" class="action cta">Create Team</a>
            ${teamTemplate(teams)}
        </div>
        
    </article>
    </section>`

export async function teamsView(){
    let allteams = await getAllTeams();
    let teamsInfo = Object.entries(allteams).map(([k, v]) => (v));
    let container = document.querySelector('main')
    render(homeTemplate(teamsInfo), container);
}