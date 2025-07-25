import { Link } from "react-router-dom";

const NormalHeader = () => {
  return (
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li class="nav-item">
        {/* <Link
          to="/user/forget-password"
          class="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Forget Password</b>
        </Link> */}
      </li>
      <li class="nav-item">
        {/* <Link
          to="/user/customer/register"
          class="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Register</b>
        </Link> */}
      </li>

      <li class="nav-item">
        <Link to="/user/login" class="nav-link active" aria-current="page">
          <b className="text-color">Login </b>
        </Link>
      </li>
    </ul>
  );
};

export default NormalHeader;
