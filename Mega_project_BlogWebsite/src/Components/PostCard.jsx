import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            // src={`${appwriteService.getFilePreview(
            //   featuredImage
            // )}&project=66df0e0c002af9566dc4&mode=admin`}
            src={appwriteService.getFilePreview(featuredImage)}
            // src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            alt={title}
            className="rounded-xl"
          />
        </div>

        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
