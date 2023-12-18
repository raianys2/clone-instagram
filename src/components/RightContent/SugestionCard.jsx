import "./style.css";
import PropTypes from "prop-types";

export default function SugestionCard({ srcImg, name, nickName }) {
  return (
    
      <div className="yourProfile">
        <div>
          <div>
            <img src={srcImg} alt="photoProfile" />
          </div>

          <div className="nameProfile">
            <span><strong>{nickName}</strong></span>
            <span>{name}</span>
          </div>
        </div>

        <div className="visit">
          <p>Follow</p>
        </div>
      </div>
  );
}

SugestionCard.propTypes = {
  srcImg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nickName: PropTypes.string.isRequired,
};