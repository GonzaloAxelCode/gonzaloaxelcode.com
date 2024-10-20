import { cn } from "tailwind-cn";

const P = ({ children, extClassName, className = "", ...args }: any) => {
  return (
    <p
      style={{
        lineHeight: 1.555,
      }}
      {...args}
      className={cn(
        "text-base font-bold-400 text-graydark dark:text-graywhite",
        className, extClassName
      )}
    >
      {children}
    </p>
  );
};

export default P;
