import PropTypes from "prop-types";
import { LinkBtn } from "./LinkButton.styled";

const LinkButton = ({ text, path }) => {
  return <LinkBtn to={path}>{text}</LinkBtn>;
};

LinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default LinkButton;
