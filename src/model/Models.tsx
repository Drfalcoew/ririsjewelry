
export interface ProductType {
    id: number;
    name: string;
    description: string;
    images: string[];
    price: number;
    category: string;
}

export interface ShoppingCartProps {
    items: CartItem[];
    total: number;
}
    
export interface CartItem {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    quantity: number;
    category: string;
}