import React, { useState } from "react";

import { OptionListComponent } from "./list";

interface IInputComponent {
  show: boolean;
  setShow: (data: boolean) => void;
}

export const InputComponent = ({ show, setShow }: IInputComponent) => {
  const [inputText, setInputText] = useState<string>("");
  const [showOption, setShowOption] = useState<boolean>(false);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputText(value);
  };

  return (
    <div className="flex flex-row gap-2 items-start h-full w-fit">
      {show && (
        <div className="flex flex-col gap-2 relative">
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[250px]"
            onChange={handleChangeInput}
            onFocus={() => setShowOption(true)}
            // onBlur={() => setShowOption(false)}
          />
          {showOption && <OptionListComponent setInputText={setInputText} inputText={inputText} setShow={setShow} />}
        </div>
      )}
      <button
        type="button"
        className="py-2.5 px-5  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-fit cursor-pointer "
        onClick={() => setShow(!show)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
        </svg>
      </button>
    </div>
  );
};
