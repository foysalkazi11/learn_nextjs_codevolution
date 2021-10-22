import React from 'react'
import {useRouter} from 'next/router'

const DetailsProduct = () => {
    const {query:{id}} = useRouter()
    
    return (
        <div>
            DetailsProduct product {id}
        </div>
    )
}

export default DetailsProduct
