import { Link, useNavigate } from "react-router-dom";
import "@styles/Menu.scss";

const Menu = ({ email, clearData }) => {
  const navigate = useNavigate();

  const handleClickClearData = () => {
    clearData();
    navigate("/login");
  };

  return (
    <div className="desktop-menu">
      <p>{email}</p>
      <ul>
        <li>
          <Link to="/orders" class="title">
            My orders
          </Link>
        </li>

        <li>
          <Link to="/account">My account</Link>
        </li>

        <li>
          <div onClick={handleClickClearData}>
            <span>Sign out</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export { Menu };
