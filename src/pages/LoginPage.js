import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../context/auth.context';
import axios from "axios";

const LoginPage = () => {

    const {storeToken, authenticateUser} = useContext(AuthContext);

    const navigate = useNavigate();

    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const updateState = e => setState({
        ...state,
        [e.target.name]: e.target.value
    });

    const onFormSubmit = e => {
        e.preventDefault();
        console.log(state);
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, {
            email: state.email,
            password: state.password
        })
        .then(axiosResponse => {
            console.log(axiosResponse.data);
            storeToken(axiosResponse.data.authToken);
            authenticateUser();
            navigate('/profile');
        })
        .catch(err => console.log(err));
    }

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
    };

    return (
        <div className="authContainer">
            <h1>Log In</h1>

            <div className="authForm">
                <form onSubmit={onFormSubmit} className="authBttn">
                    {/* <label>Email</label><br /> */}
                    <i class="fa fa-envelope icon"></i>
                    <input value={state.email} name="email" onChange={updateState} />
                <br />
                    {/* <label>Password</label><br />
                    <input value={state.password} name="password"  onChange={updateState} />
                <br />
                <br /> */}

                    <i className="fa fa-lock icon "></i>
                <input value={state.password} 

                type={passwordShown ? "text" : "password"} 
                
                name="password" onChange={updateState} />
                <i class="far fa-eye" id="togglePassword" onClick={togglePassword}></i>

                    <button>Submit</button>
                </form>
            </div>

            <p>
                Don't have an account? Sign up <a href="/signup">here</a>.
            </p>
        </div>
    );
}

export default LoginPage;