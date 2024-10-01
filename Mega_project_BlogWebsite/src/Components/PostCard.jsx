// import React from "react";
// import appwriteService from "../appwrite/config";
// import { Link } from "react-router-dom";

// function PostCard({ $id, title, featuredImage }) {
//   return (
//     <Link to={`/post/${$id}`}>
//       <div className="w-full bg-black text-white rounded-xl p-4">
//         <div className="w-full justify-center mb-4">
//           <img
//             // src={`${appwriteService.getFilePreview(
//             //   featuredImage
//             // )}&project=66df0e0c002af9566dc4&mode=admin`}
//             src={appwriteService.getFilePreview(featuredImage)}
//             // src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
//             alt={title}
//             className="rounded-xl"
//           />
//         </div>

//         <h2 className="text-xl font-bold">{title}</h2>
//       </div>
//     </Link>
//   );
// }

// export default PostCard;

import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-black text-white rounded-xl p-4 transition-transform transform hover:scale-105 duration-300 ease-in-out">
        <div className="w-full justify-center mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl object-cover w-full h-48 sm:h-56 lg:h-64"
          />
        </div>

        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
