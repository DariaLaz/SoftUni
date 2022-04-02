import { page } from './library.js'
import { manageContext, manageUserNavigation } from './middlewares/manageContext.js';
import { createPage } from './pages/create.js';
import { dashboardPage } from './pages/dashboard.js';
import { detailsPage } from './pages/details.js';
import { editPage } from './pages/edit.js';
import { homePage } from './pages/home.js';
import { loginPage } from './pages/login.js';
import { registerPage } from './pages/register.js';


page(manageContext);
page('/', homePage)
page('/dashboard', dashboardPage)
page('/create', createPage)
page('/login', loginPage)
page('/register', registerPage)
page('/edit/:id', editPage)
page('/details/:id', detailsPage)

manageUserNavigation();

page.start();

console.log('here')