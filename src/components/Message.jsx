import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Scene from "./Scene.jsx";
import "../styles/Message.css";

const messageText = `Happy Birthday ✨

I hope today brings you a little calm,
a few genuinue smiles,
and moments that feel light.

You deserve all the best things today and always.

Enjoy your special day! 🎉`;

function Message({ next, prev }) {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const isTyping = index < messageText.length;
    useEffect(() => {
        if (index < messageText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + messageText[index]);
                setIndex((i) => i + 1);
            }, 38);
            return () => clearTimeout(timeout);
        }
    }, [index, messageText]);
    return (
        <div className = {`message-wrapper ${isTyping ? "typing" : ""}`}>
            <Scene className = {isTyping ? "scene-typing": ""}>
                <motion.pre
                    className = "message-text"
                    initial = {{ opacity: 0.6 }}
                    animate = {{ opacity: 1 }}
                    transition = {{ duration: 1 }}
                >
                    {displayedText}
                    {isTyping && <span className = "typing-caret">▍</span>}
                </motion.pre>
                <motion.div
                    className = "message-buttons"
                    initial = {{ opacity: 0 }}
                    animate = {{ opacity: index >= messageText.length ? 1 : 0 }}
                    transition = {{ duration: 1 }}
                >
                    <button onClick={prev}>Back</button>
                    <button onClick={next}>Continue →</button>
                </motion.div>
            </Scene>
        </div>
    );
}

export default Message;