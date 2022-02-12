import React from 'react';

const formtitle = <p>Login</p>

function Login(){
    return(
        <div>
            {formtitle}
            <form>
                <label>Email</label>
                <input type="email"/>
                <label>Password</label>
                <input type="password"/>
                <button>ログイン</button>
            </form>
        </div>
    );
}

export default Login;