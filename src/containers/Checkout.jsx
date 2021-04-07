import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Checkout.css';
import AppContext from '../context/AppContext';

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product) => () => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (acumulator, currentValue) =>
      acumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Checkout-content">
      {cart.length > 0 ? <h3>Lista de Pedidos</h3> : <h3>Sin Pedidos ...</h3>}
      {/*Hay un bug en el map que no permite visualizar la lista de pedidos */}
      {cart.map((item) => (
        <div className="Checkout-item" key={item.id}>
          <div className="Checkout-element">
            <h4>{item.title}</h4>
            <span>${item.price}</span>
          </div>
          <button type="button" onClick={handleRemove(item)}>
            <i className="fas fa-times-circle" />
          </button>
        </div>
      ))}
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar Pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
