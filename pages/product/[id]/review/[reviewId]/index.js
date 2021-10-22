import React from 'react'
import {useRouter} from 'next/router'

const ProductSingleReiew = () => {
    const {query} = useRouter()
    console.log(query);
    return (
        <div>
            product id {query?.id} and reviw id {query?.reviewId}
        </div>
    )
}

export default ProductSingleReiew
