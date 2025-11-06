import React, { useEffect, useState } from 'react';

function Fetchapi() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    if (!data) return <p className="text-center text-gray-500 mt-10 text-xl">Loading...</p>;

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-10">

            <div className="grid gap-8 grid-cols-4">
                {data.map((goods) => (
                    <div key={goods.id} className="bg-white rounded-2xl shadow-lg">

                        <div className="h-52 flex justify-center items-center bg-gray-50 p-4">
                            <img src={goods.image} alt="" className="h-40 object-contain " />
                        </div>

                        <div className="p-5 flex flex-col justify-evenly h-[220px]">
                            <h2 className="font-semibold text-lg text-gray-800 line-clamp-2">{goods.title}</h2>
                            <p className="text-sm text-gray-500 line-clamp-3">{goods.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Fetchapi;
