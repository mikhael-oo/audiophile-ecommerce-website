import { useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SignupForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("")
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

        axios.post("https://blooming-plains-31500-7e7eb174fd76.herokuapp.com/users/signup", {
            firstName: firstName,
            lastName: lastName,
            username: email,
            password: password
        }, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                "Access-Control-Allow-Credentials": "true"
            }
        })
        .then(res => {
            console.log(res);
            setIsSubmitting(false);
            if (res.statusText !== "OK") {
                if (res.status === 400) {
                    setError("Please fill all the fields correctly");
                } else if (res.status === 401) {
                    setError("Incorrect email or password combination");
                } else if (res.status === 500) {
                    console.log(res)
                    const data = res.data;
                    if  (data.message) setError(data.message || genericErrorMessage);
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
                navigate("/profile");
            }
        })
        .catch(err => {
            console.log(err);
            setIsSubmitting(false);
            setError(genericErrorMessage);
        })
    }



    return (
        <div className="p-4">
            <h2 className="h2 mb-4">Sign Up</h2>
            {/* Error message */}
            {error && <ErrorBadge error={error} />}
            {/* Signup form */}
            <form onSubmit={formSubmitHandler}>
              <div className="mb-4">
                <label htmlFor="fname" className="block font-bold text-xs mb-2">First Name</label>
                <input 
                    type="text" 
                    id="fname" 
                    className="input input-bordered w-full max-w-xs" 
                    placeholder="Alexie"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)} />
              </div>
              <div className="mb-4">
                <label htmlFor="lname" className="block font-bold text-xs mb-2">Last Name</label>
                <input 
                    type="text" 
                    id="lname" 
                    className="input input-bordered w-full max-w-xs" 
                    placeholder="Ward"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)} />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-bold text-xs mb-2">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    className="input input-bordered w-full max-w-xs" 
                    placeholder="alexi1@example.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block font-bold text-xs mb-2">Password</label>
                <input 
                type="password" 
                id="password" 
                className="input input-bordered w-full max-w-xs" 
                placeholder="Enter your password"
                value={password}
                onChange={e => setPassword(e.target.value)} />
              </div>
              <button 
                type="submit"
                disabled={isSubmitting} 
                className="btn border-none text-white bg-main-orange hover:bg-light-orang w-full"
            >
                {isSubmitting ? <Loader /> : "Sign Up"}
            </button>
            </form>
          </div>
    )
}