import { getData } from "@/api";
import { useQuery } from "@tanstack/react-query";

export const useGetData = (search: string) => {
  return useQuery({
    queryKey: ["get-data", search],
    queryFn: () => getData(search),
    refetchOnWindowFocus: false
  });
};
