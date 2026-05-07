"use client";
import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";

const AnimatedCard = ({ children }) => {
    const [hovered, setHovered] = useState(false);

    const spring = useSpring({
        transform: hovered ? "scale(1.04) translateY(-6px)" : "scale(1) translateY(0px)",
        config: { tension: 300, friction: 20 },
    });

    return (
        <animated.div
            style={spring}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {children}
        </animated.div>
    );
};

export default AnimatedCard;