import PropTypes from "prop-types";

function StoriesCard({ img, nome }) {
  return (
    <div className="itemStories">
      <div className="borda">
        <img className="borda-img" src={img} alt="" />
      </div>

      <span>{nome}</span>
    </div>
  );
}

StoriesCard.propTypes = {
  img: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
};

export default StoriesCard;
