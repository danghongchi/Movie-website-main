import { Routes, Route, useLocation } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/AdminPage';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import Movies from './pages/Movies';
import DetailMovies from './pages/DetailMovies';
import WatchMovie from './pages/WatchMovie';
import Search from './pages/Search';
import Profile from './pages/Profile';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    secondary: { main: '#f50057' },
  },
});

function App() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        minHeight: '100vh',
        bgcolor: '#181A20',
        width: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        background: 'linear-gradient(to bottom, #181A20 0%, #23242a 100%)' }}>
        {!isAdminPage && <Header />}
        {!isAdminPage && <Box sx={{ height: { xs: 56, md: 64 } }} />}
        <Box component="main" sx={{ flex: 1, width: '100%' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<DetailMovies />} />
            <Route path="/watch/:id" element={<WatchMovie />} />
            <Route path="/search" element={<Search />} />
            <Route path="/user/profile" element={<Profile />} />
          </Routes>
        </Box>
        {!isAdminPage && <Footer />}
      </Box>
      <ScrollToTop />
    </ThemeProvider>
  );
}

export default App;
