import React from 'react';

const formtitle = <p class="text-4xl">Login</p>

function Login(){
    return(
        <div>
            {formtitle}
            <form>
                <label class="text-purple-600">Email</label>
                <input  class="border-solid border-4 border-gray-400" type="email"/>
                <label class="text-red-500">Password</label>
                <input  class="border-dotted border-4 border-gray-400" type="password"/>
                <button class="bg-indigo-700 font-semibold text-white py-2 px-4 rounded-xl">ログイン</button>
            </form>
        </div>
    );
}

export default Login;