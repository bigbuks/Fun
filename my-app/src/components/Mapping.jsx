import React from 'react'
import Data from '../Data.json';

function Mapping() {

    return (

        <>
            {/* {
                goods.map((item, index) => (
                    <p key={index}>{item}</p>
                ))
            } */}

            <div className='flex gap-3 justify-center'>

                {
                    Data.map((item, index) => (
                        <div key={index} className="max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                            <img
                                src={item.image}
                                alt=''
                                className="w-full h-[50vh] object-cover"
                            />

                            <div className="p-5">
                                <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                                <p className="text-gray-500 mt-1">Comfortable everyday wear</p>

                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-lg font-bold text-orange-600">{item.price}</span>
                                    <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
                                        Buy Now
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>


        </>
    )
}

export default Mapping
