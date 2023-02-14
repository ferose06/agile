

//Components
import SignIn from '../components/pages/SignIn'
import SignUp from '../components/pages/SignIn/signup'
import Forget from '../components/pages/SignIn/forget'
import Admin from '../components/pages/SignIn/admin'
import Adhome from '../components/pages/SignIn/adhome'
import Home from '../components/pages/SignIn/home'


const routes = [
    {
        path: "/",
        component: SignIn,
        protectedRoute: false,
    },
    {
        path: "/admin",
        component: Admin,
        protectedRoute: false,
    },
    {
        path: "/signup",
        component: SignUp,
        protectedRoute: false,
    },
    {
        path: "/forget",
        component: Forget,
        protectedRoute: false,
    },
    {
        path: "/home",
        component: Home,
        protectedRoute: false,
    },
    {
        path: "/adhome",
        component: Adhome,
        protectedRoute: false,
    }
]


export default routes;