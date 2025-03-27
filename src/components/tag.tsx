import { useContextData } from "@/context/data-context";

interface ITagComponent {
  text: string;
  id: number;
}
export const TagComponent = ({ text = "test", id }: ITagComponent) => {
  const { removeTag } = useContextData();
  const onDelete = () => {
    removeTag?.(id);
    console.log(id);
  };
  return (
    <div className="flex flex-co w-fit">
      <div className="flex flex-row gap-1 border-2 border-amber-200 px-4 rounded-4xl bg-amber-100">
        <p className="font-bold text-[12px]">{text}</p>
        <button type="button" className="cursor-pointer" onClick={onDelete}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z" />
          </svg>
        </button>
      </div>
    </div>
  );
};
