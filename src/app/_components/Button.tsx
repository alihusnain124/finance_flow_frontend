"use client";
type ButtonProps = {
  content: string;
  isBlue?: boolean;
  width?: number;
  urlPath?: string;
};
import { useRouter } from "next/navigation";

const Button = ({ content, isBlue, width, urlPath }: ButtonProps) => {
  const router = useRouter();

  const handleClick = (path: string) => {
    try {
      if (path !== "") {
        router.push(path);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      className={`${
        isBlue
          ? `bg-blue hover:bg-[#031FB4]`
          : `bg-slate-600 hover:bg-white hover:text-blue`
      } border-none rounded-3xl ${
        width ? `md:w-${width}` : `md:w-45 w-90`
      } h-11 text-sm cursor-pointer  `}
      onClick={() => handleClick(urlPath ? urlPath : "")}
    >
      {content.toLocaleUpperCase()}
    </button>
  );
};

export default Button;
