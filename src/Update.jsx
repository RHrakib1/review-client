import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function Update() {
    const loadderupdate = useLoaderData()
    const { _id, name, price, quantity, photo } = loadderupdate
    const hendleupdate = e => {
        e.preventDefault()
        const datashort = e.target
        const name = datashort.name.value
        const price = datashort.price.value
        const quantity = datashort.quantity.value
        const photo = datashort.photo.value
        const objdata = { name, price, quantity, photo }
        console.log(objdata)

        fetch(`http://localhost:5000/products/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(objdata)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        icon: "success",
                        title: "Update Successfull!",
                        text: "Successfully updatet to data!"
                    });
                }
                console.log(data)
            })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Add Product Information now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={hendleupdate}>
                                <fieldset className="fieldset">
                                    <label className="label">Name</label>
                                    <input defaultValue={name} name='name' type="text" className="input" placeholder="Name" />
                                    <label className="label">Price</label>
                                    <input defaultValue={price} name='price' type="text" className="input" placeholder="Price" />
                                    <label className="label">Quantity</label>
                                    <input defaultValue={quantity} name='quantity' type="text" className="input" placeholder="quantity" />
                                    <label className="label">Photo</label>
                                    <input defaultValue={photo} name='photo' type="text" className="input" placeholder="photo" />
                                    <button className="btn btn-neutral mt-4">Update Product</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
