/* eslint-disable react/prop-types */
import "./Category.scss";

const Category = ({ card }) => {
    return (
        <div className="category">
            <div className="cat-container">
                <img src={card.img} alt="" />
                <span>{card.title}</span>
            </div>
        </div>
    )
}

export default Category
