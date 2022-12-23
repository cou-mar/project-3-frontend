import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignupPage = () => {

    const navigate = useNavigate();

    const [state, setState] = useState({
        name: '',
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
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/signup`, {
            name: state.name,
            email: state.email,
            password: state.password
        })
        .then(axiosResponse => {
            console.log(axiosResponse.data);
            navigate('/login');
        })
        .catch(err => console.log(err));
    }

    return (
        <div className="authContainer">
            <h1>Sign Up</h1>

            <div className="authForm">
                <form onSubmit={onFormSubmit}>
                    <label>Name</label><br />
                    <input value={state.name} name="name" onChange={updateState} />
                <br />
                    <label>Email</label><br />
                    <input value={state.email} name="email" onChange={updateState} />
                <br />
                    <label>Password</label><br />
                    <input value={state.password} name="password"  onChange={updateState} />
                <br />
                <br />
                    <button>Submit</button>
                </form>
            </div>

            <p>
                Already have an account? Log in <a href="/login">here</a>.
            </p>
        </div>
    );
}

export default SignupPage;