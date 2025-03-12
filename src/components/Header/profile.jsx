import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../content/AuthContext";

function Profile() {

  const [isVisible, setIsVisible] = useState(false);
 // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const {logout, isLoggedIn} = useAuth();

 /* useEffect(() => {
    if(localStorage.getItem('loggedUserKey')) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);*/

  const handleLogout = () => {
   // localStorage.clear();
    logout();
    navigate('/login');
  }

  return (
      <>
      <div className="w3l_header_right">
        <ul>
          <li className="dropdown profile_details_drop"
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}>
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              <i className="fa fa-user" aria-hidden="true"></i>
              <span className="caret"></span>
            </a>
            <div className="mega-dropdown-menu">
              <div className="w3ls_vegetables">
                <ul className="dropdown-menu drp-mnu" style={{display: isVisible ? 'block' : 'none'}}>
                {isLoggedIn ? <>
                  <li>
                    <Link to="/add-products">Add Products</Link>
                  </li>
                  <li onClick={handleLogout}>Logout</li>
                </> :  <><li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                  <Link to="/login">Sign Up</Link>
                  </li></> }
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
      </>
  )
}
export default Profile;