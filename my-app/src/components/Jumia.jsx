import React from 'react';

const images = [
    {
        image: '/jumia1.jpg',
        name: 'JIYUE Flash Drive',
        price: '₦ 4,640',
        discountedprice: '₦ 9,118',
        itemsleft: '59 items left',
        percentage: '-28%'
    },
    {
        image: '/jumia2.jpg',
        name: 'Colorful T-Shirt',
        price: '₦ 6,640',
        discountedprice: '₦ 12,118',
        itemsleft: '20 items left',
        percentage: '-10%'
    },
    {
        image: '/jumia3.jpg',
        name: 'Standing Fan',
        price: '₦ 14,640',
        discountedprice: '₦ 29,118',
        itemsleft: '15 items left',
        percentage: '-50%'
    },
    {
        image: '/jumia4.jpg',
        name: 'Silver Crest Blender',
        price: '₦ 8,640',
        discountedprice: '₦ 19,118',
        itemsleft: '34 items left',
        percentage: '-20%'
    },
    {
        image: '/jumia5.jpg',
        name: 'Electric Kettle',
        price: '₦ 5,640',
        discountedprice: '₦ 11,118',
        itemsleft: '23 items left',
        percentage: '-8%'
    },
    {
        image: '/jumia6.jpg',
        name: 'Towel Set',
        price: '₦ 3,640',
        discountedprice: '₦ 7,118',
        itemsleft: '12 items left',
        percentage: '-68%'
    },
];

function Jumia() {
    return (
        <div className="mt-[100px]">

            <nav className="flex items-center bg-[#E61601] justify-between px-5 h-[6vh] w-[70%] m-auto rounded-md">
                <p className="text-white text-xl flex items-center gap-2">
                    <i className="fa-solid fa-tag fa-flip-horizontal text-[#FF9900]"></i>
                    Flash Sales
                </p>

                <h1 className="text-white text-xl">Time Left: 09h : 20m : 53s</h1>

                <ul className="flex gap-[40px]">
                    <li>
                        <a className="text-white text-md font-light hover:underline" href="#"> See All <i className="fa-solid fa-angle-right text-sm"></i></a>
                    </li>
                </ul>
            </nav>

            {/* 🔸 Flash Sales Product Cards */}
            <div className="flex flex-wrap bg-white h-auto w-[70%] m-auto p-3 gap-4 rounded-md justify-center mt-3">
                {images.map((item, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col gap-1 cursor-pointer rounded-sm hover:shadow-2xl transition-shadow duration-300 p-2 w-[150px]"
                    >
                        <img src={item.image} alt={item.name} className="rounded-md" />
                        <p className="text-black text-sm mt-2">{item.name}</p>
                        <p className="font-normal text-gray-900">{item.price}</p>
                        <p className="line-through text-[12px] font-light text-gray-700">
                            {item.discountedprice}
                        </p>
                        <p className="font-light text-[13px]">{item.itemsleft}</p>

                        <div className="w-full bg-gray-300 rounded-full h-2">
                            <div className="bg-orange-500 h-2 rounded-full w-[45%]"></div>
                        </div>

                        <p className="text-red-400 px-1 py-1 bg-red-200 text-[10px] absolute top-1 left-25 rounded-sm">
                            {item.percentage}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Jumia;
