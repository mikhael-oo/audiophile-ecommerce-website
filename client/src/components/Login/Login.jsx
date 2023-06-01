import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {GoogleLogin, googleLogout, useGoogleLogin} from '@react-oauth/google';
import axios from 'axios';


export default function Login() {
    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState([]);
    const [token, setToken] = useState([]);

    const login = async () => {
         {window.open("http://localhost:5001/auth/google", "_self")}  
    }

    const navigate = useNavigate();

    return (
        <div className="bg-light-grey">
            <div className=" max-w-[1110px] w-[90%] lg:w-[80%] mx-auto pt-4">
                <button onClick={() => navigate(-1)}>Go back</button>
            </div>
            <div className=" max-w-[1110px] w-[90%] lg:w-[80%] mx-auto pt-4">
                <h2 className="h2">Login</h2>

                { /*<GoogleLogin
                    clientID="1014000923180-hbh1fmpfdn3a2s27h66iec1moirvqign.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
    /> */}

                <button className='btn' onClick={login}>Login</button>

            </div>
        </div>
    )

        

}