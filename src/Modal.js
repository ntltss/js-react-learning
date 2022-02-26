import React from 'react';

function Modal({show, setShow, content}){
    const closeModal = () => {
        setShow(false)
    }
    if(show){
        return(
            <div id="overlay" onClick={closeModal}>
                <div id="content" onClick={(e) => e.stopPropagation()}>
                    <p>{content}</p>
                    {/* <button onClick={() => setShow(false)}>close</button> */}
                    <button onClick={closeModal}>close</button>
                </div>
            </div>
        );
    }else{
        return null;
    }
}

export default Modal;