import { MouseEventHandler } from "react";

import { cn } from "@/lib/utils";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({ onClick, icon, className }) => {
  return (
    <button className={cn("rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition", className)} onClick={onClick}>
      {icon}
    </button>
  );
};
export default IconButton;