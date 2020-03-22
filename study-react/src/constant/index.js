import React from 'react';

const _contextParams = {
  light: {
    theme: 'light',
    size: 'small'
  },
  dark: {
    theme: 'dark',
    size: 'small'
  }
};

const _context = React.createContext(_contextParams.light);
_context.displayName = "MyThemeContext";

export default {
  context: _context,
  contextParams: _contextParams
};