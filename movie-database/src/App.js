// Import Halaman Home
import Home from "./pages/Home";
// Import Routes dan Route dari React Router.
import { Route, Routes } from "react-router-dom";
import CreateMovie from "./pages/Movie/Create";
import PopularMovie from "./pages/Movie/Popular";
import NowPlayingMovie from "./pages/Movie/NowPlaying";
import TopRatedMovie from "./pages/Movie/TopRated";
import Layout from "./Layout";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";
<<<<<<< HEAD
import Detail from "./pages/Movie/Detail";
=======
>>>>>>> 3e939cef5eb093677a5289482ab81722673aa120

function App() {
  /**
   * Tag div bisa diganti dengan tag <>.
   * Tag <> adalah React fragment
   */
  return (
    <>
      {/*
       * Setiap halaman dibungkus olah Layout.
       * Layout digunakan oleh setiap halaman yang dirender.
       */}
      <ThemeProvider theme={theme}>
      <Layout>    
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie/create" element={<CreateMovie />} />
          <Route path="/movie/popular" element={<PopularMovie />} />
          <Route path="/movie/now" element={<NowPlayingMovie />} />
          <Route path="/movie/top" element={<TopRatedMovie />} />
<<<<<<< HEAD
          <Route path="/movie/:id" element={<Detail/>} />

=======
>>>>>>> 3e939cef5eb093677a5289482ab81722673aa120
        </Routes>
      </Layout>
      </ThemeProvider> 
    </>
  );
}

export default App;
