
"use client"
import useTheme from "../hooks/useTheme";



const BackgroundEffect1 = () => {

    const { darkSide } = useTheme()
    if (!darkSide) {
        return <></>
    }
    return (
        <div className="container_blob w-screen ">
            <div className="blob-c">
                <div className="shape-blob" />
                <div className="shape-blob one" />
                <div className="shape-blob two" />
                <div className="shape-blob three" />
                <div className="shape-blob four" />
                <div className="shape-blob five" />
                <div className="shape-blob six" />
            </div>

        </div>

    );
};

export default BackgroundEffect1;
