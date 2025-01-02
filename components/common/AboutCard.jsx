import { FaWallet, FaShapes, FaShopify } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";


const Card = ({ icon, title, desc }) => {
	return (
		<div className="relative flex flex-col gap-8">
			<div className="relative w-fit">
				<span className="block w-9 h-9 absolute -top-3 -right-3 -z-[1] bg-white/10 backdrop-blur-xl rounded-full" />
				{icon}
			</div>
			<div>
				<h2 className="text-lg font-bold mb-4">{title}</h2>
				<p className="text-white/80 leading-loose">{desc}</p>
			</div>
		</div>
	);
};

const AboutCard = () => {
	return (
		<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-14 gap-x-5 py-16">
			<Card
				icon={<FaWallet className="text-4xl" />}
				title="Set Up Your Wallet"
				desc="NFTs are the latest and greatest application of blockchain technology."
			/>
			<Card
				icon={<FaShapes className="text-4xl" />}
				title="Create Collection"
				desc="NFTs are the latest and greatest application of blockchain technology."
			/>
			<Card
				icon={<IoDiamond className="text-4xl" />}
				title="Add your NFT's"
				desc="NFTs are the latest and greatest application of blockchain technology."
			/>
			<Card
				icon={<FaShopify className="text-4xl" />}
				title="List them for sale"
				desc="NFTs are the latest and greatest application of blockchain technology."
			/>
			{/* <FaWallet className="bg-gradient-to-r from-[#6625AE] to-[#7360FE] bg-clip-text text-transparent" /> */}
		</div>
	);
};

export default AboutCard;
