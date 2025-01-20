import "./Navbar.css";
//import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  return (
    <div className="topBarContainer">
      <div className="topbarLeft">
        <span className="logo">Mercury@clothes</span>
      </div>

      <div className="topbarCenter">
        {/*<div className="searchbar">
          <SearchIcon className="searchIcon" />
          <input
            placeholder="Search for friends, posts, or videos"
            className="searchInput"
          />
        </div>*/}
      </div>

      <div className="topbarRight">
        
      </div>
    </div>
  );
}

export default Navbar;
