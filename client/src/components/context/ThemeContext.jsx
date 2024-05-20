/* 
  * Ce fichier ThemeContext contiendra :
    TODO 1 -> Un contexte (createContext)
    TODO 2 -> Une ou des variables d'état / fonctions partageables dans toute l'application
    TODO 3 -> Exporter un "Provider", un wrapper qui va contenir et fournir nos variables / fonctions
*/

import { useState } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);

  function toggleTheme() {
    setTheme(!theme);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
}