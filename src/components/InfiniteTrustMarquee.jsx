import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, MessageSquare, Unlock, Headset, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const signals = [
  { icon: <Building2 className="w-5 h-5 text-blue-600" />, text: "Built for Clinics" },
  { icon: <MessageSquare className="w-5 h-5 text-green-600" />, text: "WhatsApp-first system" },
  { icon: <Unlock className="w-5 h-5 text-amber-600" />, text: "No long-term lock-in" },
  { icon: <Headset className="w-5 h-5 text-purple-600" />, text: "Human support" },
  { icon: <ShieldCheck className="w-5 h-5 text-teal-600" />, text: "Data privacy respected" },
];

const InfiniteTrustMarquee = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // 1. Flatten the items and filter out any non-element nodes
    const items = gsap.utils.toArray(containerRef.current.children);
    
    // 2. The magic seamless loop helper
    const loop = horizontalLoop(items, {
      repeat: -1,
      speed: 1, 
      paddingRight: 0, // We control spacing via Tailwind gap/padding instead
    });

    // 3. Scroll Direction Sync
    ScrollTrigger.create({
      trigger: "body",
      onUpdate: (self) => {
        gsap.to(loop, {
          timeScale: self.direction === 1 ? 1 : -1,
          duration: 0.5,
          ease: "power2.out"
        });
      },
    });

    return () => {
      loop.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // Optimized Helper for identical spacing
  function horizontalLoop(items, config) {
    items = gsap.utils.toArray(items);
    config = config || {};
    let tl = gsap.timeline({
      repeat: config.repeat, 
      paused: config.paused, 
      defaults: {ease: "none"}, 
      onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)
    });
    
    let length = items.length,
        startX = items[0].offsetLeft,
        times = [],
        widths = [],
        xPercents = [],
        curIndex = 0,
        pixelsPerSecond = (config.speed || 1) * 100,
        totalWidth, curX, distanceToStart, distanceToLoop, item, i;
    
    gsap.set(items, { 
      xPercent: (i, target) => {
        let w = widths[i] = parseFloat(gsap.getProperty(target, "width", "px"));
        xPercents[i] = parseFloat(gsap.getProperty(target, "x", "px")) / w * 100 + gsap.getProperty(target, "xPercent");
        return xPercents[i];
      }
    });
    
    gsap.set(items, {x: 0});
    
    totalWidth = items[length-1].offsetLeft + xPercents[length-1] / 100 * widths[length-1] - startX + items[length-1].offsetWidth * gsap.getProperty(items[length-1], "scaleX") + (parseFloat(config.paddingRight) || 0);
    
    for (i = 0; i < length; i++) {
      item = items[i];
      curX = xPercents[i] / 100 * widths[i];
      distanceToStart = item.offsetLeft + curX - startX;
      distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
      
      tl.to(item, {xPercent: ((curX - distanceToLoop) / widths[i]) * 100, duration: distanceToLoop / pixelsPerSecond}, 0)
        .fromTo(item, {xPercent: ((curX - distanceToLoop + totalWidth) / widths[i]) * 100}, {xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
        .add("label" + i, distanceToStart / pixelsPerSecond);
      times[i] = distanceToStart / pixelsPerSecond;
    }
    return tl;
  }

  return (
    <div className="relative w-full overflow-hidden bg-white border-y border-gray-100 py-10">
      {/* Edge Masks */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* IMPORTANT: Use a flat list. 
          The 'gap-24' (6rem/96px) ensures the distance between EVERY item is exactly the same.
      */}
      <div 
        ref={containerRef} 
        className="flex items-center gap-24 whitespace-nowrap will-change-transform"
      >
        {[...signals, ...signals, ...signals, ...signals].map((signal, idx) => (
          <div key={idx} className="flex items-center gap-4 shrink-0">
            <div className="p-3 bg-slate-50 rounded-2xl shrink-0">
              {signal.icon}
            </div>
            <span className="text-sm font-bold text-slate-800 uppercase tracking-widest whitespace-nowrap">
              {signal.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteTrustMarquee;