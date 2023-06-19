import React from 'react';




export const LogIn = () => {
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginForm/>
        </div>
    );
};




const LoginForm = ()=> {
    return(
        <form>
        <div>
            <input placeholder="Login"/>
        </div>
        <div>
            <input placeholder="Password"/>
        </div>
        <div>
            <input type="checkbox"/>
        </div>
    </form>)
}