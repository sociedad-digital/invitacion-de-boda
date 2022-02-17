import React from 'react';
import boda from '../data/pareja.json';
import './WeddingPresentation.css';
import ReservationModal from '../reservation/ReservationModal';
// import '../data/featuring-wedding-photo.jpeg';
import heart from "../assets/pngkey.com-orange-heart-png-9358552.png";

const WeddingPresentation = React.forwardRef((props, ref) => {
  let guest="Filipino Meza Gutierrez";

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const handleSubmit = function(event){
    openModal();
    // event.preventDefault();
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div  ref={ref} className={props.className}>
      <h6>Acompañanos al enlace matrimonial de</h6>
      <img src={heart}/>
      <h2>{boda.novia.nombre_completo}</h2>
      <h3>&</h3>
      <h2>{boda.novio.nombre_completo}</h2>

      <h3>{boda.fecha}</h3>
      <p>{boda.nupcias_lugar}</p>

      <p>{boda.nupcias_hora}</p>

      <div>
        Huateque subsecuente
        <button onClick={handleSubmit}>
          {guest}<br/>
          Reserve Su Venida Porfa
        </button>
        <ReservationModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}/>
      </div>
    </div>
  );
});

export default WeddingPresentation;
