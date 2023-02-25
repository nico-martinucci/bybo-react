/**
 * Home: simple homepage component.
 * 
 * Props: N/A
 * 
 * State: N/A
 * 
 * RoutesList => Home
 */
function Home() {

    const h1Style = {
        color: "white",
        fontSize: "1000%"
    }

    const h3Style = {
        color: "white",
    }

    return (
        <div className="bg">
            <div className="hero">
                <h1 style={h1Style}>BYBO</h1>
                <h3 style={h3Style}>Backyards By Owner</h3>
            </div>
        </div>
    )
}


export default Home