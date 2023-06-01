import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";


export default function LoginSignup() {
    return (
        <div className=" mt-16 flex justify-center items-center">
            <div className="flex flex-col  lg:flex-row">
                <LoginForm />
                <div className="divider lg:divider-horizontal">OR</div> 
                <SignupForm />
            </div>
        </div>
    )   
}