import React, { useContext } from 'react'
import { Authcontextprovider } from './Provider/Authprovider'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

export default function Register() {
    const { createuser } = useContext(Authcontextprovider)
    const hendleregister = (e) => {
        e.preventDefault()
        const data = e.target
        const email = data.email.value
        const password = data.password.value
        const objdata = { email, password }
        console.log(objdata)



        createuser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    icon: "success",
                    title: "Successfull Register!",
                    text: "You Have Successfully Register!"
                });
            })
            .catch(error => {
                console.log(error)

            })

    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register First!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={hendleregister}>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input name='email' type="email" className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input name='password' type="password" className="input" placeholder="Password" />
                                    <button className="btn btn-neutral mt-4">Register</button>
                                </fieldset>
                            </form>
                            <p>You have an account so,Please <Link className='text-blue-400 font-bold text-xl' to='/login'>Login</Link> Now </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
