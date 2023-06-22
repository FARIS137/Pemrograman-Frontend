// Import Halaman Home
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import CreateMovie from "./pages/Movie/Create";
import PopularMovie from "./pages/Movie/Popular";
import NowPlayingMovie from "./pages/Movie/NowPlaying";
import TopRatedMovie from "./pages/Movie/TopRated";
import Layout from "./Layout";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";
import Detail from "./pages/Movie/Detail";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/create" element={<CreateMovie />} />
            <Route path="/movie/popular" element={<PopularMovie />} />
            <Route path="/movie/now" element={<NowPlayingMovie />} />
            <Route path="/movie/top" element={<TopRatedMovie />} />
            <Route path="/movie/:id" element={<Detail />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
