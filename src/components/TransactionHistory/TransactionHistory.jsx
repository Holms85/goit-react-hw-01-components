import PropTypes from 'prop-types';
import styles from '../TransactionHistory/TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles['transaction-history']}>
    <thead className={styles['transaction-head']}>
      <tr>
        <th className={styles['transaction-title']}>Type</th>
        <th className={styles['transaction-title']}>Amount</th>
        <th className={styles['transaction-title']}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({id, type, amount,currency}) =>(
        <tr className={styles['transaction-row']} key={id}>
          <td className={styles['transaction-cell']}>{type}</td>
          <td className={styles['transaction-cell']}>{amount}</td>
          <td className={styles['transaction-cell']}>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
