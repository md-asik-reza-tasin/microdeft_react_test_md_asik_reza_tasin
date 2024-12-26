import { useState } from "react";
import Button from "../Share/Button";
import Cookies from "universal-cookie";
import toast from "react-hot-toast";

export default function Add() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const cookies = new Cookies();

  const handleAddCourse = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const badge_text = form.badge_text.value;
    const badge_color = form.badge_color.value;
    const instructor_name = form.instructor_name.value;

    const course = {
      title,
      description,
      badge_text,
      badge_color,
      instructor_name,
    };

    fetch("https://react-interview.crd4lc.easypanel.host/api/course", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${cookies.get("token")}`,
      },
      body: JSON.stringify(course),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.errors) {
          toast.error(
            data.errors.title[0] ||
              data.errors.description[0] ||
              data.errors.badge_text[0] ||
              data.errors.badge_color[0] ||
              data.errors.instructor_name[0]
          );
        } else {
          toast.success(data.status_message);
          form.reset();
          setOpen(false);
        }
      });
  };

  return (
    <>
      <div className="relative flex justify-center">
        <button
          onClick={() => setOpen(true)}
          className="bg-orange-500 w-32 h-10 text-center rounded-lg text-white"
        >
          Add Course
        </button>

        {open && (
          <div
            x-transition:enter="transition duration-300 ease-out"
            x-transition:enter-start="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
            x-transition:enter-end="translate-y-0 opacity-100 sm:scale-100"
            x-transition:leave="transition duration-150 ease-in"
            x-transition:leave-start="translate-y-0 opacity-100 sm:scale-100"
            x-transition:leave-end="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
            className="fixed inset-0 z-10 overflow-y-auto"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>

              <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl rtl:text-right dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-sm w-full sm:p-6">
                <div className="mt-5 sm:flex sm:items-center sm:justify-between">
                  <form onSubmit={handleAddCourse} className="w-full">
                    <div className="grid grid-cols-1 gap-6 mt-4 w-full">
                      <div className="w-full">
                        <label className="text-gray-700 dark:text-gray-200">
                          Instructor name
                        </label>
                        <input
                          name="instructor_name"
                          type="text"
                          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                          required
                        />
                      </div>

                      <div className="w-full">
                        <label className="text-gray-700 dark:text-gray-200">
                          Title
                        </label>
                        <input
                          name="title"
                          type="text"
                          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-gray-700 dark:text-gray-200">
                          Badge text
                        </label>
                        <input
                          name="badge_text"
                          type="text"
                          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                          required
                        />
                      </div>

                      <div>
                        <label className="text-gray-700 dark:text-gray-200">
                          Badge color
                        </label>
                        <input
                          name="badge_color"
                          type="text"
                          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                          required
                        />
                      </div>

                      <div>
                        <label className="text-gray-700 dark:text-gray-200">
                          Description
                        </label>
                        <textarea
                          name="description"
                          type="text"
                          className="block w-full h-24 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2 justify-between items-center">
                        <Button isLoading={loading}></Button>
                        <button
                          onClick={() => setOpen(false)}
                          className="w-full px-4 py-2  text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
