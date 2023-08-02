import "./closeFriend.css"

export default function CloseFriend({user}) {
  return (
    <li className="sidebarFrend">
    <img className="sidebarFrendImg" src={user.profilePicture} alt="" />
    <span className="sidebarFrendName">{user.username}</span>
</li>
  )
}
