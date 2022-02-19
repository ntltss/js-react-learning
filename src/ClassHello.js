import React from 'react';

class Hello extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
      // return <h1>Hello2, {this.props.name}</h1>;
      return (
        <div className="border-solid border-4">
          <tr>hello</tr>
          <tr>wordl</tr>
        </div>
      );
    }
  }

  export default Hello;