import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className=""
    >
      <Modal.Header closeButton className='bg-gray-900 text-white'>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body dangerouslySetInnerHTML={{ __html: props.body }} className='bg-gray-900 text-white'>
      </Modal.Body>
      {/* <Modal.Footer className='text-white'>        
      </Modal.Footer> */}
    </Modal>
  );
}
export default MyVerticallyCenteredModal;