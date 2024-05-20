import "../styles/toggle-theme.css";
import useTheme from "./hooks/useTheme";

function ToggleTheme() {
  const { toggleTheme } = useTheme();

  return (
    <label className="toggle">
      <input className="toggle-checkbox" type="checkbox" onClick={toggleTheme} />
      <div className="toggle-switch" />
    </label>
  );
}

export default ToggleTheme;