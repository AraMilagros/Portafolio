import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import AppRoutes from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <AppRoutes />
    </div>
);
