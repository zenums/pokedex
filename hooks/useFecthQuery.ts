import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

const endPoint = "https://pokeapi.co/api/v2/";

export const useFetchQuery = (path: string) => {
  return useQuery({
    queryKey: [path],
    queryFn: async () => {
      const response = await fetch(`${endPoint}${path}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    },
  });
};

export const useInfiniteFetchQuery = (path: string, key: string) => {
  return useInfiniteQuery({
    queryKey: [key],
    initialPageParam: endPoint + path,
    queryFn: async ({ pageParam }) => {
      const response = await fetch(pageParam);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    },
    getNextPageParam: (lastPage) => {
      if ("next" in lastPage) {
        return lastPage.next;
      }
      return null;
    },
  });
};
