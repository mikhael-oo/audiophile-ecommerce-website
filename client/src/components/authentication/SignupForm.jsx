import { useState } from 'react';

export default function SignupForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");


    return (
        <div className="p-4">
            <h2 className="h2 mb-4">Sign Up</h2>
            {/* Signup form */}
            <form>
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
                className="btn border-none text-white bg-main-orange hover:bg-light-orang w-full"
            >
                Sign Up
            </button>
            </form>
          </div>
    )
}