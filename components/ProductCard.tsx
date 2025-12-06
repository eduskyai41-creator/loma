
import React from 'react';
import type { Product } from '../types.ts';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
      <div className="flex items-center">
         <svg className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
         <span className="text-xs text-gray-500 ml-0.5">{rating}</span>
      </div>
    );
};  

const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect, onQuickView }) => {
  // Mock data for UI demonstration
  const soldCount = Math.floor(Math.random() * 500) + 50;
  const isDiscount = product.id % 3 === 0;
  const discountPercent = isDiscount ? Math.floor(Math.random() * 20) + 10 : 0;
  
  // Calculate price logic (Mocking a higher original price)
  const currentPriceNum = parseFloat(product.price.replace(/[^0-9.-]+/g,""));
  const originalPrice = isDiscount ? (currentPriceNum * (100 + discountPercent) / 100).toFixed(0) : null;

  return (
    <div className="bg-white border border-gray-200 rounded-sm hover:border-cyan-500 hover:shadow-lg transition-all duration-200 flex flex-col h-full group relative cursor-pointer" onClick={() => onSelect(product)}>
      
      {/* Image Area */}
      <div className="relative aspect-square w-full bg-gray-100 overflow-hidden">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        
        {/* Discount Badge */}
        {isDiscount && (
            <div className="absolute top-0 right-0 bg-yellow-400 text-red-600 px-2 py-1 text-xs font-bold shadow-sm">
                -{discountPercent}%
            </div>
        )}

        {/* Mall/Preferred Badge Mock */}
        {product.id % 2 === 0 && (
            <div className="absolute top-2 left-0 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-r-sm shadow-sm z-10">
                Loma Mall
            </div>
        )}

        {/* Quick View (Hidden by default, shown on hover) */}
        <div className="absolute bottom-0 inset-x-0 bg-cyan-600/90 text-white py-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
             <button 
                onClick={(e) => { e.stopPropagation(); onQuickView(product); }}
                className="text-sm font-medium w-full h-full"
             >
                ดูตัวอย่าง
             </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-3 flex flex-col flex-grow">
        <div className="mb-1 h-10 overflow-hidden">
            <h3 className="text-sm text-gray-800 leading-5 line-clamp-2 break-words">
                {product.name}
            </h3>
        </div>
        
        {/* Producer/Location Tag */}
        <div className="flex items-center gap-1 mb-2">
            <span className="text-[10px] text-gray-500 border border-gray-300 px-1 rounded-sm truncate max-w-[100px]">{product.province}</span>
        </div>

        <div className="mt-auto">
             {/* Price Section */}
             <div className="flex flex-col items-start">
                 {isDiscount && (
                     <span className="text-xs text-gray-400 line-through decoration-gray-400">฿{new Intl.NumberFormat('th-TH').format(Number(originalPrice))}</span>
                 )}
                 <div className="flex items-center justify-between w-full">
                    <span className="text-lg font-bold text-red-600 tracking-tight">{product.price}</span>
                    <button onClick={(e) => { e.stopPropagation(); /* Add to cart logic */ }} className="p-1.5 rounded-full bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-colors lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </button>
                 </div>
             </div>

             {/* Rating and Sold Count */}
             <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-50">
                <StarRating rating={product.rating} />
                <span className="text-xs text-gray-500">ขายแล้ว {soldCount > 1000 ? (soldCount/1000).toFixed(1) + 'k' : soldCount} ชิ้น</span>
             </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
