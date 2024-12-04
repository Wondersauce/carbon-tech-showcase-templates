import { cn } from "@/app/lib/utils";

interface ChatContainerProps {
  children: React.ReactNode;
  className?: string;
}
export function ChatContainer({ children, className }: ChatContainerProps) {
  return (
    <div className={cn("bg-white rounded-3xl", className)}>{children}</div>
  );
}

interface ChatMessageProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  alignRight?: boolean;
  className?: string;
}
export function ChatMessage({
  children,
  icon,
  title,
  alignRight,
  className,
}: ChatMessageProps) {
  return (
    <div className={cn("p-9", className)}>
      <div
        className={cn("flex items-center gap-2 font-label-02 mb-4", {
          "flex-row-reverse": alignRight,
        })}
      >
        {icon}
        {title}
      </div>
      <div
        className={cn("font-body-02", {
          "text-right": alignRight,
        })}
      >
        {children}
      </div>
    </div>
  );
}
