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
  const [guest, setGuest] = React.useState(props.guest || "Nombre Completo");
  const [growupMeals, setGrowupMeals] = React.useState(1);

  const serviceUrl = 'dominio.mx';

  function closeModal() {
    props.setIsOpen(false);
  }
  function confirmAssistance() {
    const requestOptions = {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: `${guest}\t${growupMeals}\t${kidMeals}`
   };

   fetch(serviceUrl, requestOptions)
        .then(response => {
          if(response.status !== 204){
            alert('No se ha podido comunicar con el proveedor de servicio.\nNotifique con los novios para que le guarden su platillo');
            closeModal()
          }else{
            alert('¡Gracias por reservar!');
            closeModal()
          }
        })
        .catch(e => {
          alert('No se ha podido comunicar con el proveedor de servicio.\nNotifique con los novios para que le guarden su platillo');
          closeModal()
        })

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
            R.S.V.P.
            <input
              defaultValue="1"
              type="text"
              min={1}
              max={4}
              step={1}
              defaultValue={guest}
              onChange={e => setGuest(e.target.value)}
            />
          </label>
          <br/>
          <label>
            Adultos
            <input
              defaultValue="1"
              type="number"
              min={1}
              max={2}
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
