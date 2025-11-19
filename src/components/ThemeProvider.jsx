import React, { createContext, useContext } from 'react'

// Disaster Forge theme tokens — magma orange, electric fuchsia, neon cyan, ink black
const ThemeContext = createContext({
  colors: {
    bg: '#0A0A0B',
    surface: '#141417',
    border: 'rgba(255,255,255,0.08)',
    text: '#FFFFFF',
    sub: '#A9B0C0',
    magma: '#FF4D2E',
    fuchsia: '#FF2BD1',
    neon: '#00F0FF',
  },
})

export const useTheme = () => useContext(ThemeContext)

export default function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={{
      colors: {
        bg: '#0A0A0B',
        surface: '#141417',
        border: 'rgba(255,255,255,0.08)',
        text: '#FFFFFF',
        sub: '#A9B0C0',
        magma: '#FF4D2E',
        fuchsia: '#FF2BD1',
        neon: '#00F0FF',
      }
    }}>
      {children}
    </ThemeContext.Provider>
  )
}
