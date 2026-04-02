"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Magnetic = ({ children }) => {
    const magneticRef = useRef(null);

    useEffect(() => {
        const mEffect = magneticRef.current;
        if (!mEffect) return;

        const xTo = gsap.quickTo(mEffect, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(mEffect, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = mEffect.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x * 0.35);
            yTo(y * 0.35);
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        mEffect.addEventListener("mousemove", handleMouseMove);
        mEffect.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            mEffect.removeEventListener("mousemove", handleMouseMove);
            mEffect.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div ref={magneticRef} className="inline-block">
            {children}
        </div>
    );
};

export default Magnetic;
