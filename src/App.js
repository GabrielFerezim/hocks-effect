import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [nome, setNome ] = useState("Gabriel");

  //function callAlert(){
  //alert('Olá')
  // }

  useEffect(() => {

  //document.title = `You clicked ${count} times`;
  // callAlert();
 }, []);
 return(
    <div>
        {
          (nome == "Gabriel")? // Se for
            <div>
              <p> {nome}</p>
            </div>
            : // Se não for (Avançado)
            <div>
              <p> Opsss...! Eu preciso do nome Gabriel.</p>
            </div>
        }
    </div>
 );

/*if(nome == "Gabriel"){
  return (
    <div>
        <p style={{color:"green"}}>{nome}</p>
    </div>
  );
}else{ 
  return(
  <div>
      <p style={{color:"red"}}>{nome}</p>
  </div>
  );

  -- <div>
  <p>Você Clicou {count} vezes</p>
  <button onClick={() => setCount(count + 1)}>
    Click me
  </button>
  -- </div>*/

}


