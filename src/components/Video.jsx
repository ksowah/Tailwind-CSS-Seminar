import React from "react";

const Video = () => {
  return (
    <div className="aspect-video bg-gray-200">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video"
      ></iframe>
    </div>
  );
};

export default Video;
