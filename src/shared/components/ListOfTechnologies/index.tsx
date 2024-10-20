"use client";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';



const ListOfTechnologies = ({ technologies }: { technologies: any }) => {
  const toolsArray = Object.entries(technologies);

  return (
    <div className="flex flex-wrap  w-full gap-3 ">
      {toolsArray.map(([tech, url]: any) => (
        <span key={tech} data-tooltip-id={tech}>
          <Tooltip id={tech} place="bottom"
            content={tech} />
          <img src={url} alt="" className="w-[30px] h-[30px] object-contain" />
        </span>
      ))}
    </div>
  );
};

export default ListOfTechnologies;
