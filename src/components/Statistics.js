import React from "react";
import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title && title}</h2>

      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li className="item" key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: "Upload stats",
};

Statistics.protoTypes = {
  title: PropTypes.number,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
