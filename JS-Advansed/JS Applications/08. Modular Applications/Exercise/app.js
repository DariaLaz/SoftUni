import page from './node_modules/page/page.mjs'
import { teamsView } from './src/views/browseTeam.js'
import { homeView } from './src/views/home.js'
import { loginView } from './src/views/login.js'
import { logoutView } from './src/views/logout.js'
import { myTeamView } from './src/views/myTeam.js'
import { navigationView } from './src/views/navigation.js'
import { registerView } from './src/views/register.js'
page(navigationView)

page('/teams', teamsView)
page('/login', loginView)
page('/register', registerView)
page('/myteam', myTeamView)
page('/logout', logoutView)
page('/home', homeView)

page.start();