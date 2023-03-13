import React, {useState} from 'react';
import './App.css';
import MainList from "./MainList";
import './darkMode.css';
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    if (theme.palette.mode === 'dark') {
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={'App'}>
        <MainList />
        <button onClick={toggleTheme}>Toggle Theme</button>
        <CssBaseline />
      </div>
    </ThemeProvider>
  );
}

export default App;
