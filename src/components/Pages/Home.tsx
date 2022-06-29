import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const Home: FC = memo(() => {
  const navigate = useNavigate();
  const onClickFetchCheck = useCallback(() => {
    navigate("/fetch");
  }, [navigate]);
  return (
    <>
      <p>SWR FetchCheck</p>
      <PrimaryButton onClick={onClickFetchCheck}>
        To React Query Check
      </PrimaryButton>
    </>
  );
});
