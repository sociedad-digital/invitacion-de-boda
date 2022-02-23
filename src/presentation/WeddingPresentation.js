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
      <code>
        <h5 className="invite">Acompáñanos a celebrar nuestro enlace matrimonial</h5>
      </code>
      <img className="fingerprint-heart" src={heart}/>
      <h1 className="fancy-font ocre couple-name">{boda.novio.nombre_completo}
      <br/>&<br/>
      {boda.novia.nombre_completo}</h1>



      <div className="nupcial-data">
        <p>
        <strong>
        Con la bendición de Dios y nuestros padres:</strong>
        </p>
        <div className="lineage">
          <div className="patrilineus">
            {boda.novia.linaje.matrilineal}<br/>
            {boda.novia.linaje.patrilineal}
        </div>
        <div className="matrilineus">
            {boda.novio.linaje.matrilineal}<br/>
            {boda.novio.linaje.patrilineal}
          </div>
        </div>

          <h3>
            {boda.nupcias.lugar}
          </h3>
        <h3 className="attribute banner ocre">{boda.fecha} &nbsp;    {boda.nupcias.hora}</h3>
      </div>

      <div className="pseudofancy">
        {guest}
      </div>
        <button
          className="rsvp-button"
        onClick={handleSubmit}>
            Recepción subsecuente <br/>
            Favor de confirmar asistencia
        </button>
        <ReservationModal guest={guest} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}/>
    </div>
  );
});

export default WeddingPresentation;
