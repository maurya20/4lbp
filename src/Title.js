import React, { useEffect } from "react";

export const Title = () => {
  const [state, setState] = React.useState(null);
  useEffect(() => {
    getBlogs();
  }, []);
  async function getBlogs() {
    const res = await fetch(
      "https://logibricks.com/api/blogs/logistics-management"
    );
    const resObj = await res.json();
    console.log("????", resObj);
    setState(resObj?.blogs?.data);
  }

  return state != null ? (
    <div
      style={{
        margin: "10px",
        border: "2px solid green",
        borderRadius: "15px",
        padding: "10px",
      }}
    >
      {state &&
        state?.map((v, i) => {
          return <h3 key={i}>{v.title}</h3>;
        })}
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};
