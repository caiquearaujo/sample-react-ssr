import 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const container = document.getElementById('root') as HTMLElement;
ReactDOM.hydrateRoot(container, <App />);
