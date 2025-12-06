
import React, { useState } from 'react';
import { Product, SortOption } from '../types.ts';
import ProductCard from '../components/ProductCard.tsx';

interface AllProductsProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onQuickView: (product: Product) => void;
  searchQuery: string;
  onClearSearch: () => void;
  allCategories: string[];
  allProvinces: string[];
  allProducers: string[];
  selectedCategories: string[];
  selectedProvinces: string[];
  selectedProducers: string[];
  sortOption: SortOption;
  onCategoryChange: (categories: string[]) => void;
  onProvinceChange: (provinces: string[]) => void;
  onProducerChange: (producers: string[]) => void;
  onSortChange: (sort: SortOption) => void;
}

export const AllProducts: React.FC<AllProductsProps> = ({ 
  products, 
  onSelectProduct,
  onQuickView,
  searchQuery, 
  onClearSearch,
  allCategories,
  allProvinces,
  allProducers,
  selectedCategories,
  selectedProvinces,
  selectedProducers,
  sortOption,
  onCategoryChange,
  onProvinceChange,
  onProducerChange,
  onSortChange
}) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const handleCategoryChange = (category: string) => {
    const newSelection = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    onCategoryChange(newSelection);
  };

  const handleProvinceChange = (province: string) => {
    const newSelection = selectedProvinces.includes(province)
      ? selectedProvinces.filter(p => p !== province)
      : [...selectedProvinces, province];
    onProvinceChange(newSelection);
  };

  const handleProducerChange = (producer: string) => {
    const newSelection = selectedProducers.includes(producer)
      ? selectedProducers.filter(p => p !== producer)
      : [...selectedProducers, producer];
    onProducerChange(newSelection);
  };

  const FilterSidebar: React.FC = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-gray-800 font-bold text-lg pb-4 border-b border-gray-200">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
        ตัวกรองค้นหา
      </div>

      <div>
        <h3 className="text-sm font-bold mb-3 text-gray-800 uppercase tracking-wide">หมวดหมู่สินค้า</h3>
        <div className="space-y-2">
          {allCategories.map(category => (
            <label key={category} className="flex items-center space-x-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="h-4 w-4 rounded border-gray-300 bg-white text-cyan-600 focus:ring-cyan-500"
              />
              <span className="text-gray-600 group-hover:text-cyan-600 transition-colors text-sm">{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-100 pt-4">
        <h3 className="text-sm font-bold mb-3 text-gray-800 uppercase tracking-wide">จังหวัด</h3>
        <div className="space-y-2">
          {allProvinces.map(province => (
            <label key={province} className="flex items-center space-x-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedProvinces.includes(province)}
                onChange={() => handleProvinceChange(province)}
                className="h-4 w-4 rounded border-gray-300 bg-white text-cyan-600 focus:ring-cyan-500"
              />
              <span className="text-gray-600 group-hover:text-cyan-600 transition-colors text-sm">{province}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-100 pt-4">
        <h3 className="text-sm font-bold mb-3 text-gray-800 uppercase tracking-wide">ผู้ผลิต</h3>
        <div className="space-y-2 max-h-60 overflow-y-auto custom-scrollbar pr-2">
          {allProducers.map(producer => (
            <label key={producer} className="flex items-center space-x-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedProducers.includes(producer)}
                onChange={() => handleProducerChange(producer)}
                className="h-4 w-4 rounded border-gray-300 bg-white text-cyan-600 focus:ring-cyan-500"
              />
              <span className="text-gray-600 group-hover:text-cyan-600 transition-colors text-sm truncate">{producer}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumb style header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
            <h1 className="text-2xl font-bold text-gray-800">สินค้าทั้งหมด <span className="text-base font-normal text-gray-500 ml-2">({products.length} รายการ)</span></h1>
            
            {/* Sorting - Marketplace Style */}
            <div className="flex items-center space-x-2 text-sm bg-white p-2 rounded shadow-sm">
                <span className="text-gray-500 mr-2 hidden sm:inline">เรียงตาม:</span>
                <button 
                    onClick={() => onSortChange('default')}
                    className={`px-4 py-1.5 rounded transition-colors ${sortOption === 'default' ? 'bg-cyan-600 text-white' : 'hover:bg-gray-100 text-gray-700'}`}
                >
                    เกี่ยวข้อง
                </button>
                 <button 
                    onClick={() => onSortChange('price-asc')}
                    className={`px-4 py-1.5 rounded transition-colors ${sortOption === 'price-asc' ? 'bg-cyan-600 text-white' : 'hover:bg-gray-100 text-gray-700'}`}
                >
                    ราคาต่ำสุด
                </button>
                 <button 
                    onClick={() => onSortChange('price-desc')}
                    className={`px-4 py-1.5 rounded transition-colors ${sortOption === 'price-desc' ? 'bg-cyan-600 text-white' : 'hover:bg-gray-100 text-gray-700'}`}
                >
                    ราคาสูงสุด
                </button>
            </div>
        </div>

        <div className="lg:grid lg:grid-cols-4 lg:gap-6 items-start">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block bg-white p-5 rounded shadow-sm sticky top-24">
              <FilterSidebar />
            </aside>

            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-4">
                 <button onClick={() => setIsFiltersOpen(!isFiltersOpen)} className="w-full bg-white p-3 rounded shadow-sm flex items-center justify-center text-cyan-600 font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                      ตัวกรอง & หมวดหมู่
                  </button>
                  {isFiltersOpen && (
                    <div className="bg-white p-4 rounded mt-2 shadow-sm border border-gray-100">
                        <FilterSidebar />
                    </div>
                  )}
            </div>

            <main className="lg:col-span-3">
              {searchQuery && (
                <div className="bg-white border-l-4 border-cyan-500 p-4 mb-4 shadow-sm flex items-center justify-between">
                    <div>
                        <span className="text-gray-600">ผลการค้นหาสำหรับ:</span>
                        <strong className="text-gray-900 font-bold ml-2">"{searchQuery}"</strong>
                    </div>
                    <button onClick={onClearSearch} className="text-sm font-medium text-red-500 hover:text-red-700 underline">
                        ล้างการค้นหา
                    </button>
                </div>
              )}

              {products.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {products.map(product => (
                    <ProductCard key={product.id} product={product} onSelect={onSelectProduct} onQuickView={onQuickView} />
                    ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 bg-white rounded shadow-sm">
                    <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    <h3 className="text-lg font-medium text-gray-900">ไม่พบสินค้าที่คุณค้นหา</h3>
                    <p className="text-gray-500 mt-1">ลองเปลี่ยนคำค้นหา หรือล้างตัวกรองทั้งหมด</p>
                    <button onClick={onClearSearch} className="mt-4 text-cyan-600 hover:underline">ดูสินค้าทั้งหมด</button>
                </div>
              )}
            </main>
        </div>
      </div>
    </div>
  );
};
