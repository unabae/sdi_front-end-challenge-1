import React from "react";

const Article = ({ title, body, imageUrl, author, date }) => {
  const formattedDate = new Date(date.replace(" ", "T"));
  const day = formattedDate.getDate().toString().padStart(2, "0");
  const month = formattedDate
    .toLocaleString("en-US", { month: "short" })
    .toUpperCase();

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md overflow-hidden my-6 relative">
      <div className="relative">
        <img
          src={process.env.PUBLIC_URL + "/" + imageUrl}
          alt={title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute bottom-0 left-0 bg-red-500 text-white px-3 py-1 mb-2 ms-1 rounded-full text-center">
          {`${day} ${month}`}
        </div>
      </div>
      <div className="p-4">
        <p className="font-bold text-red-500">{author.name}</p>
        <div className="flex items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-gray-700">{body}</p>
          </div>
        </div>
        <div className="flex items-center">
          <img
            src={process.env.PUBLIC_URL + "/" + author.avatar_url}
            alt={author.name}
            className="w-10 h-10 rounded-full mr-4"
          />
          <div>
            <p className="text-gray-600">
              {author.role} - {author.place}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
