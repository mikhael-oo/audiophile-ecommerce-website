import { useState } from 'react';

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className="p-4 ">

        
            <h2 className="h2 mb-4">Login</h2>
            {/* Login form */}
            <form>
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
                className="btn  border-none text-white bg-main-orange hover:bg-light-orange w-full"
            >
                Login
            </button>
            </form>
        </div>
    )
}