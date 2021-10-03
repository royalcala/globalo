import React from 'react'
import withContainer from '../Routes.withContainer'
import DataGridView from '../../Components/DataGridView'
import {listCompanies} from '../../graphql/queries'
 
function ListCompanies() {

    return (
        <DataGridView
            columns={[{ field: 'commodity', width: 150 }]}
            onFetch={async () => {

            }}
        />
    )
}

export default withContainer(ListCompanies, ["Catalogos", "Empresas", "Lista"]) as any