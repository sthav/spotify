import "./Sidebar.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import SettingsInputAntennaRoundedIcon from '@mui/icons-material/SettingsInputAntennaRounded';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {

    const navigate = useNavigate();

    const handleSearch = () => {

        event.preventDefault();
        navigate('/search');

    }
    return (
        <div className="sidebar">
            <div className="logo">
                <img src="https://logowik.com/content/uploads/images/674_spotify1.jpg" alt="" />
                Spotify
            </div>
            <div className="links">
                <Link to="/" style={{ textDecoration: 'none' }} ><div className="container">
                    <HomeRoundedIcon />
                    <span>Home</span>
                </div></Link>
                <Link to="/search" style={{ textDecoration: 'none' }} ><div className="container">
                    <SearchOutlinedIcon />
                    <span>Search</span>
                </div></Link>
                <div className="container" onClick={handleSearch}>
                    <MoreVertSharpIcon />
                    <span>Your Library</span>
                </div>
            </div>
            <div className="create">
                <div className="container">
                    <AddBoxOutlinedIcon />
                    <span>Create Playlist</span>
                </div>
                <div className="container">
                    <FavoriteRoundedIcon />
                    <span>Liked Songs</span>
                </div>
                <div className="container">
                    <SettingsInputAntennaRoundedIcon />
                    <span>Your Episodes</span>
                </div>
            </div>
            <div className="fav">
                <span className="container">FAV</span>
                <span className="container">Daily Mix 1</span>
                <span className="container">Discover Weekly</span>
                <span className="container">English</span>
                <span className="container">Dance/Electronic Mix</span>
                <span className="container">EDM/Popular</span>
            </div>
            <div className="install">
                <div className="container">
                    <DownloadForOfflineIcon />
                    <span>Install App</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
