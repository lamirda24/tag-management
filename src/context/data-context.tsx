"use client";

import { IProduct } from "@/api/index.types";
import { ReactNode, createContext, useCallback, useContext, useMemo, useState } from "react";

interface IDataContext {
  tagList: IProduct[];
  removeTag: (id: string | number) => void;
  addTagList: (data: IProduct) => void;
}

const DataContext = createContext<IDataContext | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [tagList, setTagList] = useState<IProduct[]>([]);

  const removeTag = useCallback((id: string | number) => {
    setTagList((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const addTagList = useCallback((data: IProduct) => {
    setTagList((prev) => [...prev, data]);
  }, []);

  const value = useMemo(
    () => ({
      tagList,
      removeTag,
      addTagList
    }),
    [addTagList, removeTag, tagList]
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useContextData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useContextData must be used within a DataProvider");
  }
  return context;
};
