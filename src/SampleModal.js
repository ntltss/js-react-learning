import React, {useState} from 'react';
import Modal from './Modal';

function SampleModal(){
    const [show, setShow] = useState(false);
    const openModal = () => {
        setShow(true)
    }
    return(
        <div>
            <button onClick={openModal}>Click</button>
            <Modal show={show} setShow={setShow} content="Appから内容を変更できます"/>
            {/* <Modal show={show} setShow={setShow}/> */}
        </div>
    );
}

export default SampleModal;