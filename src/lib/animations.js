import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

export const gsapAnimation = (target, animationFromProps, animationToProps, options = {}) => {
    // Default ScrollTrigger configuration
    const defaultScrollTrigger = {
        trigger: target,
        start: 'top 80%',
        toggleActions: 'play none none none',
        once: true,
    };

    // Merge custom ScrollTrigger options
    const scrollTriggerConfig = {
        ...defaultScrollTrigger,
        ...options.scrollTrigger
    };

    // Enhanced animation properties with defaults
    const enhancedToProps = {
        duration: 1,
        ease: 'power2.out',
        ...animationToProps,
        scrollTrigger: options.disableScrollTrigger ? undefined : scrollTriggerConfig
    };

    // Support for stagger animations
    if (options.stagger && (target.length > 1 || target instanceof NodeList)) {
        return gsap.fromTo(target, {
            ...animationFromProps
        }, {
            ...enhancedToProps,
            stagger: typeof options.stagger === 'number' ? options.stagger : {
                amount: 0.5,
                ease: 'power2.inOut',
                ...options.stagger
            }
        });
    }

    // Standard single element animation
    return gsap.fromTo(target, {
        ...animationFromProps
    }, {
        ...enhancedToProps
    });
}



// Enhanced animation utilities
export const animateWithStagger = (targets, fromProps, toProps, staggerAmount = 0.1) => {
    return gsapAnimation(targets, fromProps, toProps, {
        stagger: staggerAmount
    });
};

export const animateOnScroll = (target, fromProps, toProps, scrollOptions = {}) => {
    return gsapAnimation(target, fromProps, toProps, {
        scrollTrigger: {
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
            ...scrollOptions
        }
    });
};

export const animateImmediate = (target, fromProps, toProps) => {
    return gsapAnimation(target, fromProps, toProps, {
        disableScrollTrigger: true
    });
};

export const animateWithDelay = (target, fromProps, toProps, delay = 0.5) => {
    return gsapAnimation(target, fromProps, toProps, {
        disableScrollTrigger: true,
        ...toProps,
        delay
    });
};



// Quick animation presets using the enhanced gsapAnimation
export const quickAnimations = {
    // Fade animations
    fadeIn: (target, options = {}) => gsapAnimation(
        target,
        { opacity: 0 },
        { opacity: 1, duration: 1, ...options }
    ),

    fadeOut: (target, options = {}) => gsapAnimation(
        target,
        { opacity: 1 },
        { opacity: 0, duration: 1, ...options },
        { disableScrollTrigger: true }
    ),

    // Slide animations
    slideInLeft: (target, options = {}) => gsapAnimation(
        target,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power2.out', ...options }
    ),

    slideInRight: (target, options = {}) => gsapAnimation(
        target,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power2.out', ...options }
    ),

    slideInUp: (target, options = {}) => gsapAnimation(
        target,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power2.out', ...options }
    ),

    slideInDown: (target, options = {}) => gsapAnimation(
        target,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power2.out', ...options }
    ),

    // Scale animations
    scaleIn: (target, options = {}) => gsapAnimation(
        target,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: 'back.out(1.7)', ...options }
    ),

    scaleOut: (target, options = {}) => gsapAnimation(
        target,
        { scale: 1, opacity: 1 },
        { scale: 0, opacity: 0, duration: 0.5, ease: 'back.in(1.7)', ...options },
        { disableScrollTrigger: true }
    ),

    // Rotation animations
    rotateIn: (target, options = {}) => gsapAnimation(
        target,
        { rotation: -180, opacity: 0 },
        { rotation: 0, opacity: 1, duration: 1.5, ease: 'back.out(1.7)', ...options }
    ),

    // Bounce animation
    bounceIn: (target, options = {}) => gsapAnimation(
        target,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: 'bounce.out', ...options }
    ),
};