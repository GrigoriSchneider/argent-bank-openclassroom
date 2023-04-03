import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Account.scss';


/**  @function show account
 *
 * @component
 * @param {string} title
 * @param {number} amount
 * @param {string} description
 * @param {string} id
 * @returns (<Account/>)
 */

const Account = ({ title, amount, description, id }) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">$ {amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <Link to={`/${id}/transactions`}>
          <button className="transaction-button">View transactions</button>
        </Link>
      </div>
    </section>
  );
};

Account.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.number,
  description: PropTypes.string,
  id:PropTypes.string,
};

export default Account;
