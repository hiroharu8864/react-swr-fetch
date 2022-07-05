import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const Home: FC = memo(() => {
  const navigate = useNavigate();
  const onClickFetchCheck = useCallback(() => {
    navigate("/fetch");
  }, [navigate]);
  const onClickNodeFetchCheck = useCallback(() => {
    navigate("/nodefetch");
  }, [navigate]);
  return (
    <>
      <p>SWR FetchCheck</p>
      <PrimaryButton onClick={onClickFetchCheck}>
        To SWR Query Check
      </PrimaryButton>
      <br />
      <br />
      <PrimaryButton onClick={onClickNodeFetchCheck}>
        To Node-Fetch Query Check
      </PrimaryButton>
    </>
  );
});
