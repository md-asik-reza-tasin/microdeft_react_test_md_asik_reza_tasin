import { useState } from "react";
import logInImage from "../../../public/login.png";
import Button from "../Share/Button";
import { NavLink, useNavigate } from "react-router-dom";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleButton = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 2000);
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-20">
        <img src={logInImage} className="max-w-sm" />
        <div>
          <div className="w-full max-w-sm p-16 m-auto mx-auto bg-white dark:bg-gray-800">
            <h1 className="text-center text-xl text-gray-800">Log in</h1>
            {/* FORM */}

            <form onSubmit={handleButton} className="mt-6">
              <div>
                <label className="block text-sm text-gray-800 dark:text-gray-200">
                  Email
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <label className="block text-sm text-gray-800 dark:text-gray-200">
                    Password
                  </label>
                </div>

                <input
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <Button isLoading={loading}></Button>
            </form>

            <p className="mt-8 text-xs font-light text-center text-gray-400">
              Don't have an account?
              <NavLink
                to="/register"
                className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
              >
                Create One
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
