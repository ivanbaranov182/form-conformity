import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = document.getElementById('root');

root && ReactDOM.render(<>
    <App
		values={["Flavio1", "Bucci", "+39 484 373 47 381", "flaviobuccirentcompany@gmail.com1"]}
		selected={{name: 3, surname: 1, phone: 2, email: 0}}
		onPreview={obj => alert(JSON.stringify(obj))}
    />
  </>,
  root
);
