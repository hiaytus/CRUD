import React, { useState, useEffect } from "react";
import Toggle from "react-toggle";
import '../CSS/index.css';

export const ThemeToggle = () => {
  let theme = JSON.parse(localStorage.getItem('theme') || false);
  const [isDark, setIsDark] = useState(theme);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDark]);
 
  return (
    <Toggle
      checked={isDark}
      onChange={({ target }) => {
        setIsDark(target.checked);
        localStorage.setItem('theme', target.checked);
      }}
      icons={{ checked: "🌙", unchecked: "🔆" }}
      aria-label="Dark mode toggle"
    />
  );
};