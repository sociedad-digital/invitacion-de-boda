import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function ReservationModal(props) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function closeModal() {
    alert('No se ha podido comunicar con el proveedor de servicio.\nNotifique con los novios para que le guarden su platillo');
    props.setIsOpen(false);
  }

  return (
      <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form>
          <label>
            Adultos
            <input defaultValue="1" />
          </label>
          <label>
            Niños
            <input defaultValue="0" />
          </label>
        </form>
        <button onClick={closeModal}>Confirmar</button>
      </Modal>
  );
}

export default ReservationModal;
