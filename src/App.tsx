import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import { AuthForm } from "./components/AuthForm/AuthForm"
import { queryClient } from "./api/queryClient"
import { QueryClientProvider } from "@tanstack/react-query"
import { AuthFormOpenProvider } from "./providers/AuthFormOpenProvider"
import { Provider } from "react-redux"
import { store } from "./store"
import { useUserQuery } from "./hooks/useUserProfileQuery"
import { useFavoritesQuery } from "./hooks/useFavoritesMoviesQuery"
import 'normalize.css'
import './styles/global.scss'
import { lazy, Suspense } from "react"
import { Loader } from "./components/Loader/Loader"
import { AnimatePresence, motion } from "framer-motion"

function AppProviders() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AuthFormOpenProvider>
          <App />
        </AuthFormOpenProvider>
      </Provider>
    </QueryClientProvider>
  )
}

// Переносим AppContent внутрь BrowserRouter
function AppContent() {
  const location = useLocation();
  const LazyMainPage = lazy(() => (import("./pages/MainPage/MainPage")));
  const LazyGenresPage = lazy(() => (import("./pages/GenresPage/GenresPage")));
  const LazyGenreMoviesPage = lazy(() => (import("./pages/GenreMoviesPage/GenreMoviesPage")));
  const LazyMoviePage = lazy(() => (import("./pages/MoviePage/MoviePage")));
  const LazyProfilePage = lazy(() => (import("./pages/ProfilePage/ProfilePage")));
  const LazyFavoritesPage = lazy(() => (import("./pages/FavoritesPage/FavoritesPage")));
  const LazySettingsPage = lazy(() => (import("./pages/SettingsPage/SettingsPage")));

  return (
    <>
      <AppDataLoader />

      <Header />

      <main className="main">
        <h1 className="visually-hidden">Поиск фильмов с Марусей</h1>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Suspense fallback={<Loader />}>
              <Routes location={location}>
                <Route path="/" element={<LazyMainPage />} />
                <Route path="/genres" element={<LazyGenresPage />} />
                <Route path="/genres/:genreName" element={<LazyGenreMoviesPage />} />
                <Route path="/movie/:movieId" element={<LazyMoviePage />} />
                  <Route path="/profile" element={<LazyProfilePage />}>
                    <Route path="favorites" element={<LazyFavoritesPage />} />
                    <Route path="settings" element={<LazySettingsPage />} />
                    <Route index element={<LazyFavoritesPage />} />
                  </Route>
              </Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />

      <AuthForm />
    </>
  );
}

function AppDataLoader() {
  useUserQuery();
  useFavoritesQuery();
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default AppProviders