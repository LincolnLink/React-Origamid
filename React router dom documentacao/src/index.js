import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';


import { Home } from './pages/Home';
import Invoices  from './pages/Invoices';
import Invoice from './pages/Invoice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     <Routes>
        <Route path='/' element={<App />}>

          <Route path="home" element={<Home />} />

          <Route path="invoices" element={<Invoices />}>

            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select an invoice</p>
                </main>
              }
            />

            <Route path=":invoiceId" element={<Invoice />} />            
          </Route>

          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
         
        </Route>
      </Routes>
  </BrowserRouter>
);

