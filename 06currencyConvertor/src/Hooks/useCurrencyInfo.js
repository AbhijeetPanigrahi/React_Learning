// // https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.7.28/v1/currencies/usd.json
// import { useState, useEffect } from "react";

// function useCurrencyInfo(currency) {
//   const [data, setData] = useState({});
//   useEffect(() => {
//     fetch(
//       `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.7.28/v1/currencies/${currency}.json`
//     )
//       .then((res) => res.json()) // res means response i.e an object and convert that to JSON format
//       .then((res) => setData(res[currency])); // to store the data/res. res.currency i.e object.property
//     console.log(data);
//   }, [currency]);
//   console.log(data);
//   return { data };
// }

// export default useCurrencyInfo;

//  -----------------------------------------------------

// import { useState, useEffect } from "react";

// function useCurrencyInfo(currency) {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     let isMounted = true;

//     fetch(
//       `      https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.7.28/v1/currencies/${currency}.json
// `
//     )
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return res.json();
//       })
//       .then((res) => {
//         if (isMounted) {
//           setData(res[currency]);
//         }
//       })
//       .catch((err) => {
//         if (isMounted) {
//           setError(err.message);
//         }
//       });

//     return () => {
//       isMounted = false;
//     };
//   }, [currency]);

//   useEffect(() => {
//     console.log(data);
//   }, [data]);

//   return { data, error };
// }

// export default useCurrencyInfo;

//  --------------------------------------------------------

// import { useState, useEffect } from "react";

// function useCurrencyInfo(currency) {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     let isMounted = true;

//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.7.28/v1/currencies/${currency}.json`
//         );

//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }

//         const result = await response.json();

//         if (isMounted) {
//           setData(result[currency]);
//         }
//       } catch (err) {
//         if (isMounted) {
//           setError(err.message);
//         }
//       }
//     };

//     fetchData();

//     return () => {
//       isMounted = false;
//     };
//   }, [currency]);

//   useEffect(() => {
//     console.log(data);
//   }, [data]);

//   return { data, error };
// }

// export default useCurrencyInfo;

import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.7.28/v1/currencies/${currency}.json`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();

        if (isMounted) {
          setData(result[currency]);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [currency]);

  return { data, error };
}

export default useCurrencyInfo;
