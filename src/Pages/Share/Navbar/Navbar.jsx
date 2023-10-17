import { Link, NavLink } from "react-router-dom";
import useAuth from "./../../../Hook/useAuth";

const links = (
  <>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/Products"> Add Product</NavLink>
    </li>
    <li>
      <NavLink to="/carts">My Cart</NavLink>
    </li>
  </>
);

const Navbar = () => {
  const { user, userSignOut } = useAuth();

  const handleLogout = () => {
    userSignOut()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="md:mb-6 lg:mb-5">
        <div className="navbar max-w-[1300px] mx-auto justify-between  px-5 lg:px-0">
          <div className="navbar-start mt-3">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content font-bold mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {links}
              </ul>
            </div>
            <a className="">
              <img
                className="w-24"
                src="https://i.ibb.co/BwnyZXr/5203134.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="navbar-center hidden md:flex">
            <ul className="menu font-bold menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            {user?.email ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      className="bg-slate-500"
                      src={user.photoURL}
                      alt={user.displayName}
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <button className="btn btn-sm  btn-ghost">
                      {user.displayName}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="btn btn-sm  btn-ghost font-bold text-red-500"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn  p-2 bg-gray-300 text-center font-bold text-green-800">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
