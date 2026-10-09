'use client';

import React, { useEffect, useRef, useState } from 'react';
import '@bible-strong/avatar-react/styles.css';
import avatarDefinition from '@/lib/avatar.avatar.json';

interface SpeechBubbleTip {
  text: string;
}

const SECTION_TIPS: Record<string, string> = {
  hero: "Welcome to my portfolio! Take a look around.",
  about: "Learn more about my background & experience!",
  skills: "Check out my technical skill sets!",
  projects: "Explore some of the cool projects I've built!",
  contact: "Feel free to reach out and drop a message!"
};

export default function Mascot() {
  const containerRef = useRef<HTMLDivElement>(null);
  const controllerRef = useRef<any>(null);
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);
  const sleepTimerRef = useRef<NodeJS.Timeout | null>(null);

  const [currentTip, setCurrentTip] = useState<string>(SECTION_TIPS.hero);
  const [showTip, setShowTip] = useState<boolean>(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  // Helper to safely play animations on controller
  const triggerAnimation = (animName: string) => {
    if (prefersReducedMotion) return;
    if (controllerRef.current && typeof controllerRef.current.play === 'function') {
      try {
        controllerRef.current.play(animName);
      } catch (e) {
        console.error('Mascot animation error:', e);
      }
    }
  };

  // Setup avatar mount
  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handleMotionChange);

    // Dynamically import createAvatar to avoid SSR issues
    let isMounted = true;
    import('@bible-strong/avatar-react').then(({ createAvatar }) => {
      if (!isMounted || !containerRef.current) return;

      containerRef.current.innerHTML = '';
      try {
        const controller = createAvatar(avatarDefinition as any, containerRef.current, {
          width: 120,
          height: 120,
          autoplay: !mediaQuery.matches,
          initialAnimation: 'waking'
        });

        controllerRef.current = controller;

        // Sequence: "waking" then switch to "idle" after 2s
        if (!mediaQuery.matches) {
          triggerAnimation('waking');
          setTimeout(() => {
            triggerAnimation('idle');
          }, 2000);
        }
      } catch (err) {
        console.error('Failed to create avatar:', err);
      }
    });

    return () => {
      isMounted = false;
      mediaQuery.removeEventListener('change', handleMotionChange);
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  // Handle inactivity timer (30s -> drowsy -> sleeping)
  useEffect(() => {
    if (prefersReducedMotion) return;

    const resetInactivityTimer = () => {
      if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
      if (sleepTimerRef.current) clearTimeout(sleepTimerRef.current);

      // If waking back up or active, return to idle
      triggerAnimation('idle');

      inactivityTimerRef.current = setTimeout(() => {
        triggerAnimation('drowsy');
        sleepTimerRef.current = setTimeout(() => {
          triggerAnimation('sleeping');
        }, 5000);
      }, 30000);
    };

    resetInactivityTimer();

    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart', 'click'];
    activityEvents.forEach((evt) => window.addEventListener(evt, resetInactivityTimer));

    return () => {
      if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
      if (sleepTimerRef.current) clearTimeout(sleepTimerRef.current);
      activityEvents.forEach((evt) => window.removeEventListener(evt, resetInactivityTimer));
    };
  }, [prefersReducedMotion]);

  // Listen for scroll section changes for speech bubble tips
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      let currentSection = 'hero';

      sections.forEach((secId) => {
        const el = document.getElementById(secId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
            currentSection = secId;
          }
        }
      });

      if (SECTION_TIPS[currentSection] && SECTION_TIPS[currentSection] !== currentTip) {
        setCurrentTip(SECTION_TIPS[currentSection]);
        setShowTip(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentTip]);

  // Global listeners for main buttons hover and custom form events
  useEffect(() => {
    const handleBtnMouseEnter = () => triggerAnimation('excited');
    const handleFormSubmit = () => triggerAnimation('celebrate');
    const handleFormError = () => triggerAnimation('confused');

    // Attach to main buttons / CTAs
    const buttons = document.querySelectorAll('button, a[href="#contact"], .mascot-trigger-excited');
    buttons.forEach((btn) => {
      btn.addEventListener('mouseenter', handleBtnMouseEnter);
      btn.addEventListener('touchstart', handleBtnMouseEnter, { passive: true });
    });

    window.addEventListener('mascot-form-submit', handleFormSubmit);
    window.addEventListener('mascot-form-error', handleFormError);

    return () => {
      buttons.forEach((btn) => {
        btn.removeEventListener('mouseenter', handleBtnMouseEnter);
        btn.removeEventListener('touchstart', handleBtnMouseEnter);
      });
      window.removeEventListener('mascot-form-submit', handleFormSubmit);
      window.removeEventListener('mascot-form-error', handleFormError);
    };
  }, [prefersReducedMotion]);

  // Mascot click reaction
  const handleMascotClick = () => {
    triggerAnimation('laughing');
  };

  return (
    <div
      className="fixed bottom-4 right-4 z-50 flex items-end gap-2 pointer-events-none select-none"
      style={{ isolation: 'isolate' }}
    >
      {/* Speech Bubble */}
      {showTip && currentTip && (
        <div className="relative pointer-events-auto max-w-[200px] bg-slate-900/90 text-slate-100 text-xs px-3 py-2 rounded-xl border border-cyan-500/30 shadow-lg backdrop-blur-md animate-fade-in mb-3">
          <p>{currentTip}</p>
          <button
            onClick={() => setShowTip(false)}
            className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-slate-800 text-slate-400 hover:text-white rounded-full flex items-center justify-center text-[10px]"
            title="Close tip"
          >
            ×
          </button>
          {/* Bubble tail */}
          <div className="absolute -right-1.5 bottom-3 w-3 h-3 bg-slate-900/90 border-r border-b border-cyan-500/30 rotate-45" />
        </div>
      )}

      {/* Mascot Avatar Container */}
      <div
        className="pointer-events-auto cursor-pointer transition-transform hover:scale-105 active:scale-95"
        style={{ width: '120px', height: '120px' }}
        onClick={handleMascotClick}
        title="Click me!"
        role="button"
        tabIndex={0}
      >
        <div ref={containerRef} className="w-[120px] h-[120px]" />
      </div>
    </div>
  );
}
