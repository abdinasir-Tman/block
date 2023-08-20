import React from 'react'

function Addpost() {
  return (
    <div><div className="max-w-md mx-auto mt-8 bg-white p-8 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold mb-6">Add Post</h2>
    <form>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Title:
        </label>
        <input
          className="w-full border border-gray-300 rounded px-3 py-2 leading-tight focus:outline-none focus:border-indigo-500"
          id="title"
          type="text"
          placeholder="Enter title"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
          Content:
        </label>
        <textarea
          className="w-full border border-gray-300 rounded px-3 py-2 leading-tight focus:outline-none focus:border-indigo-500"
          id="content"
          placeholder="Enter content"
          rows="4"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
          Date:
        </label>
        <input
          className="w-full border border-gray-300 rounded px-3 py-2 leading-tight focus:outline-none focus:border-indigo-500"
          id="date"
          type="date"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
          Image:
        </label>
        <input
          className="w-full border border-gray-300 rounded px-3 py-2 leading-tight focus:outline-none focus:border-indigo-500"
          id="image"
          type="file"
          accept="image/*"
        />
      </div>
      <button
        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Add Post
      </button>
    </form>
  </div></div>
  )
}

export default Addpost