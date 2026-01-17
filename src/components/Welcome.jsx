import { motion } from "framer-motion";
import Scene from "./Scene.jsx";
import "../styles/Welcome.css";

function Welcome({ next }) {
    return (
        <div className = "welcome-wrapper">
            <Scene>
                <motion.h1
                    className = "welcome-title"
                    initial = {{ opacity: 0, y: 10 }}
                    animate = {{ opacity: 1, y: 0 }}
                    transition = {{ delay: 0.4, duration: 1 }}
                >
                    Hi 🙂
                </motion.h1>
                <motion.p
                    className = "welcome-text"
                    initial = {{ opacity: 0 }}
                    animate = {{ opacity: 1 }}
                    transition = {{ delay: 0.9, duration: 1.2 }}
                >
                    Today felt like a good day <br/>
                    to wish you something special.
                </motion.p>
                <motion.button
                    className = "welcome-button"
                    onClick = {next}
                    initial = {{ opacity: 0 }}
                    animate = {{ opacity: 1 }}
                    transition = {{ delay: 0.9, duration: 1 }}
                >
                    Continue →
                </motion.button>
            </Scene>
        </div>
    );
}

export default Welcome;