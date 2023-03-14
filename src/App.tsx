import React, {useState} from 'react';
import './App.css';
import MainList from "./MainList/MainList";
import './darkMode.css';
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link, useParams
} from "react-router-dom";
import DetailStrain from "./DetailStrain/DetailStrain";

const App = () => {
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
  const {id} = useParams()

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
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route path="/details/:detailUrl" element={<DetailStrain />}>
              </Route>
              <Route path="/users">
              </Route>
              <Route path="/" element={<MainList />}>
              </Route>
            </Routes>
          </div>
        </Router>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <CssBaseline />
      </div>
    </ThemeProvider>
  );
}

export default App;
