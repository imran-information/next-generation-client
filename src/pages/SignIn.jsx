import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';

const SignIn = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [toggle, setToggle] = useState(false)
    const { handleGoogleSignIn, handleSignInUser } = useAuth();

    const handleSignIn = async (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const pass = form.password.value
        console.log({ email, pass })
        try {
            await handleSignInUser(email, pass)
            toast.success('Sign In Successfully.!')
            navigate(location?.state ? location.state : '/')
        } catch (err) {
            console.log(err.message);
        }
    }


    const handleGoogleSignInUser = async () => {
        try {
            await handleGoogleSignIn()
            toast.success('Sign In Successfully.!')
            navigate(location?.state ? location.state : '/')
        } catch (err) {
            console.log(err.message);
        }

    }


    return (
        <div className="hero bg-base-200 py-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                    <button onClick={handleGoogleSignInUser} className="btn btn-neutral mx-7 mt-8"> <FaGoogle /> Sign in with Google</button>
                    <div className="divider pt-3">OR sign up with email</div>
                    <form onSubmit={handleSignIn} className="card-body pt-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={toggle ? "text" : 'password'} name='password' placeholder="password" className="input input-bordered" required /> <p onClick={() => setToggle(!toggle)} className='absolute top-14 md:left-[350px] left-[240px]  cursor-pointer' href="">{toggle ? <FaEyeSlash /> : <FaEye></FaEye>}</p>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>

                    </form>
                    <p className='text-center pb-4'>Don't have an account? <Link to='/signUp' className=' text-green-500'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;