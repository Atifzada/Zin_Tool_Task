import React from "react";
import Card from "../components/Card";

export interface Bookmark {
  image: string;
  title: string;
  desc: string;
}

let myBookmarks: Bookmark[] = [
  { image: "image2", title: "Edit PDF", desc: "Use the best online tool to edit PDF in your browser" },
  { image: "image1", title: "Crop PDF", desc: "Crop PDF online to a selected area, adjust margin size..." },
  { image: "image3", title: "Replace Text", desc: "The easiest way to replace online" },
  { image: "image4", title: "Rotate PDF", desc: "Rotate and save your PDF pages online for free" },
];

const Bookmark: React.FC = () => {
  return (
      <><h1 className="px-32 pt-16 pb-8 text-4xl font-bold">Your Bookmarks</h1>
      <div className="flex w-full px-32 gap-6">
      {myBookmarks.map((item, index) => (
        <Card key={index} bookmark={item} />
      ))}
    </div></>
  );
};

export default Bookmark;
