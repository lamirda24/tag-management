"use client";
import { InputComponent } from "@/components/input";

import { TagComponent } from "@/components/tag";
import { useContextData } from "@/context/data-context";

import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState<boolean>(false);
  const { tagList } = useContextData();

  return (
    <div className="flex w-full max-w-2xl h-[100vh] mx-auto flex-col mt-[100px]">
      <div className="flex flex-row gap-1">
        <div className="flex flex-row gap-1 border-2 w-full min-h-[100px] rounded-md p-4 items-start flex-wrap">
          <div className="flex flex-row gap-1 py-2 w-fit ">
            {tagList?.map((item) => (
              <TagComponent text={item.title} key={item.id} id={item.id} />
            ))}
          </div>
          <InputComponent show={show} setShow={setShow} />
        </div>
      </div>
    </div>
  );
}
