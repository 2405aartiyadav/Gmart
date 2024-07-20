import React, { useState } from 'react'
import login2 from '../../assets/login2.png';
import './signup.css';
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';
function Signup() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signedUp, setSignedUp] = useState(false);
    let signupBtnClick = (data) => {

        axios
            .post('http://localhost:8080/signup', {
                'name': data.uname,
                'username': data.username,
                'email': data.email,
                'password': data.confirmPassword
            })
            .then((res) => {
                console.log(res);
                if (res.status == 200) {
                    toast.success('User sign up successfully');
                    setSignedUp(true);
                }
            })
            .catch((err) => {
                if (err) {
                    console.log(err);
                    toast.error('Failed to signup');
                }
            })



    }
    return (

        <div className='signup row' id="signup">
            {signedUp && <Navigate to="/login" replace={true} />}
            <div className="col-md-3">
                <img className="images" src={login2} alt="img" />
            </div>
            <div className="signup_content col-md-3" id="login">
                <form onSubmit={handleSubmit((data) => { signupBtnClick(data) })}>
                    <h4>Sign Up</h4>
                    <label >Full Name</label><br />
                    <input type="text" name="uname" {...register('uname', { required: true })} /><br />
                    {errors.uname && <p>name is required</p>}
                    {console.log(errors)}
                    <label >Email</label><br />
                    <input type="text" name="email" {...register('email', { required: true })} /><br />
                    {errors.email && <p>email is required</p>}
                    <label >Username</label><br />
                    <input type="text" name="username" {...register('username', { required: true })} /><br />
                    {errors.username && <p>username is required</p>}
                    <label >Set Password</label><br />
                    <input type="password" name="setPassword" {...register('setPassword', { required: true })} /><br />
                    {errors.setPassword && <p>password is required</p>}
                    <label >Confirm Password</label><br />
                    <input type="password" name="confirmPassword" {...register('confirmPassword', { required: true })} /><br />
                    {errors.confirmPassword && <p>please confirm your password</p>}
                    <button className="btn btn-primary">Sign Up</button><br />
                    <span>Already have an account?</span>
                    <a href="#login">Login</a>
                </form>
            </div>
        </div>

    )
}

export default Signup