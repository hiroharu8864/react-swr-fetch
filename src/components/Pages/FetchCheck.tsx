import { FC, memo, Suspense, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAllUsersSWR } from "../../hooks/useAllUsersSWR";

import { PrimaryButton } from "../atoms/button/PrimaryButton";

const ResultComponent = () => {
  const { data } = useAllUsersSWR();

  return (
    <>
      <div>
        <p>Fetch Users is below</p>
        {data.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </>
  );
};

export const FetchCheck: FC = memo(() => {
  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <div>
        <Suspense fallback={<p>厄介な広告ページの表示</p>}>
          <ResultComponent />
        </Suspense>
        <PrimaryButton onClick={onClickHome}>to Home</PrimaryButton>
      </div>
    </>
  );
});
