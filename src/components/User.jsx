import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";

function User() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout(e) {
    e.preventDefault();
    logout();
    navigate("/");
  }
  return (
    <div className="absolute top-4 right-4 z-1000 flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 shadow-lg">
      <p className="text-white text-sm font-medium">Welcome, {user.name}</p>
      <Button
        variant="secondary"
        onClick={handleLogout}
        className="bg-red-500/80 hover:bg-red-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-300"
      >
        Logout
      </Button>
    </div>
  );
}

export default User;
