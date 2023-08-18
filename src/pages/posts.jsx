import React from "react";

function posts() {
  return (
    <div className="max-w-[800px] mx-auto mb-[18px]">
      <div className="shadow-md shadow-gray-200 p-[10px] pb-[30px]">
        <div className=" flex justify-between items-center ">
          <div className="flex items-center space-x-2">
            <div className="user-image max-w-[60px] h-[60px]  ">
              <img
                className=" h-full object-cover rounded-[50%]"
                src="https://images.pexels.com/photos/5812094/pexels-photo-5812094.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""
              />
            </div>
            <span className=" font-semibold capitalize text-xl">matan</span>
          </div>
          <div className=" cursor-pointer">
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
        </div>

        <img
          className="mt-[20px] rounded h-[400px]  object-cover w-full bg-center "
          src="https://images.pexels.com/photos/5812094/pexels-photo-5812094.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
        />
        <h2 className="text-2xl font-medium py-[10px]">THE BEST CODING TRICKS TO LOREM IPSUM</h2>
        <p className="text-xl font-light py-[10px] truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p>
      </div>
    </div>
  );
}

export default posts;
