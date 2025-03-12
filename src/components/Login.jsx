import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../content/AuthContext";
import { userLogin, userReg } from "../services/loginservice";

function Login() {

    const [isLoginForm, setIsLoginForm] = useState(true);
    const [loginFormData, setLoginFormData] = useState({ Username: '', Password: '' });
    const [regFormData, setRegFormData] = useState({ Username: '', Password: '', Email: '', Phone: '' });
    const [regStatus, setRegStatus] = useState({ message: '', isError: false });
    const [loginStatus, setLoginStatus] = useState({ message: '', isError: false });
    const navigate = useNavigate();
    const { login } = useAuth();
    const changeForm = () => {
        setIsLoginForm((preForm) => !preForm);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setLoginFormData((preFormData) => {
            return { ...preFormData, [name]: value };
        })
    }

    const handleRegChange = (event) => {
        const { name, value } = event.target;
        setRegFormData((preFormData) => {
            return { ...preFormData, [name]: value };
        })
    }

    const doLogin = async (event) => {
        event.preventDefault();
        console.log('Form Submitted Data', loginFormData);
        const loginResponse = await userLogin(loginFormData);
        console.log('loginResponse', loginResponse);

        const { data = '', status } = loginResponse;
        if (status === 200) {
            if (data.length > 0) {
                login(data);
                //localStorage.setItem('loggedUserKey', data);
                setLoginStatus({ message: '', isError: false });
                navigate('/');
            } else {
                setLoginStatus({ message: 'Invalid Username / Password', isError: true });
            }
        } else {
            setLoginStatus({ message: 'Something went wrong!!', isError: true });
        }

        setLoginFormData({ Username: '', Password: '' });
    }

    const handleUserRegistration = async (event) => {
        event.preventDefault();
        console.log('Form Submitted Data', regFormData);

        const registartionData = await userReg(regFormData);
        console.log('registartionData', registartionData);
        if (registartionData.status === 200) {
            setRegStatus({ message: 'Resistered Successfully!!', isError: false });
            setRegFormData({ Username: '', Password: '', Email: '', Phone: '' });
        } else {
            setRegStatus({ message: 'Something went wrong!!', isError: true });
        }
    }

    return (
        <>
            <div className="w3l_banner_nav_right">
                <div className="w3_login">
                    <h3>Sign In & Sign Up</h3>
                    <div className="w3_login_module">
                        <div className="module form-module">
                            <div className="toggle"><i className="fa fa-times fa-pencil"></i>
                                <div className="tooltip" onClick={changeForm}>Click Me</div>
                            </div>
                            {isLoginForm ?
                                <div className="form">
                                    <h2>Login to your account</h2>
                                    {loginStatus.message && <p className={`alert ${loginStatus.isError ? 'alert-danger' : 'alert-success'}`}>
                                        {loginStatus.message}
                                    </p>}
                                    <form onSubmit={doLogin}>
                                        <input type="text" name="Username" placeholder="Username"
                                            value={loginFormData.Username} onChange={handleChange} />
                                        <input type="password" name="Password" placeholder="Password"
                                            value={loginFormData.Password} onChange={handleChange} />
                                        <input type="submit" value="Login" />
                                    </form>
                                </div> :
                                <div className="form">
                                    <h2>Create an account</h2>
                                    {regStatus.message && <p className={`alert ${regStatus.isError ? 'alert-danger' : 'alert-success'}`}>
                                        {regStatus.message}
                                    </p>}
                                    <form onSubmit={handleUserRegistration}>
                                        <input type="text" name="Username" placeholder="Username" onChange={handleRegChange} value={regFormData.Username} />
                                        <input type="password" name="Password" placeholder="Password" onChange={handleRegChange} value={regFormData.Password} />
                                        <input type="email" name="Email" placeholder="Email Address" onChange={handleRegChange} value={regFormData.Email} />
                                        <input type="text" name="Phone" placeholder="Phone Number" onChange={handleRegChange} value={regFormData.Phone} />
                                        <input type="submit" value="Register" />
                                    </form>
                                </div>}

                            <div className="cta"><a href="#">Forgot your password?</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;