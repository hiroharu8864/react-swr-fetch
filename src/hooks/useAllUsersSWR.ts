import useSWR from "swr";

import { User } from "../types/User";

export const useAllUsersSWR = () => {
  const fetcher = async (url: string): Promise<any> => {
    const resonse = await fetch(url);
    return resonse.json();
  };
  /**
   * 第2引数　fetcher
   * Promise を返す関数であれば、何でもよい。
   *
   */

  const { data, error } = useSWR<Array<User>>(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );
  return { data, error };
};
