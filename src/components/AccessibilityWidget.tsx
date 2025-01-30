// // Components/AccessibilityWidget.js
// import React, { useState, useEffect ,useRef} from 'react';
// import { MdAccessibility, MdZoomIn,MdMotionPhotosOff,
//   MdTouchApp, MdZoomOut, MdHighlight, MdKeyboard } from 'react-icons/md';
// import './AccessibilityWidget.css'; // Create this CSS file

// const AccessibilityWidget = () => {
//   const [fontSize, setFontSize] = useState(16);
//   const [highContrast, setHighContrast] = useState(false);
//   const [dyslexiaFriendly, setDyslexiaFriendly] = useState(false);
//   const [motionReduction, setMotionReduction] = useState(false);
//   const [keyboardNavigation, setKeyboardNavigation] = useState(false);
//   const [showMenu, setShowMenu] = useState(false);
//   const menuRef = useRef<HTMLDivElement>(null);

//   // Add motion reduction class to body
//   useEffect(() => {
//     if (motionReduction) {
//       document.body.classList.add('reduce-motion');
//     } else {
//       document.body.classList.remove('reduce-motion');
//     }
//   }, [motionReduction]);

//   // Keyboard navigation enhancements
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (keyboardNavigation && e.key === 'Tab') {
//         document.body.classList.add('keyboard-navigation');
//       }
//     };

//     const handleMouseDown = () => {
//       document.body.classList.remove('keyboard-navigation');
//     };

//     document.addEventListener('keydown', handleKeyDown);
//     document.addEventListener('mousedown', handleMouseDown);

//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//       document.removeEventListener('mousedown', handleMouseDown);
//     };
//   }, [keyboardNavigation]);
  
//   useEffect(() => {
//     if (showMenu && menuRef.current) {
//       const focusableElements = menuRef.current.querySelectorAll('button');
//       if (focusableElements.length > 0) {
//         focusableElements[0].focus();
//       }
//     }
//   }, [showMenu]);

//   // Apply accessibility settings to the whole document
//   useEffect(() => {
//     document.documentElement.style.fontSize = `${fontSize}px`;
    
//     if (highContrast) {
//       document.body.classList.add('high-contrast');
//     } else {
//       document.body.classList.remove('high-contrast');
//     }

//     if (dyslexiaFriendly) {
//       document.body.classList.add('dyslexia-friendly');
//     } else {
//       document.body.classList.remove('dyslexia-friendly');
//     }
//   }, [fontSize, highContrast, dyslexiaFriendly]);

//   // Save settings to localStorage
//   useEffect(() => {
//     localStorage.setItem('accessibilitySettings', JSON.stringify({
//       fontSize,
//       highContrast,
//       dyslexiaFriendly,
//       motionReduction,
//       keyboardNavigation
//     }));
//   }, [fontSize, highContrast, dyslexiaFriendly, motionReduction, keyboardNavigation]);
//   // Load settings from localStorage
//   useEffect(() => {
//     const savedSettings = localStorage.getItem('accessibilitySettings');
//     if (savedSettings) {
//       const { fontSize, highContrast, dyslexiaFriendly } = JSON.parse(savedSettings);
//       setFontSize(fontSize);
//       setHighContrast(highContrast);
//       setDyslexiaFriendly(dyslexiaFriendly); 
//        const settings = JSON.parse(savedSettings);
//             setMotionReduction(settings.motionReduction || false);
//             setKeyboardNavigation(settings.keyboardNavigation || false);
//     }
//   }, []);


//   const resetSettings = () => {
//     setFontSize(16);
//     setHighContrast(false);
//     setDyslexiaFriendly(false);
//     setMotionReduction(false);
//     setKeyboardNavigation(false);
//     document.body.classList.remove(
//       'high-contrast',
//       'dyslexia-friendly',
//       'reduce-motion'
//     );
//   };

//   return (
//     <div className="accessibility-widget">
//       <button 
//         className="widget-toggle"
//         onClick={() => setShowMenu(!showMenu)}
//         aria-label="Accessibility settings"
//         aria-expanded={showMenu}
//       >
//         <MdAccessibility size={24} />
//       </button>

//       {showMenu && (
//         <div className="widget-menu text-black">
//           <div className="menu-section">
//             <h3>Accessibility Tools</h3>
            
//             <div className="tool-group">
//               <button onClick={() => setFontSize(s => Math.min(24, s + 2))}>
//                 <MdZoomIn /> Increase Text
//               </button>
//               <button onClick={() => setFontSize(s => Math.max(12, s - 2))}>
//                 <MdZoomOut /> Decrease Text
//               </button>
//             </div>

//             <div className="tool-group">
//               <button 
//                 onClick={() => setHighContrast(!highContrast)}
//                 aria-pressed={highContrast}
//               >
//                 <MdHighlight /> High Contrast
//               </button>
//             </div>

//             <div className="tool-group">
//               <button 
//                 onClick={() => setDyslexiaFriendly(!dyslexiaFriendly)}
//                 aria-pressed={dyslexiaFriendly}
//               >
//                 <MdKeyboard /> Dyslexia Friendly
//               </button>
//             </div>
//             <div className="tool-group">
//               <button 
//                 onClick={() => setMotionReduction(!motionReduction)}
//                 aria-pressed={motionReduction}
//               >
//                 <MdMotionPhotosOff /> Reduce Motion
//               </button>
//             </div>

//             {/* Keyboard Navigation Toggle */}
//             <div className="tool-group">
//               <button 
//                 onClick={() => setKeyboardNavigation(!keyboardNavigation)}
//                 aria-pressed={keyboardNavigation}
//               >
//                 <MdTouchApp /> Keyboard Navigation
//               </button>
//             </div>


//             <button className="reset-button" onClick={resetSettings}>
//               Reset Settings
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AccessibilityWidget;


import React, { useState, useEffect, useRef } from 'react';
import { 
  MdAccessibility, 
  MdZoomIn, 
  MdZoomOut, 
  MdHighlight, 
  MdKeyboard,
  MdMotionPhotosOff,
  MdTouchApp,
  MdVolumeUp,
  MdVolumeOff,  MdFormatSize,
  MdMouse
} from 'react-icons/md';
import './AccessibilityWidget.css';


interface NavigableElement extends Element {
  textContent: string;
  value?: string;
  placeholder?: string;
  type?: string;
}

const AccessibilityWidget = ({theme }:any) => {
  // State management
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);
  const [dyslexiaFriendly, setDyslexiaFriendly] = useState(false);
  const [motionReduction, setMotionReduction] = useState(false);
  const [keyboardNavActive, setKeyboardNavActive] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [activeElementIndex, setActiveElementIndex] = useState(-1);
  const [navigableElements, setNavigableElements] = useState<NavigableElement[]>([]);
  const [showMenu, setShowMenu] = useState(false);
  const [speechRate, setSpeechRate] = useState(1);
  const menuRef = useRef<HTMLDivElement>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const [textSpacing, setTextSpacing] = useState({
    lineHeight: 1.5,
    letterSpacing: 0,
    wordSpacing: 0
  });
  const [cursorStyle, setCursorStyle] = useState('default');
  
  
  // Load saved settings
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibilitySettings');
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
      setFontSize(settings.fontSize || 16);
      setHighContrast(settings.highContrast || false);
      setDyslexiaFriendly(settings.dyslexiaFriendly || false);
      setMotionReduction(settings.motionReduction || false);
      setKeyboardNavActive(settings.keyboardNavActive || false);
      setSpeechRate(settings.speechRate || 1);
    }
  }, []);

  // Add to useEffect for applying settings
  useEffect(() => {
    // Text spacing
    document.documentElement.style.setProperty('--line-height', textSpacing.lineHeight.toString());
    document.documentElement.style.setProperty('--letter-spacing', `${textSpacing.letterSpacing}px`);
    document.documentElement.style.setProperty('--word-spacing', `${textSpacing.wordSpacing}px`);
    
    // Cursor style
    document.body.className = document.body.className.replace(/\bcursor-\S+/g, '');
    document.body.classList.add(`cursor-${cursorStyle}`);
  }, [textSpacing, cursorStyle]);
  
  
  // Initialize navigable elements
  useEffect(() => {
    const elements = document.querySelectorAll<NavigableElement>(
      'p, h1, h2, h3, h4, h5, h6, a, button, input[type="text"], textarea'
    );
    setNavigableElements(Array.from(elements));
  }, []);

  // Combined settings effects
  useEffect(() => {
    // Apply text scaling
    document.documentElement.style.fontSize = `${fontSize}px`;
    
    // Apply contrast mode
    document.body.classList.toggle('high-contrast', highContrast);
    
    // Apply dyslexia-friendly styling
    document.body.classList.toggle('dyslexia-friendly', dyslexiaFriendly);
    
    // Apply motion reduction
    document.body.classList.toggle('reduce-motion', motionReduction);
    
    // Save settings
    localStorage.setItem('accessibilitySettings', JSON.stringify({
      fontSize,
      highContrast,
      dyslexiaFriendly,
      motionReduction,
      keyboardNavActive,
      speechRate,
      textSpacing,
      cursorStyle
    }));
  }, [fontSize, highContrast, dyslexiaFriendly, motionReduction, keyboardNavActive, speechRate,textSpacing, cursorStyle]);


  // Keyboard navigation handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!keyboardNavActive) return;

      switch (e.key) {
        case 'ArrowDown':
        case 'ArrowRight':
          e.preventDefault();
          setActiveElementIndex(prev => Math.min(prev + 1, navigableElements.length - 1));
          break;
        case 'ArrowUp':
        case 'ArrowLeft':
          e.preventDefault();
          setActiveElementIndex(prev => Math.max(prev - 1, 0));
          break;
        case 'Enter':
        case ' ':
          e.preventDefault();
          if (activeElementIndex >= 0) {
            readElement(navigableElements[activeElementIndex]);
          }
          break;
        case 'Escape':
          stopSpeaking();
          setKeyboardNavActive(false);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [keyboardNavActive, activeElementIndex, navigableElements]);

  // Element focus management
  useEffect(() => {
    if (activeElementIndex >= 0 && navigableElements[activeElementIndex]) {
      const element = navigableElements[activeElementIndex];
      element.scrollIntoView({ behavior: motionReduction ? 'auto' : 'smooth', block: 'center' });
      element.classList.add('navigation-focus');
    }

    return () => {
      navigableElements.forEach(element => 
        element.classList.remove('navigation-focus')
      );
    };
  }, [activeElementIndex, motionReduction, navigableElements]);

  // Speech functions
  const readElement = (element: NavigableElement) => {
    stopSpeaking();
    
    let text = element.textContent || '';
    if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
      text = element.placeholder || element.value || '';
    }

    utteranceRef.current = new SpeechSynthesisUtterance(text);
    utteranceRef.current.rate = speechRate;
    utteranceRef.current.onend = () => setIsSpeaking(false);
    utteranceRef.current.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utteranceRef.current);
    setIsSpeaking(true);
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  // Reset all settings
  const resetSettings = () => {
    setFontSize(16);
    setHighContrast(false);
    setDyslexiaFriendly(false);
    setMotionReduction(false);
    setKeyboardNavActive(false);
    setSpeechRate(1);
    stopSpeaking();
    document.body.classList.remove(
      'high-contrast',
      'dyslexia-friendly',
      'reduce-motion'
    ); setTextSpacing({ lineHeight: 1.5, letterSpacing: 0, wordSpacing: 0 });
    setCursorStyle('default');
  };

  return (
   
      <div className="accessibility-widget fixed bottom-20 z-1000 right-20 text-black">
        <button 
          className="widget-toggle fixed right-4 bottom-4"
          onClick={() => setShowMenu(!showMenu)}
          aria-label="Accessibility settings"
          aria-expanded={showMenu}
        >
          <MdAccessibility size={24}  />
        </button>
  
        {showMenu && (
          <div 
            className="widget-menu fixed right-4 top-16 bg-white rounded-lg shadow-lg p-4 border border-gray-200 max-h-[90vh] overflow-y-auto w-80" 
            ref={menuRef} 
            role="dialog" 
            aria-modal="true"
          >
            <div className="menu-section space-y-4">
              <h3 className="text-lg font-semibold mb-4">Accessibility Tools</h3>
  
            <div className="tool-group">
              <button onClick={() => setFontSize(s => Math.min(24, s + 2))}>
                <MdZoomIn /> Increase Text
              </button>
              <button onClick={() => setFontSize(s => Math.max(12, s - 2))}>
                <MdZoomOut /> Decrease Text
              </button>
            </div>

            <div className="tool-group">
              <button 
                onClick={() => setHighContrast(!highContrast)}
                aria-pressed={highContrast}
              >
                <MdHighlight /> High Contrast
              </button>
            </div>

            <div className="tool-group">
              <button 
                onClick={() => setDyslexiaFriendly(!dyslexiaFriendly)}
                aria-pressed={dyslexiaFriendly}
              >
                <MdKeyboard /> Dyslexia Friendly
              </button>
            </div>

            <div className="tool-group">
              <button 
                onClick={() => setMotionReduction(!motionReduction)}
                aria-pressed={motionReduction}
              >
                <MdMotionPhotosOff /> Reduce Motion
              </button>
            </div>

            <div className="tool-group">
              <button 
                onClick={() => setKeyboardNavActive(!keyboardNavActive)}
                aria-pressed={keyboardNavActive}
              >
                <MdTouchApp /> Keyboard Nav
              </button>
            </div>

            <div className="tool-group">
              <button 
                onClick={isSpeaking ? stopSpeaking : () => navigableElements[activeElementIndex] && readElement(navigableElements[activeElementIndex])}
                aria-pressed={isSpeaking}
              >
                {isSpeaking ? <MdVolumeOff /> : <MdVolumeUp />} 
                {isSpeaking ? 'Stop Reading' : 'Start Reading'}
              </button>
            </div>

            <div className="speech-rate-control">
              <label>Speech Rate:</label>
              <input
                type="range"
                min="0.5"
                max="2"
                step="0.1"
                value={speechRate}
                onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
              />
              <span>{speechRate.toFixed(1)}x</span>
            </div> <div className="tool-group">
              <h4><MdFormatSize /> Text Spacing</h4>
              <div className="spacing-control">
                <label>Line Height</label>
                <input
                  type="range"
                  min="1"
                  max="3"
                  step="0.1"
                  value={textSpacing.lineHeight}
                  onChange={e => setTextSpacing(prev => ({
                    ...prev,
                    lineHeight: parseFloat(e.target.value)
                  }))}
                />
                <span>{textSpacing.lineHeight}x</span>
              </div>

              <div className="spacing-control">
                <label>Letter Spacing</label>
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="0.5"
                  value={textSpacing.letterSpacing}
                  onChange={e => setTextSpacing(prev => ({
                    ...prev,
                    letterSpacing: parseFloat(e.target.value)
                  }))}
                />
                <span>{textSpacing.letterSpacing}px</span>
              </div>

              <div className="spacing-control">
                <label>Word Spacing</label>
                <input
                  type="range"
                  min="0"
                  max="20"
                  step="1"
                  value={textSpacing.wordSpacing}
                  onChange={e => setTextSpacing(prev => ({
                    ...prev,
                    wordSpacing: parseFloat(e.target.value)
                  }))}
                />
                <span>{textSpacing.wordSpacing}px</span>
              </div>
            </div>

            {/* Custom Cursor Controls */}
            <div className="tool-group">
              <h4><MdMouse /> Cursor Style</h4>
              <div className="cursor-grid">
                <button 
                  onClick={() => setCursorStyle('default')}
                  className={cursorStyle === 'default' ? 'active' : ''}
                  aria-pressed={cursorStyle === 'default'}
                >
                  Default
                </button>
                <button 
                  onClick={() => setCursorStyle('large')}
                  className={cursorStyle === 'large' ? 'active' : ''}
                  aria-pressed={cursorStyle === 'large'}
                >
                  Large
                </button>
                <button 
                  onClick={() => setCursorStyle('high-contrast')}
                  className={cursorStyle === 'high-contrast' ? 'active' : ''}
                  aria-pressed={cursorStyle === 'high-contrast'}
                >
                  High Contrast
                </button>
                <button 
                  onClick={() => setCursorStyle('reading')}
                  className={cursorStyle === 'reading' ? 'active' : ''}
                  aria-pressed={cursorStyle === 'reading'}
                >
                  Reading
                </button>
              </div>
            </div>

            <button className="reset-button" onClick={resetSettings}>
              Reset All Settings
            </button>
            </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityWidget;