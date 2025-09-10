import React from 'react'

export default function SubView({ data }) {
    const { _id, name, price, quantity } = data
    return (
        <div>
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">Name:{name}</h2>
                        <p className="dark:text-gray-800">Price: {price}</p>
                        <p className="dark:text-gray-800">Quantity: {quantity}</p>
                    </div>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Read more</button>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Read more</button>
                </div>
            </div>
        </div>
    )
}
