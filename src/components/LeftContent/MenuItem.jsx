import PropTypes from 'prop-types';

export default function MenuItem({icon, text}) {
    return (
        
        <li>

            <div className="icone">
            {icon}
            </div>

            <span className="espacamentoNavMenu"> {text}</span>
        
        </li>
    )
}

MenuItem.propTypes = {
    icon: PropTypes.array.isRequired,
    text: PropTypes.string.isRequired,
  };