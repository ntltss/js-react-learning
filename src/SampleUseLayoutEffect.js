import {useState, useLayoutEffect, useRef} from 'react';

function SampleUseLayoutEffect(){
    const [count, setCount] = useState(99999);
    const divElement = useRef();

    useLayoutEffect(() => {
        setCount(0);
        const element = divElement.current;
        element.style.backgroundColor = 'red';
    },[]);

    return (
        <div ref={divElement} style={{backgroundColor: 'blue'}}>
            {count}
        </div>
    );
}

export default SampleUseLayoutEffect;