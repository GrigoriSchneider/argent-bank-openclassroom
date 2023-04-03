import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';
import './TransactionContent.scss';

/** @function manage the content part of the transaction's infos based on the user's info received from the database.
 *
 * @component
 * @param {string} date
 * @param {string} amount
 * @param {string} descr
 * @param {string} balance
 * @param {string} transType
 * @param {string} category
 * @returns (<TransactionContent/>)
 */

const TransactionContent = ({
  date,
  descr,
  amount,
  balance,
  transType,
  category,
  note,
}) => {
  const [isUp, setIsUp] = useState(false);

  /** @function show dropdown details
   *
   * @returns (openClose())
   */

  const openClose = () => {
    if (!isUp) {
      setIsUp(true);
    } else {
      setIsUp(false);
    }
  };

  /** @function show alert message when we want to modify the category of the transaction.
   *
   * @alert
   * @returns (selectCategory())
   */

  const selectCategory = () => {
    alert('select category');
  };

  /** @function show an alert message when we want to modify the note of the transaction.
   *
   * @alert
   * @returns (addNotes())
   */

  const addNotes = () => {
    alert('add notes');
  };

  return (
    <div>
      <div className="dataLine">
        <div id="arrow" onClick={openClose}>
          {isUp ? (
            <i className="fa fa-angle-up" aria-hidden="true">
              <FontAwesomeIcon icon={faAngleUp} />
            </i>
          ) : (
            <i className="fa fa-angle-down" aria-hidden="true">
              <FontAwesomeIcon icon={faAngleDown} />
            </i>
          )}
        </div>
        <div id="date">{date}</div>
        <div id="descr">{descr}</div>
        <div id="amount">{amount}</div>
        <div id="balance">{balance}</div>
      </div>
      {isUp && (
        <div className="moreInfo">
          <div className="info">
            <p>Transaction Type: {transType}</p>
            <p>
              Category: {category}{' '}
              <i
                className="fa fa-pencil"
                aria-hidden="true"
                onClick={selectCategory}
              >
                <FontAwesomeIcon icon={faPencil} />
              </i>
            </p>
            <p>
              Notes: {note}{' '}
              <i className="fa fa-pencil" aria-hidden="true" onClick={addNotes}>
                <FontAwesomeIcon icon={faPencil} />
              </i>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

TransactionContent.propTypes = {
  date: PropTypes.string,
  amount: PropTypes.string,
  descr: PropTypes.string,
  balance: PropTypes.string,
  transType: PropTypes.string,
  category: PropTypes.string,
  note: PropTypes.string,
};

export default TransactionContent;
