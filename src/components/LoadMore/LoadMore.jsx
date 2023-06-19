import PropTypes from "prop-types";

import { LoadButton } from "./LoadMore.styled";

const LoadMore = ({ onClick, disable }) => {
  return (
    <LoadButton type="button" disabled={disable} onClick={onClick}>
      LoadMore
    </LoadButton>
  );
};

LoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
  disable: PropTypes.bool.isRequired,
};

export default LoadMore;
