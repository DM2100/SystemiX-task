export interface Plan {
    id: number;
    img: string;
    title: string;
    price?: number | null;
    extra?: string;
  }
  

  export interface AddOn {
    id: number;
    value: string;
    desc: string;
    price: number;
}