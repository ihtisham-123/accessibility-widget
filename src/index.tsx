import React from 'react';
import ReactDOM from 'react-dom';
import AccessibilityWidget from './components/AccessibilityWidget';
import './components/AccessibilityWidget.css';

interface Config {
  autoInit?: boolean;
}

function initialize(config: Config = {}) {
  // Create container if it doesn't exist
  let container = document.getElementById('accessibility-widget-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'accessibility-widget-container';
    document.body.appendChild(container);
  }

  ReactDOM.render(
    <AccessibilityWidget />,
    container
  );
}

// Auto-initialize when the script tag is present
document.addEventListener('DOMContentLoaded', () => {
  const script = document.querySelector('script[data-accessibility-widget]');
  if (script && script.getAttribute('data-auto-init') !== 'false') {
    initialize({
      autoInit: script.getAttribute('data-auto-init') !== 'false'
    });
  }
});

// Export initialize function for manual initialization
(window as any).AccessibilityWidget = { initialize };

export default initialize;