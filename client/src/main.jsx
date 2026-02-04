import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App.jsx';
import Stats from './pages/Stats.jsx';

const root = document.getElementById('root');

createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
