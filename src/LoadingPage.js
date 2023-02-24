import { Container, Spinner } from "react-bootstrap";

function LoadingPage({ isHome = false }) {

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "300px"
    }

    return (
        <div style={containerStyle}>
            {isHome && <>
                <div><h6>This site may take a moment or two to load...</h6></div>
                <div><h6>Your patience is appreciated!</h6></div>
            </>}
            <div style={{ margin: "10px 0px" }}>
                <Spinner />
            </div>
        </div>
    )
}


export default LoadingPage;