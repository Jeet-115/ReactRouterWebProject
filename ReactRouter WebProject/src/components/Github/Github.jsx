import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  return (
    <div className="flex flex-col items-center justify-center text-center m-4 bg-gray-700 text-white p-6 rounded-lg shadow-lg">
      {loading ? (
        <p className="text-lg font-semibold">Loading...</p>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-2">
            GitHub Followers: {data.followers}
          </h2>
          <img
            src={data.avatar_url}
            alt="GitHub Avatar"
            className="w-40 h-40 rounded-full border-4 border-white shadow-lg transition-transform hover:scale-105"
          />
        </>
      )}
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  try {
    const response = await fetch("https://api.github.com/users/Jeet-115");
    if (!response.ok) {
      throw new Error("Failed to fetch GitHub data");
    }
    return response.json();
  } catch (error) {
    console.error(error);
    return { followers: "Error", avatar_url: "" };
  }
};
