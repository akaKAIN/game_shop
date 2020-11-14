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

export interface PriceInfo {
  cost: number;
  weightMin: number;
  weightStep: number;
  weightMax?: number;
}

export interface CatalogItem {
  id: number;
  title: string;
  photoUrl: string;
  description?: string;
  productionTime: number;
  categoryID: number;
  price: PriceInfo;
}

export interface Category {
  id: number;
  title: string;
  slag: string;
  info?: string;
}

export interface Category {
  id: number;
  title: string;
  slag: string;
  info?: string;
}

export interface ModalImageData {
  title: string;
  src: string;
  alt: string;
}


