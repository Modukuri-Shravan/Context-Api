import { useUser } from "../Context/UserContext";

const UserProfile = () => {
  const { user } = useUser();
  if (!user) return <div>Please log in.</div>;
  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
    </div>
  );
};

export default UserProfile;