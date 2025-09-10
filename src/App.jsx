import React from 'react'
import Swal from 'sweetalert2'

export default function App() {
  const heandleform = e => {
    e.preventDefault()
    const datashort = e.target
    const name = datashort.name.value
    const price = datashort.price.value
    const quantity = datashort.quantity.value
    const objdata = { name, price, quantity }
    console.log(objdata)

    fetch('http://localhost:5000/products', {
      method: "POST",
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
            title: "Successfull!",
            text: "Successfully added to data!"
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
              <form onSubmit={heandleform}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input name='name' type="text" className="input" placeholder="Name" />
                  <label className="label">Price</label>
                  <input name='price' type="text" className="input" placeholder="Price" />
                  <label className="label">Quantity</label>
                  <input name='quantity' type="text" className="input" placeholder="quantity" />
                  <button className="btn btn-neutral mt-4">Add Product</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
