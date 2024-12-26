import { NavLink, useNavigate } from "react-router-dom";
import registerImage from "../../../public/register.png";
import Button from "../Share/Button";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    setLoading(true);

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (name.length === 0) {
      setLoading(false);
      return toast.error("Fill up your name please");
    } else if (email.length === 0) {
      setLoading(false);
      return toast.error("Enter your email");
    } else if (password.length < 8) {
      setLoading(false);
      return toast.error("Password should be at least 9");
    }

    const user = {
      name,
      email,
      password,
    };

    fetch("https://react-interview.crd4lc.easypanel.host/api/register", {
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
        if (data.errors) {
          toast.error(data.errors.email[0]);
        } else {
          toast.success(data.status_message);
          e.target.reset();
          setTimeout(() => {
            navigate("/login");
          }, 1000);
        }
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-20">
        <img src={registerImage} className="max-w-sm" />
        <div>
          <div className="w-full max-w-sm p-16 m-auto mx-auto bg-white dark:bg-gray-800">
            <h1 className="text-center text-xl text-gray-800">Register</h1>
            {/* FORM */}

            <form onSubmit={handleRegister} className="mt-6">
              <div>
                <label className="block text-sm text-gray-800 dark:text-gray-200">
                  name
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  name="name"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-800 dark:text-gray-200 mt-2">
                  Email
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  name="email"
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
                  name="password"
                />
              </div>
              <Button isLoading={loading}></Button>
            </form>

            <p className="mt-8 text-xs font-light text-center text-gray-400">
              Already have an account?
              <NavLink
                to="/login"
                className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
              >
                Log in
              </NavLink>
            </p>
          </div>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
