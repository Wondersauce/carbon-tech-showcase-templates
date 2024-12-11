import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@carbon/react';

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
      className={cn('rounded-full', rest.className, {
        'pe-4 ps-16 [&>svg]:ms-2 [&>svg]:inline-start-2': leftAlignIcon,
      })}
    />
  );
}
