import { page } from './library.js'
import { manageContext, manageUserNavigation } from './middlewares/manageContext.js';
import { createPage } from './pages/create.js';
import { detailsPage } from './pages/details.js';
import { editPage } from './pages/edit.js';
import { homePage } from './pages/home.js';
import { loginPage } from './pages/login.js';
import { profilePage } from './pages/profile.js';
import { registerPage } from './pages/register.js';

page(manageContext);
page('/', homePage)
page('/create', createPage)
page('/details/:id', detailsPage)
page('/edit/:id', editPage)
page('/login', loginPage)
page('/profile', profilePage)
page('/register', registerPage)

manageUserNavigation();

page.start();