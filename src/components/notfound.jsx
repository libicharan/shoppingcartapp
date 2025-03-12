import { useState } from "react";

function NotFound(){

    const [isLoginForm, setIsLoginForm] = useState(true)

    const changeForm = () => {
        setIsLoginForm((preForm) => !preForm); 
    }

    return (
        <>
        <div className="w3l_banner_nav_right">
        <div className="w3_login">
            <h3>Page Not Found!!</h3>
           
        </div>
        </div>
        </>
    )
}
export default NotFound;