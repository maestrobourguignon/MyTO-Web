import { useParams } from "react-router";
import { TerapiasPage } from "../terapias/terapiaspage";
import { InfoPage } from "../info/infoPage";
import type { UrlProps } from "../../interface/interfaces";

export const ContentDispatcher = ({apiUrl, imgLink}:UrlProps) => {
  const { slug } = useParams();

  // Definimos qué slugs pertenecen a los listados de TerapiasPage
  const esListado = ['terapias', 'movimiento', 'cursos'].includes(slug || '');

  if (esListado) {
    return <TerapiasPage apiUrl={apiUrl} imgLink={imgLink}/>; // Este usa useParams() internamente y verá el slug
  }

  // Si no es un listado, asumimos que es una página de información específica
  return <InfoPage apiUrl={apiUrl} imgLink={imgLink}/>;
};