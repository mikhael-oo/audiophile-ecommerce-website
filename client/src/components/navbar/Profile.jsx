import { useCallback, useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { RxAvatar } from "react-icons/rx";
import Loader from "../Loader"
import axios from "axios";

import { NavLink, useNavigate } from "react-router-dom";

export default function Profile() {
    const [userContext, setUserContext] = useContext(UserContext);


    const fetchUserDetails = useCallback(() => {
        console.log("fetching user details");
        axios.get("https://blooming-plains-31500-7e7eb174fd76.herokuapp.com/users/me", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userContext.token}`,
            },
        })
        .then(res => {
            if (res.statusText === "OK") {
                console.log("res " + res.data.firstName)
                const data = res.data;
                setUserContext(oldVal => {
                    return {
                        ...oldVal,
                        user: data
                    }
                    
                })
                console.log("after fetching me " + userContext)
            } else {
                if (res.status === 401) {
                    window.location.reload();
                } else {
                    setUserContext(oldVal => {
                        return {
                            ...oldVal,
                            user: null
                        }
                    })
                }
                
            }
        })
    }, [setUserContext, userContext.token])

    useEffect(() => {
        if (!userContext.user) {
            fetchUserDetails();
            console.log("user details fetched")
            console.log(userContext)
        }
    }, [fetchUserDetails, userContext.user])

    const logoutHandler = () => {
        axios.get("https://blooming-plains-31500-7e7eb174fd76.herokuapp.com/users/logout", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userContext.token}`,
            },
        })
        .then(res => {
            if (res.statusText === "OK") {
                setUserContext(oldVal => {
                    return {
                        ...oldVal,
                        token: null,
                        user: null
                    }
                })
                window.localStorage.setItem("logout", Date.now());
            }
        })
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col items-center justify-center">
                <RxAvatar className="text-9xl text-main-red" />
                <h1 className="text-4xl font-bold text-main-black mt-4">{userContext.user ? `${userContext.user.firstName} ${userContext.user.lastName}` : <Loader />}</h1>
                <p className="text-xl text-main-black mt-2">{userContext.user ? userContext.user.username : <Loader />}</p>
            </div>
            <div className="flex flex-col items-center justify-center mt-8">
                {
                    userContext.user ?
                    <button className="btn btn-primary" onClick={logoutHandler}>Logout</button>
                    :
                    <NavLink to="/login" className="btn btn-primary">Login</NavLink>
                }
               
            </div>
        </div>
    )

}