import { useEffect, useState, useRef } from "react";
import "../styles/Stars.css";

const Birthday = new Date("2026-01-18");

function getMoonPhaseByDate(date) {
    const synodicMonth = 29.53058867;
    const knownNewMoon = new Date(Date.UTC(2000, 0, 6, 18, 14));
    const daysSince = (date.getTime() - knownNewMoon.getTime()) / (1000 * 60 * 60 * 24);
    const phase = ((daysSince % synodicMonth) + synodicMonth) % synodicMonth;
    if (phase < 1.84566) return "new";
    if (phase < 5.53699) return "waxing-crescent";
    if (phase < 9.22831) return "first-quarter";
    if (phase < 12.91963) return "waxing-gibbous";
    if (phase < 16.61096) return "full";
    if (phase < 20.30228) return "waning-gibbous";
    if (phase < 23.99361) return "last-quarter";
    return "waning-crescent";
}

function Stars({ fadeOut = false, triggerWish = false }) {
    const [starsData, setStarsData] = useState([]);
    const starsRef = useRef([]);
    const [shootingStar, setShootingStar] = useState(null);
    const cursor = useRef({ x: 0, y: 0 });
    const moonPhase = getMoonPhaseByDate(Birthday);
    const [showConstellation, setShowConstellation] = useState(false);
    const [constellationPos, setConstellationPos] = useState({ x: 20, y:30 });
    const [constellationRotation, setConstellationRotation] = useState(0);
    //star-appearance
    useEffect(() => {
        const area = window.innerWidth * window.innerHeight;
        const count = Math.min(160, Math.max(60, Math.floor(area / 15000)));
        setStarsData(
            Array.from({ length: count }, (_, i) => ({
                id: i,
                top: Math.random() * 100,
                left: Math.random() * 100,
                delay: Math.random() * 4,
                depth: (i % 3) + 1,
            }))
        );
    }, []);
    //mouse-effect
    useEffect(() => {
        const handleMouseMove = (e) => {
            cursor.current = { x: e.clientX, y: e.clientY };
            starsRef.current.forEach((star) => {
                if (!star) return;
                const depth = Number(star.dataset.depth);
                const x = (cursor.current.x / window.innerWidth - 0.5) * depth * 10;
                const y = (cursor.current.y / window.innerHeight - 0.5) * depth * 10;
                star.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);
    //shooting-star
    useEffect(() => {
        const interval = setInterval(() => {
            const directions = [
                { top: "-10%", left: "10%", dx: "120vw", dy: "60vh" },
                { top: "10%", left: "-10%", dx: "140vw", dy: "40vh" },
                { top: "-10%", left: "70%", dx: "-120vw", dy: "60vh" },
                { top: "30%", left: "110%", dx: "-140vw", dy: "40vh" },
            ];
            const chosen = directions[Math.floor(Math.random() * directions.length)];
            setShootingStar(chosen);
            setTimeout(() => setShootingStar(null), 1500);
        }, 8000);
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        if (!triggerWish) return;
        const wishStar = {
            top: "20%",
            left: "-10%",
            dx: "140vw",
            dy: "50vh",
        }
        setShootingStar(wishStar);
        setTimeout(() => setShootingStar(null), 3000);
    }, [triggerWish]);
    //constellation
    useEffect(() => {
        const interval = setInterval(() => {
            setConstellationPos({
                x: Math.random() * 60 + 10,
                y: Math.random() * 50 + 10
            })
            setConstellationRotation(Math.random() * 20 - 10);
            setShowConstellation(true);
            setTimeout(() => setShowConstellation(false), 4000);
        }, 12000);
        return () => clearInterval(interval);
    }, []);
    //coherent-sky
    useEffect(() => {
        const moon = document.querySelector(".moon");
        const stars = document.querySelectorAll(".star");
        if (!moon) return;
        const moonRect = moon.getBoundingClientRect();
        stars.forEach((star) => {
            const rect = star.getBoundingClientRect();
            const dx = rect.left - moonRect.left;
            const dy = rect.top - moonRect.top;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 300) {
                star.style.filter = "brightness(1.6)";
                star.style.opacity = "0.9";
            }
        });
    }, []);

    return (
        <div className = {`stars ${fadeOut ? "fade-out" : ""}`}>
            {/* Moon */}
            <div className = {`moon moon-${moonPhase}`}>
                <div className = "moon-surface" />
            </div>
            {/* Moon Clouds */}
            <div className = "moon-clouds">
                {[...Array(2)].map((_, i) => (
                    <div key={i} className = {`moon-cloud moon-cloud-${i}`} />
                ))}
            </div>
            {/* Clouds */}
            <div className = "cloud-layer">
                {[...Array(3)].map((_, i) => (
                    <div key = {i} className = {`cloud cloud-${i}`} />
                ))}
            </div>
            {/* Stars */}
            {starsData.map((star, i) => (
                <span
                    key = {star.id}
                    ref={(el) => (starsRef.current[i] = el)}
                    className = "star"
                    data-depth = {star.depth}
                    style = {{
                        top: `${star.top}%`,
                        left: `${star.left}%`,
                        animationDelay: `${star.delay}s`,
                    }}
                />
            ))}
            {/* Shooting-star */}
            {shootingStar && (
                <span 
                    className = "shooting-star"
                    style = {{ 
                        top: shootingStar.top,
                        left: shootingStar.left,
                        "--dx": shootingStar.dx,
                        "--dy": shootingStar.dy,
                    }}
                />
            )}
            {/* Constellation */}
            {showConstellation && (
                <svg 
                    className = "constellation"
                    viewBox = "0 0 200 100"
                    style = {{ 
                        top: `${constellationPos.y}%`, 
                        left: `${constellationPos.x}%`,
                        transform: `rotate(${constellationRotation}deg)`
                    }}
                >
                    <line x1="20" y1="80" x2="80" y2="40" />
                    <line x1="80" y1="40" x2="140" y2="60" />
                    <line x1="140" y1="60" x2="180" y2="20" />
                </svg>
            )}
        </div>
    );
}

export default Stars;