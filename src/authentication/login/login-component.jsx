import React, { useState, useContext} from "react";
import FormInput from "../../component/form-input/form-input-component";
import CustomButton from "../../component/custom-button/custom-button";
import './login-component.css';
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from "../context/AuthContext";
// import { useState } from "react";



const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({
        email:'',
        password:'',
    });

    const [error, setError] = useState("");
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password} = userInfo;
        
        try {
            await login(email, password); // handling suscessful login
            console.log("Login succesfully");
            navigate("/home");
        }catch(error) {
            setError(error.message);
            console.log("login failed. please try again")
        }
    }

    const handleOnChangeText = (e, fieldName) => {
        setUserInfo({...userInfo,[fieldName]: e.target.value});
    }
    return (
        <>
        {/* <h1>Login here ...</h1> */}
        <div className='web-page'>
            <div  className='left-view'></div>
            <div className='right-view'>
                <div className='facts'>
                    <h2 className='text-center text-red-900-5'>Login Here</h2>
                    {error ? <p className="text-center text-red-900">{error}</p>:null}
                    <form onSubmit={handleSubmit}>
                        <FormInput
                        name="email"
                        type="email"
                        value={userInfo.email}
                        onChange={(e) => handleOnChangeText(e, "email")}
                        placeholder="Enter your email"
                        required
                        />
                        <FormInput
                        name="password"
                        type="password"
                        value={userInfo.password}
                        onChange={(e) => handleOnChangeText(e, "password")}
                        placeholder="Enter your  password"
                        required
                        />
                        <div
                        style = {{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '20px'
                        }} >
                            <CustomButton type="submit">Sign In</CustomButton>
                            
                        </div>
                        <h2 className= "text-center">Don't have an Account?</h2>
                        <span className="text-center">
                            click the link below to sign-up
                            <Link
                            to="/Registration"
                            style={{
                                textDecoration: 'underlined',
                                fontSize: '17px',
                                color: "red",
                                marginLeft: '10px'
                            }} 
                            >
                            sign-up</Link>
                        </span>


                    </form>

                </div>
            </div>
        </div>
        </>

    );
}

export default Login;