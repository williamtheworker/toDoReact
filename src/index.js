import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// using the createRoot to display React elements on the div with a 'root' id
if (document.getElementById('root')) {
    const root = createRoot(document.getElementById('root'));
    root.render(<App />);
}