export interface SimpleContactItem {
  contactTitle: string;
  contactText: string;
  contactIconType: string;
  contactLink?: string;
}

export interface NavMenuOption {
  text: string;
  link: string;
}

export interface CatalogItem {
  id: number;
  title: string;
  link: string;
  description: string;
  slag: string;
}

export interface CatalogCategory {
  title: string;
  items: CatalogItem[];
}

export interface ModalImageData {
  title: string;
  src: string;
  alt: string;
}

