import { get } from "@/services/axios";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

interface UseFetchQueryOptions {
  onSuccess?: (data: any) => void;
}

export const useFetchQuery = (path: string, options?: UseFetchQueryOptions) => {
  return useQuery({
    queryKey: [path],
    queryFn: async () => {
      const response = await get(path);
      return response; 
    },
    onSuccess: options?.onSuccess, 
  });
};

// export const useInfiniteFetchQuery = (path: string, key: string) => {
//   return useInfiniteQuery({
//     queryKey: [key],
//     initialPageParam: endPoint + path,
//     queryFn: async ({ pageParam }) => {
//       const response = await fetch(pageParam);
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const data = await response.json();
//       return data;
//     },
//     getNextPageParam: (lastPage) => {
//       if ("next" in lastPage) {
//         return lastPage.next;
//       }
//       return null;
//     },
//   });
// };
