import { motion } from "framer-motion";
import "../styles/Wish.css";
import Scene from "./Scene.jsx";

function Wish({ next, prev }) {
    return (
        <div className = "wish-wrapper">
            <Scene>
                    <motion.h2 
                        className = "wish-title"
                        initial = {{ opacity: 0, y: 10 }}
                        animate = {{ opacity: 1, y: 0 }}
                        transition = {{ duration: 1 }}
                    >
                        Just a few simple wishes for you
                    </motion.h2>
                    <div className = "wish-symbols">
                        <motion.div
                            className = "wish-item"
                            initial = {{ opacity: 0, y: 18 }}
                            animate = {{ opacity: 1, y: 0 }}
                            transition = {{ delay: 0.4, duration: 0.9 }}
                            whileHover = {{ scale: 1.05 }}
                        >
                            <span className = "symbol">🌙</span>
                            <p>May your life be filled with peaceful thoughts.</p>
                        </motion.div>
                        <motion.div 
                            className = "wish-item"
                            initial = {{ opacity: 0, y: 18 }}
                            animate = {{ opacity: 1, y: 0 }}
                            transition = {{ delay: 0.8, duration: 0.9 }}
                            whileHover = {{ scale: 1.05 }}
                        >
                            <span className = "symbol">⭐️</span>
                            <p>May you always reach for the stars and achieve your dreams.</p>
                        </motion.div>
                        <motion.div 
                            className = "wish-item"
                            initial = {{ opacity: 0, y: 18 }}
                            animate = {{ opacity: 1, y: 0 }}
                            transition = {{ delay: 1.2, duration: 0.9 }}
                            whileHover = {{ scale: 1.05 }}
                        >
                            <span className = "symbol">🌸</span>
                            <p>Hope in the days ahead brings joy and fulfillment.</p>
                        </motion.div>
                    </div>
                    <motion.div
                        className = "wish-buttons"
                        initial = {{ opacity: 0 }}
                        animate = {{ opacity: 1 }}
                        transition = {{ delay: 1.4, duration: 1 }}
                    >
                        <button onClick={prev}>Back</button>
                        <button onClick={next}>Continue →</button>
                    </motion.div>
            </Scene>
        </div>
    );
}

export default Wish;