import { cn } from "tailwind-cn";

interface FlexProps {
  minscreen?: any;
  maxscreen?: any;
  col?: any;
  itemsstart?: any;
  itemscenter?: any;
  justifycenter?: any;
  full?: any;
  between?: any;
  cssmax?: any;
  cssmin?: any;
  stretch?: any;
  hfull?: any;
  itemsend?: any;
  disabled?: any;
  hidden?: any;
  children?: any;
  wfit?: any;
}

const Flex = (props: React.HTMLProps<HTMLDivElement> & FlexProps) => {
  const flexClasses = cn(
    props?.col ? "flex-col" : "",
    props?.stretch ? "items-stretch" : "",
    props?.itemsend ? "items-end" : "",
    props?.itemsstart ? "flex-start" : "",
    props?.itemscenter ? "items-center" : "",
    props?.justifycenter ? "justify-center" : "",
    props?.between ? "justify-between" : "",
    props?.hfull ? "h-full" : "w-auto",
    props?.full ? "w-full" : "w-auto",
    props?.wfit ? "w-fit" : "",
    props?.hidden ? "hidden" : "flex"
  );
  const {
    hidden,
    col,
    stretch,
    itemsend,
    justifycenter,
    between,
    hfull,
    full,
    wfit,
    className,
    ...restProps
  } = props;

  return (
    <div
      className={`${flexClasses} ${props.className || ""}`}
      disabled={props.disabled}
      cssmax={props.cssmax}
      cssmin={props.cssmin}
      minscreen={props.minscreen}
      maxscreen={props.maxscreen}
      style={props.style}
      {...restProps}
    >
      {props.children}
    </div>
  );
};

export default Flex;
