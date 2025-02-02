export interface Product {
    id: string | number;  // id hem string hem number olabilir // Firestore'dan gelen id'ler artık number
    title: string;
    price: number;
    rating: number;
    reviews: number;
    image: string;
    discount: number;
    discountedPrice: number;
    label: string;
    labelColor: string;
    quantity: number;
  }