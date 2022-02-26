import React, {useState, useEffect} from 'react';

function SampleUseEffect(){
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(() => {
        console.log('useEffectが実行されました')
    },[count])

    return(
        <div className="SampleUserEffect">
            <h1>Learn useEffect</h1>
            <h2>Count: {count}/ Count2: {count2}</h2>
            <button onClick={() => setCount(count+1)}>Count+</button><br/>
            <button onClick={() => setCount2(count2+1)}>Count2+</button><br/>
        </div>
    );
}

export default SampleUseEffect;