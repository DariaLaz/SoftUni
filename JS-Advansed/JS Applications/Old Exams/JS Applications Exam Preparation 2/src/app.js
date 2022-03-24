import { page } from './lib.js'
import { decorateContext, updateUserNav } from './middlewares/decorateContext.js';
import { allListingsPage } from './views/allListings.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { myListingsPage } from './views/myListings.js';
import { registerPage } from './views/register.js';
import { searchPage } from './views/search.js';

page(decorateContext);
page('/', homePage)
page('/allListings', allListingsPage)
page('/login', loginPage)
page('/register', registerPage)
page('/myListings', myListingsPage)
page('/create', createPage)
page('/details/:id', detailsPage)
page('/edit/:id', editPage)
page('/search', searchPage)

updateUserNav();

page.start();