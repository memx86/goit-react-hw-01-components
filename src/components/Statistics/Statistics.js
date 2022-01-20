import PropTypes from "prop-types";
import s from "./Statistics.module.css";

function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title ? <h2 className="title">{title}</h2> : ""}
      <ul className="stat-list">
        {stats.map((item) => (
          <li className="item" key={item.id}>
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
export default Statistics;
