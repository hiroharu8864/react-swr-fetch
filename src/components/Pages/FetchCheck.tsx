import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAllUsersSWR } from "../../hooks/useAllUsersSWR";

export const FetchCheck: FC = memo(() => {
  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const { data, error } = useAllUsersSWR();
  console.log(data);

  return (
    <>
      <div>
        <p>Test Page</p>
        {/* {data.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))} */}
        <button onClick={onClickHome}>to home</button>
      </div>
    </>
  );
});
