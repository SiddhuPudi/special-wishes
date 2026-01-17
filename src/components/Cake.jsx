import { motion } from "framer-motion";
import "../styles/Cake.css";
function Cake({ blown, onBlow }) {
    return (
        <div className = "cake-area" onClick = {!blown ? onBlow : undefined} style = {{ pointerEvents: blown ? "none" : "auto" }}>
            <div className = "cake">
                <div className = "cake-top" />
                <div className = "cake-side" />
                <div className = "candles">
                    {[0, 1, 2].map((i) => (
                        <div key = {i} className = "candle">
                            {!blown && (
                                <motion.span
                                    className = "flame"
                                    initial = {{ opacity: 0 }}
                                    animate = {{ opacity: 1 }}
                                    transition = {{ delay: 1 + i * 0.2, duration: 0.6 }}
                                />
                            )}
                            {blown && (
                                <motion.span
                                    className = "smoke"
                                    initial = {{ opacity: 0, y: 0 }}
                                    animate = {{ opacity: [0, 0.45, 0.35, 0], y: -26 }}
                                    transition = {{ duration: 2.4, delay: 0.15 * i, ease: "easeOut" }}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Cake;