import PropTypes from "prop-types";

function Logo({ urlImg, url2Img, altImg }) {
  return (
    <>
      <img src={urlImg} alt={altImg} />
      <img src={url2Img} alt={altImg} />
    </>
  );
}

Logo.propTypes = {
  urlImg: PropTypes.string.isRequired,
  altImg: PropTypes.string.isRequired,
  url2Img: PropTypes.string.isRequired,
};

export default Logo;
