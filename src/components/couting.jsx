import React from 'react'

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function Couting({ angka }) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
        const animation = animate(count, angka, {
            duration: 10
        });

        return animation.stop;
    }, []);

    return <motion.h1>{rounded}</motion.h1>;
}
