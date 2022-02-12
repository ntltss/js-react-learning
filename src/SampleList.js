import React from 'react';

class SampleList extends React.Component{
    render(){
        const users = [
            {name: "Tanaka", age: 26},
            {name: "Suzuki", age: 32},
            {name: "Yamada", age: 43},
        ];
        const userList = users.map((users, index) =>
            <li key = {index}>{users.name}(Age:{users.age})</li>
        );
        return(
            <ul>{userList}</ul>
        );
    }
}
export default SampleList;