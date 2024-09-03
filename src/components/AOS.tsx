"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface AosOptions {
    animatedClassName?: string;
    offset?: number;
    delay?: number;
    duration?: number;
    easing?: string;
    mirror?: boolean;
    once?: boolean;
    anchorPlacement?: string;
}

interface AosProps {
    children: React.ReactNode;
    options?: AosOptions;
}

export default function Aos({ children, options = {} }: AosProps) {
    useEffect(() => {
        AOS.init();
        
        return () => {
            AOS.refresh();
        };
    }, [options]);
    
    return (
        <div 
            data-aos={options.animatedClassName || 'fade'} 
            data-aos-offset={options.offset || 0} 
            data-aos-delay={options.delay || 0} 
            data-aos-duration={options.duration || 400}
            data-aos-easing={options.easing || 'ease'} 
            data-aos-mirror={options.mirror || false} 
            data-aos-once={options.once || false}
            data-aos-anchor-placement={options.anchorPlacement || 'top-bottom'}
        >
            {children}
        </div>
    );
}