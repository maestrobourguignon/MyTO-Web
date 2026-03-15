import type { ServiceInterface } from "../../interface/interfaces";
import './serviceBlock.css';
export const ServiceBlock = ({
  data,
  reverse,
  imgLink
}: ServiceInterface) => {
  return (
    <a href={`/${data.slug}`} className={`modern-block ${reverse ? 'reverse' : ''}`}>
      <div className="image-wrapper">
        <img src={`${imgLink}${data.alt_img_url !== null  ?data.alt_img_url :data.img_url}`} alt={data.title} />
      </div>
      <div className="text-card-overlap">
        <span className="label">{data.label}</span>
        <h2>{data.titulo}</h2>
        <div className="divider-accent"></div>
        <p>{data.sinopsis}</p>
        <a href={`/${data.slug}`} className="link-modern">
          Saber más →
        </a>
      </div>
    </a>
  );
};