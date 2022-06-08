import Header from "./sections/Header";
import Footer from "./sections/Footer";
import Main from "./sections/Main";
import ScrollUp from "./sections/UI/ScrollUp";
import GlobalStyle from "./global/GlobalStyle";
import { ThemeProvider } from "styled-components";

import useToggleTheme from "./hooks/useToggleTheme";

export default function App() {
  const { theme } = useToggleTheme();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header />
        <Main />
        <Footer />
        <ScrollUp />
      </div>
    </ThemeProvider>
  );
}
