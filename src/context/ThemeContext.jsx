import { createContext, useContext, useState } from "react";
export const ThemeContext = createContext();

ThemeProvider.displayName='ThemeContext';

export default function ThemeProvider({children}){
    const[theme, setTheme] = useState();
    return(
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useThemeContext(){
    const{ theme, setTheme } = useContext(ThemeContext);


    return { theme, setTheme };
}