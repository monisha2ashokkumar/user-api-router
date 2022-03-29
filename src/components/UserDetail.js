import { useLocation } from "react-router-dom"
import { NavLink } from "react-router-dom"

export default function UserDetail(props) {
    const location = useLocation();
    const user = location.userData;
    return (<div>
        <h2>User id - {user.id}</h2>
        <h2>Username - {user.username}</h2>
        <h2>Email - {user.email}</h2>
        <h2>City - {user.address.city}</h2>

        <br/>
        <br/>
        <br/>

        <NavLink to="/users">Back</NavLink>
    </div>)
}