import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';

const SignUp = () => {
    const navigate = useNavigate()
    const [error, setError] = useState({})
    const location = useLocation()
    const [toggle, setToggle] = useState(false)
    const { handleGoogleSignIn, handleCreateUserWithEmail, handleUpdateUserProfile, setUser } = useAuth();


    const handleSignUp = async e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        if (password.length < 6) {
            return setError({ ...error, password: "Password must be at least 6 characters long." })
        }
        if (!/[A - Z]/.test(password)) {
            return setError({ ...error, password: "Password must contain at least one uppercase letter." })

        }
        if (!/[0-9]/.test(password)) {
            return setError({ ...error, password: "Password must contain at least one numeric character." })

        }
        if (!/[@$!%*?&#]/.test(password)) {
            return setError({ ...error, password: "Password must contain at least one special character." })

        }
        try {
            //2. User created
            const result = await handleCreateUserWithEmail(email, password)
            toast.success('Signup Successfully..!')
            navigate(location?.state ? location.state : '/')
            await handleUpdateUserProfile(name, photo)
            setUser({ ...result.user, photoURL: photo, displayName: name })

        } catch (err) {
            console.log(err)
            toast.error(err?.message)
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
                <div className="text-center lg:text-left ">
                    <h1 className="text-5xl font-bold">SignUp now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                    <button onClick={handleGoogleSignInUser} className="btn btn-neutral mx-7 mt-8"><FaGoogle />Sign Up with Google</button>
                    <div className="divider pt-3">OR sign up with email</div>
                    <form onSubmit={handleSignUp} className="card-body pt-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" name='photo' placeholder="photo url" className="input input-bordered" required />
                        </div>
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
                            {/* <input type="password" name='password' placeholder="password" className="input input-bordered" required /> */}
                            {
                                error?.password && <label className="label text-sm text-red-500">
                                    {error?.password}
                                </label>
                            }
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Create Account</button>
                        </div>
                    </form>

                    <p className='text-center pb-4'>Already have an account? <Link to='/signIn' className=' text-green-500'>Sign In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;