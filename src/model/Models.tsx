
export interface ProductProps {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
}

export interface ShoppingCartProps {
    items: CartItem[];
    total: number;
}
    
export interface CartItem {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
    quantity: number;
}