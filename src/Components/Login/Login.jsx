import { useState } from "react";
import logInImage from "../../../public/login.png";
import Button from "../Share/Button";
import { NavLink, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Cookies from "universal-cookie";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const cookies = new Cookies();

  const handleLogIn = (e) => {
    e.preventDefault();

    setLoading(true);

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const user = {
      email,
      password,
    };
    fetch(`https://react-interview.crd4lc.easypanel.host/api/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (!data.status) {
          toast.error(data.status_message);
        } else {
          toast.success(data.status_message);
          cookies.set("token", data.data.token, { path: "/" });
          form.reset();
          setTimeout(() => {
            navigate("/");
          }, 500);
        }
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-20">
        <img src={logInImage} className="max-w-sm" />
        <div>
          <div className="w-full max-w-sm p-16 m-auto mx-auto bg-white dark:bg-gray-800">
            <h1 className="text-center text-xl text-gray-800">Log in</h1>
            {/* FORM */}

            <form onSubmit={handleLogIn} className="mt-6">
              <div>
                <label className="block text-sm text-gray-800 dark:text-gray-200">
                  Email
                </label>
                <input
                  name="email"
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
                  name="password"
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
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
