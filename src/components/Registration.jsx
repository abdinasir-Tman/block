import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Createcontext } from "./AuthContext";

function Registration() {
  const {state, Changevalues} = useContext(Createcontext);


  const handle = (event) => {

    Changevalues(event)
    console.log(state)
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <div className=" w-full  max-w-[600px]  max-h-[600px]  h-full mx-auto mt-8 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">User Registration</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
          
            >
              Username:
            </label>
            <input
              onChange={handle}
              className="w-full border border-gray-300 rounded px-3 py-2 leading-tight focus:outline-none focus:border-indigo-500"
              name="username"
              type="text"
              placeholder="Enter username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password:
            </label>
            <input
              onChange={handle}
              className="w-full border border-gray-300 rounded px-3 py-2 leading-tight focus:outline-none focus:border-indigo-500"
              name="password"
              type="password"
              placeholder="Enter password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email:
            </label>
            <input
              onChange={handle}
              className="w-full border border-gray-300 rounded px-3 py-2 leading-tight focus:outline-none focus:border-indigo-500"
              name="email"
              type="email"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Profile Picture:
            </label>
            <input
              onChange={handle}
              className="w-full border border-gray-300 rounded px-3 py-2 leading-tight focus:outline-none focus:border-indigo-500"
              name="profilePicture"
              type="file"
              accept="image/*"
            />
          </div>
          <div className="flex items-center  justify-between">
            <Link
              to={"/login"}
              className=" text-sky-600 font-italic cursor-pointer"
            >
              already have an account
            </Link>
            <button
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
