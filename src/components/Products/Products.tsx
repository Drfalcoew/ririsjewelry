import React, { useEffect } from 'react';
import './Products.css';
import { ProductType } from '../../model/Models';
import Product from './Product';
import CacheService from '../../common/CacheService';
import Skeleton from '@mui/material/Skeleton';

const cacheService = new CacheService();

const Products = () => {

    const [products, setProducts] = React.useState<ProductType[]>([]);

    const skeletonItems = React.useMemo(() => Array.from({ length: 12 }, (_, i) => (
        <div className="product-paper" key={i}>
            <Skeleton variant="rectangular" width={300} height={200} />
            <Skeleton variant="text" width={300} height={50} />
            <Skeleton variant="text" width={300} height={50} />
            <Skeleton variant="text" width={300} height={50} />
        </div>
    )), []);
    
    /**
     * Fetch products from the API or cache on component mount
     */
    useEffect(() => {
        const fetchData = async () => {
            const cacheKey = 'products';
            try {
                const cachedProducts = cacheService.get(cacheKey);
                if (cachedProducts) {
                    setProducts(cachedProducts);
                } else {
                    const apiURL = process.env.REACT_APP_API_URL;
                    const response = await fetch(apiURL+ '/products'); // for dev
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const newProducts = await response.json() as ProductType[];
                    setProducts(newProducts);
                    // cacheService.set(cacheKey, newProducts);
                }
            } catch (error: any) {
                console.error("Failed to fetch products:", error);
                // show alert to user
            }
        };

        fetchData();
    }, []);

    

    return (
        <div className="products-container">
            <div className="products-title-container">
                <h1>SPRING COLLECTION</h1>
            </div>
            {products.length === 0 ? (
                <div className="products-content-container">
                    {skeletonItems}
                </div>
            ) : (
            <div className="products-content-container">
                {products.map((product, index) => (
                        <Product key={index} name={product.name} description={product.description}
                        price={product.price} id={product.id} category={product.category}
                        images={product.images} />
                ))}
            </div>
            )}
        </div>
    );
}

export default Products;