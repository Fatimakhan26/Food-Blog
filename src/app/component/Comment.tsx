"use client";
import React, { useState } from 'react';

const Comments = () => {
  const [comment, setcomment] = useState("");
  const [comments, setcomments] = useState<string[]>([]);

  const submitcomment = (notrefresh: React.FormEvent) => {
    notrefresh.preventDefault();
    if (comment.trim()) {
      setcomments([comment, ...comments]);
      setcomment("");
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <form
        className="flex flex-col gap-4 bg-gray-100 p-6 rounded-lg shadow-md"
        onSubmit={submitcomment}
      >
        <h1 className="text-black text-2xl font-semibold text-center">
          Comment Section
        </h1>
        <input
          className="text-center p-3 bg-pink-950 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Write a comment here..."
          value={comment}
          onChange={(e) => setcomment(e.target.value)}
        />
        <button
          className="p-3 bg-pink-950 text-white rounded-full hover:bg-blue-600 transition duration-200"
          type="submit"
        >
          Submit
        </button>
      </form>
      <ul className="mt-6 space-y-2">
        {comments.map((herecomments, index) => (
          <li
            key={index}
            className="p-3 bg-gray-200 rounded-lg shadow-md text-gray-700"
          >
            {herecomments}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
