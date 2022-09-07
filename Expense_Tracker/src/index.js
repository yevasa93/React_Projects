import ReactDOM from 'react-dom/client';   //we got the source form the create react app, it is in package.json

import './index.css';
import App from './App';    //if we import a js file into another one we should omit the.js extension



//the id root is in the public/index.html file, is a single web pag app, thats why 
//it has only 1 html file, and all the changes will manage by react
//so in that place in the index.html we are going to render whatever we write here
const root = ReactDOM.createRoot(document.getElementById('root'));      
root.render(<App />);
