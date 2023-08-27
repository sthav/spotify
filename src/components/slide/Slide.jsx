/* eslint-disable react/prop-types */
import "./Slide.scss";
// import Slider from "infinite-react-carousel";
// import Slider from "infinite-react-carousel/lib/index";
import Slider from 'infinite-react-carousel';




function Slide({ children, slidesToShow, arrowsScroll }) {
    return (
        <div className="slide">
            <div className="container">
                <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
                    {children}
                </Slider>
            </div>
        </div>
    );
}

export default Slide;