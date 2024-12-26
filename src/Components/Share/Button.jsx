import { useLocation, useNavigate } from "react-router-dom";

export default function Button({ isLoading }) {
  const location = useLocation();

  return (
    <div className="mt-6">
      <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-600 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
        {isLoading ? (
          <span className="loading loading-spinner loading-xs"></span>
        ) : location.pathname === "/login" ? (
          "Sign in"
        ) : (
          "Register"
        )}
      </button>
    </div>
  );
}
