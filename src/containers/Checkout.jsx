import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Checkout.css';
import AppContext from '../context/AppContext';

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  return (
    <div>
      <div className="Checkout-content">
        <h3>Lista de Pedidos</h3>
        <div className="Checkout-item">
          <div className="Checkout-element">
            <h4>Item name</h4>
            <span>$10</span>
          </div>
          <button type="button">
            <i className="fas fa-times-circle" />
          </button>
        </div>
        <div className="Checkout-sidebar">
          <h3>Precio Total: $10</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar Pedido</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
