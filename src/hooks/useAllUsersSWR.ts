import useSWR from "swr";

import { User } from "../types/User";

export const useAllUsersSWR = () => {
  const fetcher = async (url: string): Promise<any> => {
    const response = await fetch(url);
    return response.json();
  };

  const { data } = useSWR<Array<User>>(
    "https://jsonplaceholder.typicode.com/users",
    fetcher,
    { suspense: true }
  );
  return { data };
};
