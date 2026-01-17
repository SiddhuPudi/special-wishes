import { motion } from "framer-motion";
import "../styles/Scene.css";

function Scene({ children, className = "" }) {
    return (
        <motion.div
            className = {`scene ${className}`}
            initial = {{ opacity: 0, y: 30, scale: 0.98 }}
            animate = {{ opacity: 1, y: 0, scale: 1 }}
            exit = {{ opacity: 0, y: -20, scale: 0.98 }}
            transition = {{ duration: 1.2, ease: "ease-out" }}
        >
            {children}
        </motion.div>
    )
}

export default Scene;