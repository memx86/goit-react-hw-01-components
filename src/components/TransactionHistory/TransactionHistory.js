import PropTypes from "prop-types";
import s from "./TransactionHistory.module.css";

function TransactionHistory({ items }) {
  return (
    <table className={s.history}>
      <thead>
        <tr className={s.head}>
          <th className={s.cellHead}>Type</th>
          <th className={s.cellHead}>Amount</th>
          <th className={s.cellHead}>Currency</th>
        </tr>
      </thead>

      <tbody className={s.body}>
        {items.map((item) => (
          <tr key={item.id} className={s.row}>
            <td className={s.cell}>{item.type}</td>
            <td className={s.cell}>{item.amount}</td>
            <td className={s.cell}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
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
