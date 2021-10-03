import React from 'react'
import { Redirect } from 'react-router-dom'
import { GlobalContext } from '../App'



const withLogin = (Component: React.ElementType) => (props: any) => {
    const globalContext = React.useContext(GlobalContext)

    if (globalContext.user)
        return <Component />
    else
        return <Redirect to="/login" />
}


export default withLogin