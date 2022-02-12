import React,{useState, useEffect} from 'react';

export default function ExampleHook(){
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });
    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)} class="bg-red-400 font-semibold text-white py-2 px-4 rounded-xl">
                Click me
            </button>
            <button onClick={(e) => {console.log(e,this);}}  class="bg-blue-400 font-semibold text-white py-2 px-4 rounded-xl">
                Click me
            </button>
            
        </div>

    );
}