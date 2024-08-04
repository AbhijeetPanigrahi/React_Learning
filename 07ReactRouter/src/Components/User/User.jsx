import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div>
      <h1 className="bg-orange-600 text-white text-3xl p-7">User: {userid}</h1>
    </div>
  );
}

export default User;
