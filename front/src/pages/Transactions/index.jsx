import React from 'react';
import { transactionsTitleData } from '../../datas/dataTransactionsTitle';
import { transactionsData } from '../../datas/dataTransactions';

import TransactionTitle from '../../components/TransactionTitle/index';
import TransactionContent from '../../components/TransactionContent/index';

import './Transactions.scss';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { api } from '../../services/axiosApi';

/** @function create he transaction page based on the user's info recovered from the database.
 *
 * @returns (<Transactions/>)
 */

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const param = useParams();

  useEffect(() => {
    const response = api.getTransactionsByAccount(param.id);
    setTransactions(response);
  });

  return (
    <div>
      {transactionsTitleData.map((account, index) => (
        <TransactionTitle
          key={index}
          infoAccount={account.infoAccount}
          amount={account.amount}
        />
      ))}

      <main className="main bg-dark transac">
        <div className="dataHead">
          <div id="arrow" className="dataLineItem"></div>
          <div id="date" className="dataLineItem">
            DATE
          </div>
          <div id="descr" className="dataLineItem">
            DESCRIPTION
          </div>
          <div id="amount" className="dataLineItem">
            AMOUNT
          </div>
          <div id="balance" className="dataLineItem">
            BALANCE
          </div>
        </div>

        {transactionsData.map((account, index) => (
          <TransactionContent
            key={index}
            date={account.date}
            descr={account.description}
            amount={account.amount}
            balance={account.balance}
            transType={account.transType}
            category={account.category}
            note={account.note}
          />
        ))}
      </main>
    </div>
  );
};

export default Transactions;
