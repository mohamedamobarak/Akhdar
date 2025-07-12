# GSAP Animation System Guide

This guide explains how to use the GSAP animation system that converts Framer Motion-style variants to GSAP animations with ScrollTrigger.

## Core Animation Function

```javascript
import { gsapAnimation } from '@/lib/animations';

// Basic usage
gsapAnimation(target, fromProps, toProps);
```

## Available Animation Variants

### 1. Slide Animations
```javascript
import { slideIn } from '@/lib/animations';

// Slide from different directions
const leftSlide = slideIn('left', 0, 1);    // direction, delay, duration
const rightSlide = slideIn('right', 0.2, 1.2);
const upSlide = slideIn('up', 0, 0.8);
const downSlide = slideIn('down', 0.5, 1);
```

### 2. Text Animations
```javascript
import { textVariant } from '@/lib/animations';

// Text animation with delay
const textAnim = textVariant(0.3); // delay in seconds
```

### 3. Header Animations
```javascript
import { headerVariants } from '@/lib/animations';

// H1 animation from center with scale
const h1Anim = headerVariants.h1FromSides();

// Content animation from bottom
const contentAnim = headerVariants.contentFromBottom();
```

## Using with React Components

### Basic Example with useGSAP
```javascript
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const AnimatedComponent = () => {
  const containerRef = useRef(null);
  const elementRef = useRef(null);

  useGSAP(() => {
    // Set initial state
    gsap.set(elementRef.current, { y: 100, opacity: 0 });
    
    // Animate
    gsap.to(elementRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <div ref={elementRef}>Animated content</div>
    </div>
  );
};
```

### Header Animation Example (as implemented in HeroSection)
```javascript
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const HeroSection = ({ heading, paragraph }) => {
  const containerRef = useRef(null);
  const h1Ref = useRef(null);
  const paragraphRef = useRef(null);
  const buttonsRef = useRef(null);

  useGSAP(() => {
    // Split H1 text for left/right animation
    const h1Element = h1Ref.current;
    const words = h1Element.textContent.split(' ');
    
    h1Element.innerHTML = '';
    const wordSpans = words.map((word) => {
      const span = document.createElement('span');
      span.textContent = word + ' ';
      span.style.display = 'inline-block';
      h1Element.appendChild(span);
      return span;
    });

    const leftWords = wordSpans.filter((_, index) => index % 2 === 0);
    const rightWords = wordSpans.filter((_, index) => index % 2 === 1);

    // Animation timeline
    const timeline = gsap.timeline();
    
    // Set initial states
    gsap.set(leftWords, { x: -100, opacity: 0 });
    gsap.set(rightWords, { x: 100, opacity: 0 });
    gsap.set(paragraphRef.current, { y: 100, opacity: 0 });
    gsap.set(buttonsRef.current.children, { y: 100, opacity: 0 });

    // Sequential animations
    timeline
      .to(leftWords, { x: 0, opacity: 1, duration: 1.2, stagger: 0.1 })
      .to(rightWords, { x: 0, opacity: 1, duration: 1.2, stagger: 0.1 }, '<')
      .to(paragraphRef.current, { y: 0, opacity: 1, duration: 0.8 }, '+=0.3')
      .to(buttonsRef.current.children, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 }, '+=0.2');
      
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <h1 ref={h1Ref}>{heading}</h1>
      <p ref={paragraphRef}>{paragraph}</p>
      <div ref={buttonsRef}>
        <button>Button 1</button>
        <button>Button 2</button>
      </div>
    </div>
  );
};
```

## Animation Patterns

### 1. Sequential Animations
Use `timeline.to()` with position parameters:
- `'<'` - Start at the same time as previous
- `'+=0.3'` - Start 0.3 seconds after previous completes
- `'-=0.2'` - Start 0.2 seconds before previous completes

### 2. Stagger Animations
```javascript
gsap.to(elements, {
  y: 0,
  opacity: 1,
  duration: 1,
  stagger: 0.1, // 0.1 second delay between each element
});
```

### 3. ScrollTrigger Integration
The `gsapAnimation` function automatically includes ScrollTrigger:
```javascript
gsapAnimation(target, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
```

## Best Practices

1. **Use useGSAP hook** for React components
2. **Set initial states** with `gsap.set()` before animating
3. **Use refs** to target specific elements
4. **Scope animations** to container refs for better performance
5. **Clean up** animations automatically handled by useGSAP

## Common Easing Options

- `'power2.out'` - Smooth deceleration
- `'power3.out'` - Strong deceleration  
- `'back.out(1.7)'` - Bounce effect
- `'elastic.out(1, 0.3)'` - Elastic effect
- `'sine.inOut'` - Smooth acceleration and deceleration
