import useSWR from "swr";

import { User } from "../types/User";

export const useAllUsersSWR = () => {
  const fetcher = async (url: string): Promise<any> => {
    const resonse = await fetch(url);
    return resonse.json();
  };

  const { data, error, isValidating } = useSWR<Array<User>>(
    "https://jsonplaceholder.typicode.com/users",
    fetcher,
    { suspense: true }
  );
  console.log(data);
  console.log(isValidating);
  return { data, error };
};
