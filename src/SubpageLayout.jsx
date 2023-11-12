import { Link, Outlet } from "react-router-dom";

export default function SubpageLayout() {
  return (
    <div className="layout">
      <Link to="/"> Back to home</Link>
      <div className="layout__content">
        <Outlet />
      </div>
    </div>
  );
}
