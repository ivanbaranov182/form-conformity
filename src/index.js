import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = document.getElementById('root');

root && ReactDOM.render(<>
    {/* <App
      elements={["Flavio", "Bucci", "+39 484 373 47 38", "flaviobuccirentcompany@gmail.com"]} 
    /> */}
    <App
      elements={["Flavio1", "Bucci", "+39 484 373 47 381", "flaviobuccirentcompany@gmail.com1"]}
      prev={{name: 3, email: 2, phone: 0}}
    />
    {/* <App
      elements={["Flavio1", "Bucci", "+39 484 373 47 381", "flaviobuccirentcompany@gmail.com1"]}
      prev={{name: 0,surname: 1, email: 2, phone: 3}}
    /> */}
  </>,
  root
);
