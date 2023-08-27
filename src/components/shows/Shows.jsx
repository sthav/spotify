import PropTypes from 'prop-types';
import "./Shows.scss";

const Shows = ({ card }) => {

    console.log("Card:", card)
    return (

        <div className="shows">

            <div className="info">
                <img src={card.img} alt="" />
                <div className="texts">
                    <h2>{card.title}</h2>
                    <span>{card.desc}</span>
                </div>
            </div>
        </div>
    )
}


Shows.propTypes = {
    card: PropTypes.shape({
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
    }).isRequired,
};

export default Shows
