import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <div className=" w-full  max-w-[600px]  max-h-[400px]  h-full mx-auto mt-8 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">login</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username:
            </label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2 leading-tight focus:outline-none focus:border-indigo-500"
              id="username"
              type="text"
              placeholder="Enter username"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2 leading-tight focus:outline-none focus:border-indigo-500"
              id="password"
              type="password"
              placeholder="Enter password"
            />
          </div>

          <div className="flex items-center  justify-between">
            <Link to={"/registration"}  className=" text-sky-600 font-italic cursor-pointer">
              Registet new account
            </Link>
            <button
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
