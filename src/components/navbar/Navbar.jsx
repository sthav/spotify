import "./Navbar.scss";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [clicked, setClicked] = useState(false)

    const handleArrowDown = () => {
        setClicked(!clicked)
        console.log("clicked")
    }
    return (
        <div className="navbar">
            <div className="left">
                <div className="arrow">
                    <div className="leftarrow">
                        <Link to="/" style={{ textDecoration: 'none' }} ><ArrowCircleLeftIcon /></Link>
                    </div>
                    <div className="rightarrow">
                        <Link to="/search" style={{ textDecoration: 'none' }} ><ArrowCircleRightIcon /></Link>
                    </div>
                </div>
                <div className="searchbar">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="Artists, songs, or podcasts" className="custom-input"/>
                </div>
            </div>
            <div className="right">
                <div className="rightcontainer">
                    <div className="rightimage">
                        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <div className="username">
                        <span>Angel</span>
                    </div>
                    <div onClick={handleArrowDown} className="downarrow-image">
                        {clicked ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                    </div>
                    <div className="uparrow-image">

                    </div>
                </div>

                {clicked && (
                    <div className="downarrow">
                        <div className="dropdown-menu">
                            <div className="txt">
                                <span>Account</span>
                                <OpenInNewIcon />
                            </div>
                            <div className="txt">
                                <span>Profile</span>
                            </div>
                            <div className="txt">
                                Log out
                            </div>
                        </div>
                    </div>
                )}


            </div>
        </div>
    )
}

export default Navbar
