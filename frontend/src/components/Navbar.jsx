import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header className="bg-base-100/95 border-b border-base-200 fixed w-full top-0 z-40 backdrop-blur-xl">
      <div className="container mx-auto px-6 h-20">
        <div className="flex items-center justify-between h-full">
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-90 transition-all"
          >
            <div className="size-10 rounded-2xl bg-gradient-to-tr from-primary/90 to-secondary/90 flex items-center justify-center shadow-lg">
              <MessageSquare className="w-5 h-5 text-primary-content" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Cchat
            </h1>
          </Link>

          <div className="flex items-center gap-3">
            <Link to={"/settings"} className="btn btn-ghost btn-sm gap-2">
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Customize</span>
            </Link>

            {authUser && (
              <>
                <Link to={"/profile"} className={`btn btn-sm gap-2`}>
                  <User className="size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button className="flex gap-2 items-center" onClick={logout}>
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
