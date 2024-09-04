import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

const endPoint = "https://pokeapi.co/api/v2/";

export const useFetchQuery = (path: string, key: string) => {
  return useQuery({
    queryKey: [key],
    queryFn: async () => {
      const response = await fetch(`${endPoint}${path}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });
};

export const useInfiniteFetchQuery = (path: string, key: string) => {
  return useInfiniteQuery({
    queryKey: [key],
    initialPageParam : endPoint + path,
    queryFn: async ({ pageParam }) => {
      const response = await fetch(pageParam);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    getNextPageParam: (lastPage) => {
      return lastPage.next ? lastPage : undefined;
    },
  });
}