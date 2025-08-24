import { useUser } from "../Context/UserContext";
const Navbar = () => {
  const { user, logout } = useUser();

  return (
    <nav style={{ padding: "10px", background: "#ddd" }}>
      {user ? (
        <>
          <span>Welcom, {user.name}!</span>
          <button onClick={logout} style={{ marginLeft: "10px" }}>
            Logout
          </button>
        </>
      ) : (
        <span>Please Login</span>
      )}
    </nav>
  );
};
export default Navbar;
