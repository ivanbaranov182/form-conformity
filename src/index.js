import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = document.getElementById('root');

root && ReactDOM.render(<>
    {/* <App
      elements={["Flavio", "Bucci", "+39 484 373 47 38", "flaviobuccirentcompany@gmail.com"]} 
    /> */}
    <App
		values={["Flavio1", "Bucci", "+39 484 373 47 381", "flaviobuccirentcompany@gmail.com1"]}
		selected={{name: 3, surname: 1, phone: 2, email: 0}}
		onPreview={obj => console.log(JSON.stringify(obj))}
    />
    {/* <App
      elements={["Flavio1", "Bucci", "+39 484 373 47 381", "flaviobuccirentcompany@gmail.com1"]}
      prev={{name: 0,surname: 1, email: 2, phone: 3}}
    /> */}
  </>,
  root
);
