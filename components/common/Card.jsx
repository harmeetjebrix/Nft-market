"use client";

import Image from "next/image";
import { FaGem } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";

const currentYear = new Date().getFullYear();

const Card = ({ data} ) => {
	const [heartClicked, setHeartClicked] = useState(false);
	
	const { nftImg, userImg, name, title, date } = data;

	return (
		<div className="bg-[#121636] bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 border border-gray-100/10 rounded-xl">
			<div className="p-3 flex flex-col gap-8">
				<div className="relative">
					<Image
						src={nftImg}
						alt="nft"
						width={500}
						height={500}
						className="w-full h-52 object-cover object-top rounded-tl-xl rounded-tr-xl"
					/>
					<button
						onClick={() => setHeartClicked(!heartClicked)}
						className="text-red-500 bg-white/70 py-2 px-[.6rem] text-lg rounded-md absolute top-2 right-2 hover:bg-white/50 cursore-pointer"
					>
						{heartClicked ? <AiFillHeart /> : <AiOutlineHeart />}
					</button>

					<div className="py-3 px-8 w-[90%] absolute bottom-2 left-1/2 -translate-x-1/2 rounded-lg bg-clip-padding backdrop-filter bg-gray-100 backdrop-blur-xl bg-opacity-20 border border-gray-100/10 flex items-center justify-between">
						<p>0</p>
						<p>:</p>
						<p>0</p>
						<p>:</p>
						<p>0</p>
						<p>:</p>
						<p>0</p>
						<p>:</p>
					</div>
				</div>

				<div className="flex flex-col gap-4 p-3">
					<div className="flex items-center gap-2 text-white/70 text-xs">
						<Image
							src={userImg}
							alt="user"
							width={500}
							height={500}
							className="w-8 h-8 border-2 border-purple object-cover object-top rounded-full"
						/>
						<span>{name}</span>
					</div>
					<h2 className="text-lg font-bold">{title}</h2>
					<p className="text-white/50 text-xs flex items-center">
						Highest bid : <FaGem className="text-[#9766ea] mx-1" />
						{"  "}
						<span className="text-white text-sm">0.15 ETH</span>
					</p>
				</div>
			</div>
			<div className="flex items-center justify-between px-6 py-2 border-t border-gray-100/10 bg-opacity-60 bg-[#1C203D] backdrop-filter backdrop-blur-sm rounded-bl-xl rounded-br-xl">
				<p className="text-white text-xs">
					Released :{" "}
					<span className="text-white/50">
						{date} , {currentYear}
					</span>
				</p>

				<button className="hover:bg-white hover:text-purple text-white bg-transparent border rounded px-4 py-2 transition-all duration-500 text-xs">
					Bid
				</button>
			</div>
		</div>
	);
};

export default Card;
