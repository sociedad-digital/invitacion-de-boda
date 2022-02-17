import React from 'react';
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
  const [kidMeals, setKidMeals] = React.useState(0);
  const [growupMeals, setGrowupMeals] = React.useState(1);

  function closeModal() {
    props.setIsOpen(false);
  }
  function confirmAssistance() {
    alert('No se ha podido comunicar con el proveedor de servicio.\nNotifique con los novios para que le guarden su platillo');
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
            <input
              defaultValue="1"
              type="number"
              min={1}
              max={4}
              step={1}
              value={growupMeals}
              onChange={e => setGrowupMeals(e.target.value)}
            />
          </label>
          <br/>
          <label>
            Niños
            <input
              type="number"
              min={0}
              max={2}
              step={1}
              value={kidMeals}
              onChange={e => setKidMeals(e.target.value)}
            />
          </label>
        </form>
        <button onClick={confirmAssistance}>Confirmar</button>
        <button onClick={closeModal}>Cancelar</button>
      </Modal>
  );
}

export default ReservationModal;
