import React from "react";

const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <h1 className="logo">TryChat</h1>
                <p className="title">Register</p>
                <form>
                    <input type="text" placeholder="Display Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <input type="file" />
                    <button>Sign up</button>
                </form>
                <p>You do have an account? Login</p>
            </div>
        </div>
    )
}

export default Register;