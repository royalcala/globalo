import React from 'react'
import { Route, Switch } from "react-router-dom";
import { RoutesNested as Session } from './menuLeft/Session'
import { LazyComponent } from './LazyComponent'

export default function Routes() {

    return (
        <Switch>
            <Route path='/session'>
                <Session />
            </Route>
            <Route path='/login'>
                <LazyComponent Component={React.lazy(() => import('./Routes.login'))} />
            </Route>
            <Route path='/'>
                <LazyComponent Component={React.lazy(() => import('./Routes.default'))} />
            </Route>
        </Switch>
    )
}