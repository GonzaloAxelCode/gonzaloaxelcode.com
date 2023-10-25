import { cn } from "tailwind-cn";

const P = ({ children, className = "", ...args }: any) => {
  return (
    <p
      style={{
        lineHeight: 1.555,
      }}
      className={cn(
        "text-base font-bold-400 text-graydark dark:text-graywhite",
        className
      )}
      {...args}
    >
      {children}
    </p>
  );
};

export default P;
