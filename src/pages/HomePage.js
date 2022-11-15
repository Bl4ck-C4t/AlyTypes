import {useNavigate} from "react-router-dom";

export default function HomePage(){
    const navigate = useNavigate();

    const beginTest = () => {
        navigate("/test")
    }

    return (
        <>
            <h1>Welcome to the Aly's 10 personalities website!!</h1>
            <div id="site-info">
                Use the button below to find out which Rosie type are you!
            </div>
            <button id="start-button" onClick={beginTest}> Begin Test </button>
            <p id="fine-print">By taking this test you consent to not being mad, upset or isolating from the creator for a period
            longer then 2-3 business days.
            </p>
        </>
    );
}