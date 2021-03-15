import { useState } from 'react';
import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import GlobalStyle from './styles/global';

function App() {
  const [theme, setTheme] = useState("dark");

  function changeTheme() {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }

  return (
    <>
     <ThemeProvider theme={theme === "dark" ? dark : light}>
      <GlobalStyle />
      <Home changeTheme={changeTheme} />
     </ThemeProvider>
    </>
  );
}

export default App;
