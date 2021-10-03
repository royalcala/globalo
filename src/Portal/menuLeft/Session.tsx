import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { CollapseMenu, LinkButton } from '../MenuLeft.Items'
import ListIcon from '@mui/icons-material/List';
import BusinessIcon from '@mui/icons-material/Business';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { LazyComponent } from '../LazyComponent';

export const paths = {
    company: {
        new: '/session/company/new',
        edit: '/session/company/edit',
        list: '/session/company/list'
    }
}
export function Menu() {
    return (
        <CollapseMenu
            pl={2}
            Icon={PersonIcon}
            label="Mi Sesión"
        >
            <CollapseMenu
                pl={3}
                Icon={BusinessIcon}
                label="Empresas"
            >
                <LinkButton
                    Icon={AddCircleIcon}
                    pl={4}
                    route={paths.company.new}
                    text="Nueva Empresa"
                />
                <LinkButton
                    Icon={ListIcon}
                    pl={4}
                    route={paths.company.list}
                    text="Lista Empresas"
                />
            </CollapseMenu>
        </CollapseMenu>
    )
}

export function RoutesNested() {
    return (
        <Switch>
            <Route path={paths.company.new}>
                <LazyComponent Component={React.lazy(() => import('./Session.company.new'))} />
            </Route>
            <Route path={paths.company.edit+'/:id'}>
                <LazyComponent Component={React.lazy(() => import('./Session.company.edit'))} />
            </Route>
            <Route path={paths.company.list}>
                <LazyComponent Component={React.lazy(() => import('./Session.company.list'))} />
            </Route>
        </Switch>
    )
}