import React from 'react';
import boda from '../data/pareja.json';
import './WeddingPresentation.css';
// import '../data/featuring-wedding-photo.jpeg';
import heart from "../assets/pngkey.com-orange-heart-png-9358552.png";
const WeddingPresentation = React.forwardRef((props, ref) => {
  let name="Filipino Meza Gutierrez";

  const handleSubmit = function(event){
    alert('No se ha podido comunicar con el proveedor de servicios para invitados.\n\nFavor de confirmar su asistencia directamente con la pareja.');
    event.preventDefault();
  }

  return (
    <div  ref={ref} className={props.className}>
      <p>Acompañanos a la ceremonia nupcial</p>
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
          Reserve Su Venida Porfa
        </button>
      </div>
    </div>
  );
});

export default WeddingPresentation;
