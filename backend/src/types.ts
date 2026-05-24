export type Destination = {
  id: string;
  name: string;
  location: string;
  rating: string;
  duration: string;
  imagePath: string;
  description: string;
  price: string;
  reviewsCount: string;
  category: string;
  isFavorite: boolean;
};

export type Trip = {
  id: string;
  destination: string;
  location: string;
  date: string;
  status: string;
  imagePath: string;
  isUpcoming: boolean;
};

export type Profile = {
  name: string;
  email: string;
};

export type DocumentItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
};
