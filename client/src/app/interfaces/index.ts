export interface LinkInterface {
  title: string; // "Блог"
  path: string; // "/blog"
}

export interface ReviewInterface {
  userName: string;
  rating: number;
  review: string;
  date: string;
  sity: string;
  image: string;
}

export interface BuyStepsInterface {
  count: string, // "01"
  title: string, // 
  text: string, // 
  image: string, // "1.svg"
}

export interface SalesPostInterface {
  title: string;
  body: string;
  image: string;
}

export interface BonuseInterface{
  title: string,
  text: string,
  image: string,
}

export interface FAQInterface {
  title: string,
  text: string,
  rubric: string
}

export interface PostInterface {
  title: string;
  image: string;
  readtime: string;
  dateOfPublication: string;
}