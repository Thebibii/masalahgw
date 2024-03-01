import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import FypPage from "./pages/fyp";
import PageAkun from "./pages/akun";
import DetailPostPage from "./pages/detailPost";
import KelolaPage from "./pages/kelola";
import NotFound from "./pages/notfound";
import NotifikasiPage from "./pages/notifikasi";
import ProfilPage from "./pages/profil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FypPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/akun",
    element: <PageAkun />,
  },
  {
    path: "/masalah/:id",
    element: <DetailPostPage />,
  },
  {
    path: "/kelola",
    element: <KelolaPage />,
  },
  {
    path: "/notifikasi",
    element: <NotifikasiPage />,
  },
  {
    path: "/profil/:name",
    element: <ProfilPage />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
