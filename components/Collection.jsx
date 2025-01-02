import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import Image from "next/image";
import Title from "./common/Title";
import { Button } from "./ui/button";
import CollectionsData from "../data/Collections/data.json";

const CollectionCard = ({ collection }) => {
	const { nftImg1, nftImg2, nftImg3, userImg, name, title, items } = collection;

	return (
		<div className="bg-[#121636] backdrop-filter backdrop-blur-lg bg-opacity-60 border border-gray-100/10 rounded-xl p-5 flex flex-col gap-12">
			<div className="flex flex-col gap-3 w-full relative">
				<div className="flex items-center gap-2 w-full">
					<Image
						src={nftImg1}
						alt="nft collection"
						width={500}
						height={500}
						className="rounded-lg object-cover object-center w-[49%]"
					/>
					<Image
						src={nftImg2}
						alt="nft collection"
						width={500}
						height={500}
						className="rounded-lg object-cover object-center w-[49%]"
					/>
				</div>
				<div className="w-full">
					<Image
						src={nftImg3}
						alt="nft collection"
						width={500}
						height={500}
						className="rounded-lg object-cover object-center w-full h-40"
					/>
				</div>
				<Image
					src={userImg}
					alt="user"
					width={500}
					height={500}
					className="rounded-full object-cover object-top w-20 h-20 border-[4px] border-[#3A3E5F] absolute -bottom-8 left-1/2 -translate-x-1/2"
				/>
				<AiFillCheckCircle className="text-green-600 bg-white rounded-full text-2xl absolute -bottom-7 left-[54%]" />
			</div>

			<div className="flex items-center justify-between">
				<div>
					<h2 className="lg:text-lg font-bold cursor-pointer hover:text-white/80 mb-1">
						{title}
					</h2>
					<p className="text-sm">
						<span className="text-white/50">Created by</span> : {name}
					</p>
				</div>
				<Button
					variant="outline"
					size="sm"
					className="text-xs bg-transparent border-white/10 whitespace-nowrap w-fit"
				>
					{items} items
				</Button>
			</div>
		</div>
	);
};

const Collections = () => {
	return (
		<div id="collections" className="flex flex-col gap-16 relative">
			<Title title="Hot Collections" />

			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{CollectionsData.map((item) => (
					<CollectionCard key={item.id} collection={item} />
				))}
			</div>
		</div>
	);
};

export default Collections;
