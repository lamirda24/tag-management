import { useCallback } from "react";
import { useRouter } from "next/navigation";

import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { postData } from "@/api";

export const useAddData = () => {
  const config = useConfig();

  return useMutation({
    mutationFn: postData,
    ...config
  });
};

const useConfig = () => {
  const router = useRouter();

  const onError = useCallback((error: AxiosError) => {
    if (error.response?.status === 400) {
      throw error.response?.status;
    }

    throw error.response?.data;
  }, []);

  const onSuccess = useCallback(() => console.log("success!"), [router]);

  return { onError, onSuccess };
};
