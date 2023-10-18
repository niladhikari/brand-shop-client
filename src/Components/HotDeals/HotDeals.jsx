import { useEffect, useState } from "react";
import HotDealsCard from "./HotDealsCard";


const HotDeals = () => {
    const [products,setProducts] = useState([]);
    
    useEffect(()=>{
        fetch('hotProduct.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className="grid overflow-hidden px-4 lg:px-0 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-between items-center">
        {
            products.map((product)=> <HotDealsCard 
            key={product.id} product={product}></HotDealsCard>)
        }
    </div>
    );
};

export default HotDeals;