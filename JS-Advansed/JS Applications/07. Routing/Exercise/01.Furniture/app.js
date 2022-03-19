import page from './node_modules/page/page.mjs'
import { createView } from './views/create.js'
import { dashboardView } from './views/dashboard.js'
import { detailsView } from './views/details.js'
import { editView } from './views/edit.js'
import { loginView } from './views/login.js'
import { logoutView } from './views/logout.js'
import { profileView } from './views/profile.js'
import { registerView } from './views/register.js'


page('/create', createView)
page('/profile', profileView)
page('/logout', logoutView)
page('/login', loginView)
page('/register', registerView)
page('/dashboard', dashboardView)
page('/details', detailsView)
page('/edit/:id', editView)




page.start();