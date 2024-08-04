import { useState } from "react";
import React, { useEffect } from "react";

function Github() {
  const [data, setData] = useState([]);
  //  We know how to get the followers on Github -- We can call an API
  //  So we have to use useEffect which work when a component loads (here Gihub.jsx)
  useEffect(() => {
    fetch("https://api.github.com/users/AbhijeetPanigrahi")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // but it don't render the page, you have to use useState (above)
        setData(data); // Now you got the data (i.e the no. of follwers)
      });
  }, []);
  return (
    <div className="bg-green-700 text-white text-3xl p-7">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="Github profile img" width={250} />
    </div>
  );
}

export default Github;
