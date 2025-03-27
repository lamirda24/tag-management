import { useGetData } from "@/hooks/queries/use-get-data";
import { LoadingComponent } from "./loading";
import { useContextData } from "@/context/data-context";
import { IProduct } from "@/api/index.types";
import { useAddData } from "@/hooks/mutation/use-add-data";

interface IOptionListComponent {
  inputText: string;
  setShow: (data: boolean) => void;
  setInputText: (data: string) => void;
}

export const OptionListComponent = ({ inputText, setShow, setInputText }: IOptionListComponent) => {
  const { data, isLoading, refetch } = useGetData(inputText);
  const { addTagList } = useContextData();

  const { mutateAsync } = useAddData();
  const option = data?.products;

  const addToList = (data: IProduct) => {
    addTagList?.(data);

    setShow(false);
  };
  const addData = async () => {
    try {
      const res = await mutateAsync(inputText);
      refetch();
      setInputText("");
      addTagList?.(res);
      if (res) {
        setShow(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm  dark:bg-gray-700 dark:divide-gray-600 w-full max-h-[200px] overflow-y-auto">
      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
        {isLoading ? (
          <LoadingComponent />
        ) : (
          <>
            {Number(option?.length) > 0 ? (
              option?.map((item) => (
                <li key={item.id}>
                  <button
                    className="w-full  text-left block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                    onClick={() => addToList(item)}
                  >
                    {item.title}
                  </button>
                </li>
              ))
            ) : (
              <div className="">
                <button
                  type="button"
                  className="p-2 text-sm font-medium flex flex-row items-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white cursor-pointer w-full rounded-md"
                  onClick={() => addData()}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
                  </svg>
                  <p className="block px-4 py-2 text-sm text-gray-700 ">Create Tag</p>
                </button>
              </div>
            )}
          </>
        )}
      </ul>
    </div>
  );
};
