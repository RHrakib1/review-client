import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function SubView({ data, datause, setdatause }) {
    const { _id, name, price, quantity, photo } = data




    const heandledelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/products/${id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });


                                const remaimming = datause.filter(d => d._id !== id)
                                setdatause(remaimming)
                            }
                        })
                }
            });
    }

    return (
        <div>
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                <img src={photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">Name:{name}</h2>
                        <p className="dark:text-gray-800">Price: {price}</p>
                        <p className="dark:text-gray-800">Quantity: {quantity}</p>
                    </div>
                    <button onClick={() => heandledelete(_id)} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"><RiDeleteBinLine /></button>
                    <Link to={`/updateproduct/${_id}`}>
                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"><FaRegEdit /></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
