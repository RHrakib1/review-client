import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SubView from './SubView'

export default function View() {
    const loaderdata = useLoaderData()

    return (
        <div>
            <h1>Product info is: {loaderdata.length} data</h1>
            {
                loaderdata.map(data => <SubView data={data}></SubView>)
            }
        </div>
    )
}
