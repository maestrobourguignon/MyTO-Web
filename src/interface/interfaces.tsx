export interface CategoriaItem {
  title: string;
  description: string;
  link: string;
  button: string;
  imageUrl?: string; // Nueva propiedad para la imagen específica
  };

interface ServiceBlockProps {
  slug: string;
  alt_img_url: string | null;
  img_url: string;
  title: string;
  titulo: string;
  sinopsis: string;
  label?: string;
  description?: string;
  imageUrl?: string;
  link?: string;
  linkText?: string;
  isReverse?: boolean;
};

export interface ServiceInterface {
  data: ServiceBlockProps;
  reverse?:boolean;
  imgLink?: string;
}

export interface UrlProps {
  apiUrl: string;
  imgLink?: string;
}