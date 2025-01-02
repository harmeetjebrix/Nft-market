import { AiFillCheckCircle } from "react-icons/ai";
import Image from "next/image";
import Title from "./common/Title";
import { Button } from "./ui/button";
import TopCreatorsData from "../data/TopCreators/data.json";

const CreatorsCard = ({ data }) => {
	const { bgImg, userImg, name, items } = data;
	return (
		<div className="bg-[#121636] backdrop-filter backdrop-blur-lg bg-opacity-60 border border-gray-100/10 rounded-xl p-3 flex flex-col justify-center items-center gap-3 pb-8">
			<div className="relative w-full">
				<Image
					src={bgImg}
					alt="nft"
					width={500}
					height={500}
					className="rounded-lg object-cover object-center w-full h-40"
				/>
				<Image
					src={userImg}
					alt="user"
					width={500}
					height={500}
					className="rounded-full object-cover object-top w-20 h-20 border-[4px] border-[#3A3E5F] absolute -bottom-8 left-1/2 -translate-x-1/2"
				/>
				<AiFillCheckCircle className="text-green-600 bg-white rounded-full text-2xl absolute -bottom-7 left-[54%]" />
			</div>

			<h2 className="text-lg font-bold cursor-pointer hover:text-white/80 mt-8">
				{name}
			</h2>
			<Button
				variant="outline"
				size="sm"
				className="text-xs bg-transparent border-white/10 w-fit"
			>
				{items} items
			</Button>
		</div>
	);
};

const TopCreators = () => {
	return (
		<div className="flex flex-col gap-16 relative">
			<Title title="Top Creators" />

			<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
				{TopCreatorsData.map((item) => (
					<CreatorsCard key={item.id} data={item} />
				))}
			</div>
		</div>
	);
};

export default TopCreators;
