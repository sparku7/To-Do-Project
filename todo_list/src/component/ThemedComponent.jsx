import { useTheme } from '../pages/ThemeContext'

const ThemedComponent = () => {

   
    const {theme, toggleTheme} = useTheme();

    return(
        <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff' }}>
          <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}

export default ThemedComponent;