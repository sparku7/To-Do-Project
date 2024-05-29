//using this hook, we now gain access to consume the theme context (everything within the file)
//we passed theme and toggle theme functions to the ThemeContext.Provider
import { useTheme } from '../pages/ThemeContext'

const ThemedComponent = () => {

    //where does the toggle come from
    const {theme, toggleTheme} = useTheme();

    return(
        <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff' }}>
          <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}

export default ThemedComponent;