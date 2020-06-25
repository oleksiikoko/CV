//TODO: add default icon

import { ReactComponent as FigmaSvg } from "assets/img/figma.svg";
import { ReactComponent as GitHubSvg } from "assets/img/gitHub.svg";
import { ReactComponent as HerokuSvg } from "assets/img/heroku.svg";

const getIcon = (iconId) => {
  switch (iconId) {
    case "figma":
      return FigmaSvg;
    case "gitHub":
      return GitHubSvg;
    case "heroku":
      return HerokuSvg;
    default:
      return; //TODO: add default icon
  }
};

export default getIcon;
