import { cn } from "tailwind-cn";

const Title = ({ children, className = "", id = null, ...args }: any) => {
  return (
    <h1
      style={{
        letterSpacing: "-.025em",
        lineHeight: 1.083,
      }}
      className={cn(
        "text-3xl md:text-4xl font-bold dark:text-white text-black",
        id === null ? "" : "id-ref",
        className
      )}
      {...args}
      id={id}
    >
      {children}
    </h1>
  );
};

export default Title;
