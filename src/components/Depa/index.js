import React from 'react';
import './depa.css';
import Homem from './homem.jpg';
import Mulher from './mulher.jpg';
import Team from './team.jpg';

function Depa() {
  return (
    <div className="depa">
      <h1 className="h3">Departamentos</h1>
      <div className="img4">
      <p className="p1"> <img src={ Homem} className="homem"/>responsavel pelo RH</p>
      <p className="p2">   <img src={ Mulher} className="mulher"/> responsavel pelo RH</p>
       </div>
       <div>
         <h1 className="h5">Equipe Completa</h1>
         <img src={Team} className="team"/>
       </div>
    </div>
  );
}

export default Depa;
