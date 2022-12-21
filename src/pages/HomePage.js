import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <div>
                <h1 className="homeTitle">Title of Site</h1>
            </div>
            <div className="homeContainer">
                <div>
                    <h3>Sign up and search for breast cancer-related events near you</h3>
                </div>
                <div>
                    <h3>slideshow of event pics</h3>
                </div>
                <div className="homeAuthBttns">
                    <Link to='/signup'>
                        <button>Sign Up</button>
                    </Link>
                    <Link to='/login'>
                        <button>Log In</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HomePage;