import useSWR from "swr";

import { User } from "../types/User";

export const useAllUsersSWR = () => {
  const fetcher = async (url: string): Promise<boolean | null> => {
    const resonse = await fetch(url);
    return resonse.json();
  };

  const { data, error } = useSWR<Array<User>>(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );
  return { data, error };
};
