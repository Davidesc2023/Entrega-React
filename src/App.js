import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import './styles/App.css'; // Importa estilos

function App() {
  return (
    <div>
      <Header />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
