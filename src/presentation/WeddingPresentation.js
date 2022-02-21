import React from 'react';
import boda from '../data/pareja.json';
import './WeddingPresentation.css';
import ReservationModal from '../reservation/ReservationModal';
// import '../data/featuring-wedding-photo.jpeg';
import heart from "../assets/pngkey.com-orange-heart-png-9358552.png";

const WeddingPresentation = React.forwardRef((props, ref) => {
  let guest;

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const handleSubmit = function(event){
    openModal();
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div  ref={ref} className={props.className}>
      <h5 className="invite">Acompáñanos a celebrar el enlace matrimonial de</h5>
      <img className="fingerprint-heart" src={heart}/>
      <h1 className="fancy-font ocre">{boda.novio.nombre_completo}
      <br/>&<br/>
      {boda.novia.nombre_completo}</h1>

      <h3 className="attribute banner ocre">{boda.fecha}</h3>

      <code>
        <p>
          {boda.nupcias.lugar}
        </p>
        <p>
          {boda.nupcias.hora}
        </p>
      </code>

      <p>
        Recepción subsecuente
      </p>
      <div className="pseudofancy">
        {guest}
      </div>
        <button
          className="rsvp-button"
        onClick={handleSubmit}>
            Favor de confirmar asistencia
        </button>
        <ReservationModal guest={guest} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}/>
    </div>
  );
});

export default WeddingPresentation;
