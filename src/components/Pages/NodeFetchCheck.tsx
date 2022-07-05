import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const NodeFetchCheck: FC = memo(() => {
  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  /** node-fetch */
  const fetch = (...args) =>
    import("node-fetch").then(({ default: fetch }) => fetch(...args));
  const fetchJsonPlaceholder = (path) =>
    fetch(`https://jsonplaceholder.typicode.com/${path}`);

  const allUsersFetchNode = async () => {
    const response = await fetchJsonPlaceholder("/users");
    console.log(response);
    return response;
  };

  return (
    <>
      <p>Node-Fetch Check under investigation</p>
      <PrimaryButton onClick={allUsersFetchNode}>Get Data</PrimaryButton>
      <PrimaryButton onClick={onClickHome}>To Home</PrimaryButton>
    </>
  );
});
