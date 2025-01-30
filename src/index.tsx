import React from 'react';
import ReactDOM from 'react-dom';
import AccessibilityWidget from './components/AccessibilityWidget';
import './components/AccessibilityWidget.css';

interface Config {
  position?: 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left';
  theme?: 'light' | 'dark';
}

function initialize(config: Config = {}) {
  const container = document.createElement('div');
  container.id = 'accessibility-widget-container';
  document.body.appendChild(container);

ReactDOM.render(
    <AccessibilityWidget position={config.position || 'bottom-right'} theme={config.theme || 'light'} />,
    container
);
}

document.addEventListener('DOMContentLoaded', () => {
  const script = document.querySelector('script[data-accessibility-widget]');
  if (script && script.getAttribute('data-auto-init') !== 'false') {
    initialize({
      position: script?.getAttribute('data-position') as Config['position'] || 'bottom-right',
      theme: script?.getAttribute('data-theme') as Config['theme'] || 'light'
    });
  }
});

(window as any).AccessibilityWidget = { initialize };