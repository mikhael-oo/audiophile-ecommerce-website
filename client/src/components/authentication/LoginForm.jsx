import { useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LoginForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userContext, setUserContext] = useContext(UserContext);

    const navigate = useNavigate();

    const ErrorBadge = ({ error }) => {
        return (
            <div className="alert alert-error">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{error}</span>
            </div>
        )
    }

    const Loader = () => {
        return (
            <span className="loading loading-spinner text-warning"></span>
        )
    }

    const formSubmitHandler = e => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        const genericErrorMessage = "Something went wrong, please try again later.";

        axios.post(
            "https://blooming-plains-31500-7e7eb174fd76.herokuapp.com/users/login", 
            {
                username: email,
                password: password
            },
            
            {
                headers: { 
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                    "Access-Control-Allow-Credentials": "true"
                }
            }
        )
        .then(res => {
            console.log(res);
            setIsSubmitting(false);
            if (res.statusText !== "OK") {
                if (res.status === 400) {
                    setError("Please fill all the fields correctly");
                } else if (res.status === 401) {
                    setError("Incorrect email or password");
                } else {
                    setError(genericErrorMessage);
                }
            } else {
                const data = res.data;
                setUserContext(oldVal => {
                    return {
                        ...oldVal,
                        token: data.token
                    }
                })
                console.log(userContext)
                if (userContext.token !== null) {
                    navigate("/profile");
                }
            }
        })
        .catch(err => {
            console.log(err);
            setIsSubmitting(false);
            setError(genericErrorMessage);
        })

        
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className="p-4 ">

        
            <h2 className="h2 mb-4">Login</h2>
            {/* Error message */}
            {error && <ErrorBadge error={error} />}
            {/* Login form */}
            <form onSubmit={formSubmitHandler}>
              <div className="mb-4">
                <label htmlFor="email" className="block font-bold text-xs mb-2">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    className="input input-bordered w-full max-w-xs" 
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}  
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block font-bold text-xs mb-2">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    className="input input-bordered w-full max-w-xs" 
                    placeholder="Enter your password"
                    value={password} 
                    onChange={handlePasswordChange} 
                />
              </div>
              <button 
                type="submit"
                disabled={isSubmitting} 
                className="btn  border-none text-white bg-main-orange hover:bg-light-orange w-full"
            >
                {isSubmitting ? <Loader /> : "Login"}
            </button>
            </form>
        </div>
    )
}