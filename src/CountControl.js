import React, {useState} from 'react';
import Count from './Count.js';

function CountControle(){
    const [display, setDisplay] = useState(true);

    return(
        <div className = "CountControle">
            <h1>Learn useEffect</h1>
            <button onClick={()=>
                setDisplay(!display)
            }>Toggle</button>
            {display && <Count/>}
        </div>
    );
}

export default CountControle;