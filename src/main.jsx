import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
// import EventProps from './components/EventProps.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <EventProps /> */}
  </StrictMode>
  // <Todo/>
);
