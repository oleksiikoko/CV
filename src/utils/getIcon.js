//TODO: add default icon

import { ReactComponent as FigmaSvg } from "assets/img/figma.svg";
import { ReactComponent as GitHubSvg } from "assets/img/gitHub.svg";
import { ReactComponent as HerokuSvg } from "assets/img/heroku.svg";
import { ReactComponent as PhoneSvg } from "assets/img/phone.svg";
import { ReactComponent as TelegramSvg } from "assets/img/telegram.svg";
import { ReactComponent as MailSvg } from "assets/img/mail.svg";
import { ReactComponent as LinkedinSvg } from "assets/img/linkedin.svg";
import { ReactComponent as SkypeSvg } from "assets/img/skype.svg";
import { ReactComponent as DownArrowSvg } from "assets/img/downarrow.svg";

const getIcon = (iconId) => {
  switch (iconId) {
    case "figma":
      return FigmaSvg;
    case "gitHub":
      return GitHubSvg;
    case "heroku":
      return HerokuSvg;
    case "phone":
      return PhoneSvg;
    case "telegram":
      return TelegramSvg;
    case "mail":
      return MailSvg;
    case "linkedin":
      return LinkedinSvg;
    case "skype":
      return SkypeSvg;
    case "downArrow":
      return DownArrowSvg;
    default:
      return; //TODO: add default icon
  }
};

export default getIcon;
