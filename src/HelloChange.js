import React from 'react'

class HelloChange extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        users: [
            {name: "Wada", age: 26},
            {name: "Arai", age: 32},
        ]
      };
    }
    changeState(){
        let users = this.state.users;
        users.push({name: "Yamada", age: 43});
        this.setState({users: users});
    }
    render(){
        let userList = this.state.users.map((user, index) =>
            <li key={index}>{user.name}(Age: {user.age})</li>
        );
        return(
            <div>
                <ul>{userList}</ul>
                {/* <button onClick={() => this.changeState()} class="bg-indigo-700 font-semibold text-white py-2 px-4 rounded-xl"> */}
                {/* <button onMouseOver={() => this.changeState()} class="bg-indigo-700 font-semibold text-white py-2 px-4 rounded-xl"> */}
                {/* <button onClick={() => window.alert("ThankYou")} class="bg-indigo-700 font-semibold text-white py-2 px-4 rounded-xl"> */}
                {/* <button onClick={() => window.confirm("OK?")} class="bg-indigo-700 font-semibold text-white py-2 px-4 rounded-xl"> */}
                {/* <button onClick={() => window.prompt("お名前は？","shiori")} class="bg-indigo-700 font-semibold text-white py-2 px-4 rounded-xl"> */}
                <button onClick={() => window.open("https://google.co.jp/")} class="bg-indigo-700 font-semibold text-white py-2 px-4 rounded-xl">
                    Click
                </button>
                <table class="border-solid border-4">
                    <tr><th>品名</th><th>値段</th></tr>
                    <tr><td>apple</td><td>350</td></tr>
                </table>
                <form>
                    <select>
                        <option value="TOKYO" selected>東京駅</option>
                        <option value="YOTSUYA">四谷駅</option>
                    </select>
                </form>

            </div>
        );
    }
}
export default HelloChange;
