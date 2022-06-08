import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";
import { DARK } from "../../../constants/theme";
import useToggleTheme from "../../../hooks/useToggleTheme";


const DarkMode: React.FC = () => {
    const { colors, title } = useContext(ThemeContext);
    const { toggleTheme } = useToggleTheme();
  
    return (
        <div className="dark-mode">
            <Switch
                onChange={toggleTheme}
                checked={title === DARK}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={shade(0.15, colors.primary)}
                onColor={colors.secundary}
            />
        </div>
    );
  };

export default DarkMode;
