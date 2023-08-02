import "./topabar.css"

import{ Search,Person,Chat,Notifications }from "@material-ui/icons";


export default function Topbar() {
  return (
    <div className="topbarcontainer">
        <div className="topbarLeft">
          <span className="logo">Kareem social</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <Search className="searchIcon"/>
            <input className="searchInput" placeholder="Search for friend, post or video"/>
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Home page</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
            <Person/>
            <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
            <Chat/>
            <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
            <Notifications/>
            <span className="topbarIconBadge">1</span>
            </div>
          </div>
          <img src="/assets/person/1.jpeg" className="topbarImg" alt="" />
        </div>
    </div>
  )
}
