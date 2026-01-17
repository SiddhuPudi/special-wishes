import { motion } from "framer-motion";
import { useState } from "react";
import "../styles/FinalScene.css";
import Scene from "./Scene.jsx";
import Cake from "./Cake";

function FinalScene() {
    const [blown, setBlown] = useState(false);
    return (
        <div className = "final-wrapper">
            <Scene>
                <div className = "final-content">
                    {!blown && (
                        <>
                            <motion.p
                                className = "final-line"
                                initial = {{ opacity: 0, y: 8 }}
                                animate = {{ opacity: 1, y: 0 }}
                                transition = {{ delay: 0.3, duration: 1 }}
                            >
                                Once Again, Happy Birthday 🎂
                            </motion.p>
                            <motion.p
                                className = "final-sub"
                                initial = {{ opacity: 0 }}
                                animate = {{ opacity: 1 }}
                                transition = {{ delay: 0.9, duration: 1.2 }}
                            >
                                Make a wish in your mind,<br/>
                                and tap the cake.
                            </motion.p>
                        </>
                    )}
                    <Cake blown = {blown} onBlow = {() => setBlown(true)} />
                    {blown && (
                        <motion.p
                            className = "final-end"
                            initial = {{ opacity: 0 }}
                            animate = {{ opacity: 1 }}
                            transition = {{ delay: 1.2, duration: 1.5 }}
                        >
                            ✨<br/>
                            May Your Wish Come True
                        </motion.p>
                    )}
                </div>
            </Scene>
        </div>
    );
}

export default FinalScene;