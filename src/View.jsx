import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import SubView from './SubView'

export default function View() {
    const loaderdata = useLoaderData()
    const [datause, setdatause] = useState(loaderdata)

    return (
        <div>
            <h1>Product info is: {loaderdata.length} data</h1>
            <div className='grid grid-cols-5 gap-4'>
                {
                    datause.map(data => <SubView
                        datause={datause}
                        data={data}
                        setdatause={setdatause}
                    ></SubView>)
                }
            </div>
        </div>
    )
}
