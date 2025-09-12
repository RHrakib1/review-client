import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Users() {
    const loaderuse = useLoaderData()
    return (
        <div>
            <h1>Data {loaderuse.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Creaation Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            loaderuse.map(data => <tr>
                                <td>{data.email}</td>
                                <td>{data.createtime}</td>
                                <td>Blue</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
