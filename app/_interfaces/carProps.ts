export interface CarProps {
  id: number;
  name: string;
  imgUrl: string;
  next_reservation: string;
  status: string;
  rating: React.ReactNode;
  actions: React.ReactNode;
}

type DisplayType = keyof CarProps;

export interface ListCarProps {
  cars: CarProps[];
  displayType: DisplayType;
}

export interface CarPropsinfo {
  car: CarProps;
  displayType: DisplayType;
}
