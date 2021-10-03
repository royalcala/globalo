import { withAuthenticator } from "@aws-amplify/ui-react";
import withContainer from './Routes.withContainer'
function Login() {
    return (<div>Has iniciado sesión</div>)
}


export default
    withContainer(
        withAuthenticator(Login), ['login']
    )
