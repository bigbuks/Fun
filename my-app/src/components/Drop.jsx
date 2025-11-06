import React, { useEffect, useState } from 'react';

function Drop() {
    const [showCategory, setShowCategory] = useState(true);
    const [showType, setShowType] = useState(true);
    const [data, setData] = useState([]); // all products
    const [filteredData, setFilteredData] = useState([]); // products after filtering
    const [selectedCategories, setSelectedCategories] = useState([]); // e.g. ['Men', 'Women']

    // Fetch products
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(products => {
                setData(products);
                setFilteredData(products); // initially show all
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // Handle checkbox change
    function handleCategoryChange(e) {
        const { value, checked } = e.target;
        let updatedCategories;

        if (checked) {
            updatedCategories = [...selectedCategories, value];
        } else {
            updatedCategories = selectedCategories.filter(cat => cat !== value);
        }

        setSelectedCategories(updatedCategories);

        // Filter logic
        if (updatedCategories.length === 0) {
            setFilteredData(data); // show all if nothing selected
        } else {
            const filtered = data.filter(item =>
                updatedCategories.some(cat => item.category.toLowerCase().includes(cat.toLowerCase()))
            );
            setFilteredData(filtered);
        }
    }

    if (!data.length)
        return <p className="text-center text-gray-500 mt-10 text-xl">Loading...</p>;

    return (
        <div className="flex flex-row gap-10 pt-10 border-t border-gray-200 px-10">
            <div className="min-w-60">
                <p className="my-2 text-xl flex items-center cursor-pointer gap-2">FILTERS</p>

                {/* Category Filter */}
                <div className="border border-gray-300 pl-5 py-3 mt-6">
                    <p
                        className="mb-3 text-lg font-medium cursor-pointer flex items-center justify-between pr-5"
                        onClick={() => setShowCategory(!showCategory)}
                    >
                        CATEGORIES
                        <i
                            className={`fa-solid fa-caret-down text-black text-lg transform transition-transform duration-300 ${showCategory ? 'rotate-0' : 'rotate-180'
                                }`}
                        ></i>
                    </p>

                    <div className={`flex flex-col gap-2 text-sm font-light text-gray-700 ${showCategory ? '' : 'hidden'}`}>
                        <label className="flex gap-2">
                            <input className="w-3" type="checkbox" value="men" onChange={handleCategoryChange} />{' '}
                            Men
                        </label>
                        <label className="flex gap-2">
                            <input className="w-3"
                                type="checkbox" value="women" onChange={handleCategoryChange} />{' '}
                            Women
                        </label>
                        <label className="flex gap-2">
                            <input className="w-3" type="checkbox" value="jewelery" onChange={handleCategoryChange} />{' '}
                            Jewellery
                        </label>
                        <label className="flex gap-2">
                            <input className="w-3" type="checkbox" value="electronics" onChange={handleCategoryChange} />{' '}
                            Electronics
                        </label>
                    </div>
                </div>
            </div>

            {/* Products Section */}
            <div className="flex-1">
                <p className="text-xl my-2">ALL COLLECTIONS</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                    {filteredData.length > 0 ? (
                        filteredData.map(goods => (
                            <div
                                key={goods.id}
                                className="bg-white rounded-2xl shadow-lg transition hover:scale-105 duration-300"
                            >
                                <div className="h-52 flex justify-center items-center bg-gray-50 p-4">
                                    <img
                                        src={goods.image}
                                        alt=""
                                        className="h-40 object-contain"
                                    />
                                </div>
                                <div className="p-5 flex flex-col justify-evenly h-[220px]">
                                    <h2 className="font-semibold text-lg text-gray-800 line-clamp-2">
                                        {goods.title}
                                    </h2>
                                    <p className="text-sm text-gray-500 line-clamp-3">
                                        {goods.description}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center col-span-full text-gray-400 text-lg">
                            No items match your filter.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Drop;
