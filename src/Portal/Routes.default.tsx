import React from 'react'
import withContainer from './Routes.withContainer'

function Default() {

    return (
        <div>
            Default
        </div>
    )
}


export default withContainer(Default, ['default'])