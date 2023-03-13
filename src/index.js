import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import './components/styles/HomePage.css';
import 'semantic-ui-css/semantic.min.css'
import  { disabledReactDevTools } from '@fvilers/disable-react-devtools'

if (ProcessingInstruction.env.NODE_ENV === 'production') disabledReactDevTools()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
    
    </BrowserRouter>
  </React.StrictMode>
);

