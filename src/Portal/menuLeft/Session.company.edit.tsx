import React from 'react'
import {
    useParams
} from "react-router-dom";
import withLogin from '../Routes.withLogin';
import withContainer from '../Routes.withContainer'
import { getCompany } from '../../graphql/queries'
import { updateCompany } from '../../graphql/mutations'
import { API } from 'aws-amplify';
import { GetCompanyQuery, UpdateCompanyMutation } from '../../API'
import FormEdit, { DataType } from '../../Components/Form.Edit'

function Edit() {
    let { id } = useParams<{ id: string }>();
    return (
        <FormEdit
            onFetch={async () => {
                const fetch = await API.graphql({ query: getCompany, variables: { id } }) as { data: GetCompanyQuery }
                const data: DataType = {
                    Detalles: {
                        fields: [
                            {
                                label: "Nombre Empresa", name: "name", rules: { required: 'Nombre requerido' }, defaultValue: fetch.data.getCompany?.name
                            },
                        ]
                    }
                }
                return data
            }}
            onSubmit={async (data) => {
                const fetch = await API.graphql({ query: updateCompany, variables: { input: { id, ...data } } }) as { data: UpdateCompanyMutation }
            }}
        />
    )
}

export default
    withLogin(
        withContainer(Edit, ["Catalogos", "Empresas", "Editar"])
    )