import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import "./home.css"

export default function home() {
  return (
    <div>
      <Topbar/>
      <div className="homecontainer">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </div>
    </div>
  );
}