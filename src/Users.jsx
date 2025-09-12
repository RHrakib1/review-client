import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function Users() {
    const loaderuse = useLoaderData()
    const [deleteCrl, setdeleteCrl] = useState(loaderuse)
    const heandledelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/userserver/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your file has been deleted.", "success")
                            const remaining = deleteCrl.filter(d => d._id !== id)
                            setdeleteCrl(remaining)
                        }
                    })
            }
        })
    }
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
                            deleteCrl.map(data => <tr>
                                <td>{data.email}</td>
                                <td>{data.createtime}</td>
                                <td className='cursor-pointer' onClick={() => heandledelete(data._id)}>X</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
