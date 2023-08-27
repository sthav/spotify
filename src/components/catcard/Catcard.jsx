/* eslint-disable react/prop-types */
import "./CatCard.scss";

function CatCard({ card }) {
    return (
        <div className="catCard">
            <img src={card.img} alt="" />
            <span className="title">{card.title}</span>
        </div>

    );
}
export default CatCard;