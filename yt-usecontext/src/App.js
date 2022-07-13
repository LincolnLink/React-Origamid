
import React from 'react';
import { Link, Outlet } from 'react-router-dom';


function App() {
  return (
    <div>
      <h1>Teste React route</h1>
      <nav style={{borderBottom: "solid 1px", paddingBottom: "1rem"}}>
          <Link to="/home">Home</Link> |{" "}
          <Link to="/invoices">Invoices</Link> |{" "}   
          {/* <Link to="/invoice">Invoice</Link> |{" "}      */}
      </nav>

      <Outlet />

      {/* <Routes>
        <Route path='/' element={<App />} />
        <Route path="home" element={<Home />} />
        <Route path="exemplo01" element={<Exemplo01 />} />
      </Routes> */}
    </div>
  );
}

export default App;
