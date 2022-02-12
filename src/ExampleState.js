import React from 'react';

class ExampleState extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        };
    }
    render(){
        return(
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({count: this.state.count + 1})}
                 class="bg-yellow-400 font-semibold text-white py-2 px-4 rounded-xl">
                    Click me
                </button>
            </div>
        );
    }
};

export default ExampleState;