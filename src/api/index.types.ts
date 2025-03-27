export interface IGetDataProduct {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}

export interface IProduct {
  id: number;
  title: string;
  category: string;
}

export type FetchProduct = ({ search }: string) => Promise<IGetDataProduct>;
