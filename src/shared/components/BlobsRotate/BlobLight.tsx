
"use client"
import useTheme from "../../hooks/useTheme";



const BlobLight = () => {

    const { darkSide } = useTheme()
    if (darkSide) {
        return <></>
    }
    return (
        <div className="body-background-effetcs-only-light">


            <main className="main">
                <div className="mainDiv">

                </div>
            </main>
        </div>

    );
};

export default BlobLight;
