import { cn } from '@/lib/utils';

interface ChatContainerProps {
  children: React.ReactNode;
  className?: string;
}
export function ChatContainer({ children, className }: ChatContainerProps) {
  return <div className={cn(' overflow-y-aut', className)}>{children}</div>;
}

interface ChatEntryProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  alignRight?: boolean;
  className?: string;
}
export function ChatEntry({
  children,
  icon,
  title,
  alignRight,
  className,
}: ChatEntryProps) {
  return (
    <div
      className={cn('p-9', className, {
        'ms-20': alignRight,
        'me-20': !alignRight,
      })}
    >
      <div
        className={cn('mb-2 flex items-center gap-2 font-label-02', {
          'flex-row-reverse': alignRight,
        })}
      >
        {icon}
        {title}
      </div>
      <div
        className={cn('flex flex-col space-y-2 font-body-02', {
          'items-end text-right': alignRight,
        })}
      >
        {children}
      </div>
    </div>
  );
}

interface ChatMessageUserProps {
  children: React.ReactNode;
  className?: string;
}
export function ChatMessageUser({ children, className }: ChatMessageUserProps) {
  return (
    <div
      className={cn(
        'w-fit rounded-2xl rounded-tr-none bg-blue-20 p-4',
        className
      )}
    >
      {children}
    </div>
  );
}
