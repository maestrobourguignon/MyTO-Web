
import { Routes, Route } from "react-router";
import { HomePage } from "./pages/home/homepage";
import { ValoresPage } from "./pages/valores/valorespage";
import { ContentDispatcher } from "./pages/contentDispatcher/contentDispatcher";

export const PageRoutes = () => {

  const apiUrl = 'https://www.terapiasmyto.com.ar/api/'; // Reemplaza con tu URL real
  const imgLink = 'https://espaciopakua.com.ar/uploads/';

  return(
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:slug" element={<ContentDispatcher apiUrl={apiUrl} imgLink={imgLink} />} />
    </Routes>
  )
}