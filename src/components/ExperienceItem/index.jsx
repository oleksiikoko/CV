import React from "react";
import PropTypes from "prop-types";

import "./ExperienceItem.scss";

import { formatDateMmYyyy } from "utils";

const ExperienceItem = ({ item }) => {
  const formattedDateStart = formatDateMmYyyy(item.startDate);
  const formattedDateEnd = formatDateMmYyyy(item.endDate);
  const linkName = item.link.replace("https://", "").replace("/", "");

  return (
    <div className="experience-item">
      <p className="experience-item__position">{item.position}</p>
      <p className="experience-item__date">{`${formattedDateStart} - ${formattedDateEnd}`}</p>
      <p className="experience-item__company">{item.companyName}</p>
      <ul className="experience-item__tasks">
        {item.tasks.map((item, index) => {
          return <li key={index}>{item.task}</li>;
        })}
      </ul>
      <a href={item.link}>{linkName}</a>
    </div>
  );
};

ExperienceItem.propTypes = {
  item: PropTypes.object,
};

export default ExperienceItem;
