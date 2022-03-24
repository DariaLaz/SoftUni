import { page } from './lib.js'
import { decorateContext, updateUserNav } from './middlewares/decorateContext.js';
import { cataloguePage } from './views/catalogue.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';


page(decorateContext);
page('/', homePage)
page('/games', cataloguePage)
page('/create', createPage)
page('/login', loginPage)
page('/register', registerPage)
page('/details/:id', detailsPage)
page('/edit/:id', editPage)



updateUserNav();

page.start();