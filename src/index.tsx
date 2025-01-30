import React from 'react';
import ReactDOM from 'react-dom';
import AccessibilityWidget from './components/AccessibilityWidget';
import './components/AccessibilityWidget.css';

interface Config {
  theme?: 'light' | 'dark';
}

function initialize(config: Config = {}) {
  const container = document.createElement('div');
  container.id = 'accessibility-widget-container';
  document.body.appendChild(container);

  ReactDOM.render(
    <AccessibilityWidget theme={config.theme || 'light'} />,
    container
  );
}

// Auto-initialize when the script tag is present
document.addEventListener('DOMContentLoaded', () => {
  const script = document.querySelector('script[data-accessibility-widget]');
  if (script && script.getAttribute('data-auto-init') !== 'false') {
    initialize({
      theme: script?.getAttribute('data-theme') as Config['theme'] || 'light'
    });
  }
});

// Export initialize function for manual initialization
(window as any).AccessibilityWidget = { initialize };