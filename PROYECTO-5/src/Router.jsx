import { createBrowserRouter } from 'react-router-dom';
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { MoviesList } from "./pages/MoviesList";
import { MovieDetails } from "./pages/MovieDetails";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

export const Router = createBrowserRouter([
    {   path: "/", element: <Home />},
    {
        path: "/", element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/movies", element: <MoviesList /> },
            { path: "/movie/:id", element: <MovieDetails /> },
            { path: "/about", element: <About /> },
            { path: "/contact", element: <Contact /> }
        ]
    }
]);