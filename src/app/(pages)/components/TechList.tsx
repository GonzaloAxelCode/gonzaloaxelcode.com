"use client"
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
const TechList = ({ tools }) => {

    return (
        <div className="hidden md:flex all-tools  flex-wrap    w-full mx-auto pt-4 justify-center md:justify-start ">
            {Object.entries(tools).map(([tech, url]: any) => (

                <div key={tech}
                    data-tooltip-id={tech}
                    className="avatar w-[50px] h-[50px] m-1">
                    <Tooltip id={tech} place="bottom"
                        content={tech} />
                    <img src={url || ""} alt={tech} className="background" />
                    <img src={url || ""} alt={tech} />
                </div>
            ))}
        </div>
    )
}

export default TechList