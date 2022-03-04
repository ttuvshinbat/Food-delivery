import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import '../css/modal.css'
import AddFood from './AddFood';

function TestModal(props) {
    const data=props.data.data
    const [show, setShow] = useState(true);
    const handleClose = () => {
        setShow(false);
        props.showHandler(false);
    }
    const handleShow = () => setShow(true);
    let price = props.data.sales ? <div className='d-flex'><div className="modalPrice">{new Intl.NumberFormat().format(props.data.price - props.data.price * props.data.percent / 100)}₮ </div><strike className="strike-dark">{new Intl.NumberFormat().format(props.data.price)}₮ </strike> </div> 
    : <div className='modalPrice'>{props.data.price}</div>
    return (
        <>
            <Modal dialogClassName="modal-dialog" show={show} onHide={handleClose} centered>
                <div className=' my-modal '>
                    <img className='modalimg' src={'https://mtars-fooddelivery.s3.ap-southeast-1.amazonaws.com' + data.image} alt=""
                    />
                    <div className='modalMain'>
                        <div className='modalContent row '>
                            <div className='NameAndPrice'>
                                <div className='modalHeader'>{data.name}</div>
                                {price}
                            </div>
                            <div>
                                <h5 className='modalHeader'>Орц</h5>
                                <p className='modalIngredients'>{data.ingredients}</p>
                            </div>

                            <AddFood name={data.name, data.portion} />
                        </div>
                    </div>
                    <button className='closeButton' onClick={handleClose}>x</button>
                </div>
            </Modal>
        </>
    );
}
export default TestModal
