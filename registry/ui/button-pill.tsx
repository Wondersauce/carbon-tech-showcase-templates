import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@carbon/react";

type ButtonPillProps<T extends React.ElementType> = ButtonProps<T> & {
  leftAlignIcon?: boolean;
};

export function ButtonPill<T extends React.ElementType>({
  leftAlignIcon,
  ...rest
}: ButtonPillProps<T>) {
  return (
    <Button
      {...(rest as ButtonProps<T>)}
      className={cn("rounded-full", rest.className, {
        "[&>svg]:ms-2 [&>svg]:inline-start-2 ps-16 pe-4": leftAlignIcon,
      })}
    />
  );
}
