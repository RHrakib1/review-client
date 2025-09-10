import React, { useContext } from 'react'
import { Authcontextprovider } from './Provider/Authprovider'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

export default function Login() {
    const { loginuser } = useContext(Authcontextprovider)
    const hendlelogin = e => {
        e.preventDefault()
        const data = e.target
        const email = data.email.value
        const password = data.password.value
        const objdata = { email, password }
        console.log(objdata)

        loginuser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    icon: "success",
                    title: "Successfull login!",
                    text: " You Have Successfully Login!"
                });
            })
            .catch(error => {
                console.log(error)
                Swal.fire({
                    icon: "error",
                    title: "Error!",
                    text: "please hsare a valid email or password!"
                });
            })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={hendlelogin}>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input name='email' type="email" className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input name='password' type="password" className="input" placeholder="Password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Login</button>
                                </fieldset>
                            </form>
                            <p>Don't have an account so,Please <Link className='text-blue-400 font-bold text-xl' to='/register'>Register</Link> Now </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
