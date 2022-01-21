import PropTypes from "prop-types";
import s from "./Statistics.module.css";
import Section from "components/Section";
import Container from "components/Container";
import getRandomHexColor from "../../js/getRandomHexColor";

function Statistics({ title, stats }) {
  return (
    <Section type="statistics">
      <Container>
        <div className={s.wrapper}>
          {title ? <h2 className={s.title}>{title}</h2> : ""}
          <ul
            className={s.list}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            {stats.map((item) => (
              <li
                className={s.item}
                key={item.id}
                style={{ backgroundColor: getRandomHexColor() }}
              >
                <span className={s.label}>{item.label}</span>
                <span className={s.percentage}>{item.percentage}%</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
export default Statistics;
