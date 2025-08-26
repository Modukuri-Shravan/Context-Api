import { useUser } from "../Context/UserContext";

const LogoutButton = () => {
  const { logout } = useUser();
  return (
    <button onClick={logout}>Logout</button>
  );
};

export default LogoutButton;