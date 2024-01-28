import { useState, useEffect } from "react";

const SetTimer = () => {
    const [countdown, setCountdown] = useState("00:00:60");
    const [download, setDownload] = useState(false);

    useEffect(() => {
        let timeInterval = setInterval(() => {
            setCountdown(prevCountdown => {
                const seconds = parseInt(prevCountdown.slice(-2), 10);
                if (seconds === 0) {
                    clearInterval(timeInterval);
                    setDownload(true);
                    return "00:00:00";
                } else {
                    const newSeconds = seconds - 1;
                    const formattedSeconds = newSeconds < 10 ? `0${newSeconds}` : `${newSeconds}`;
                    return `00:00:${formattedSeconds}`;
                }
            });
        }, 1000);

        return () => {
            clearInterval(timeInterval);
        };
    }, []);

    return (
        <div style={{ position: "fixed", top: "30%", left: "50%", transform: "translate(-50%, -50%)", display: "flex", justifyContent: "center", textAlign: "center" }}>
            <div style={{ width: "550px", height: "200px", backgroundColor: "#EDC9AF", color: "white", zIndex: 10, borderRadius: 16 }}>
                <h1>{countdown}</h1>
                <div>
                    {download ? <a href="https://unsplash.com" download style={{ border: "1px solid #FF4F00", padding: "10px 1rem", textDecoration: "none", color: "white", backgroundColor: "#FF4F00", marginTop: "1rem", borderRadius: "10px" }}>Download</a> : null}
                </div>
            </div>
        </div>
    );
}

export default SetTimer;
