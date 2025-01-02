import { BsFire } from "react-icons/bs";
import Image from "next/image";

import Users from "./common/Users";
import AboutCard from "./common/AboutCard";
import Shine from "./common/Shine";

const About = () => {
	return (
		<div id="about" className="flex flex-col gap-32 relative">
			<div className="flex items-top flex-col md:flex-row gap-20 md:gap-10 lg:gap-32">
				<div className="flex flex-col gap-8 w-full md:w-[80%]">
					<p className="rounded-full py-3 px-8 bg-[#121636] bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 border border-gray-100/10 w-fit flex items-center gap-2 text-sm">
						<BsFire />
						Digital Art
					</p>
					<h2 className="text-3xl md:text-4xl font-bold">Digital art works.</h2>
					<p className="text-white/50 text-sm md:text-base">
						We are a collective group of designers, developers, and
						technologists with extensive backgrounds in digital sector. Our
						purpose is to make most notable NFT collections.
					</p>
					<div className="flex items-center justify-between">
						<div>
							<p className="text-xl md:text-2xl font-bold">$173 M</p>
							<span className="text-xs md:text-sm">Trading Volume</span>
						</div>
						<div>
							<p className="text-xl md:text-2xl font-bold">538 K+</p>
							<span className="text-xs md:text-sm">NFTs Created</span>
						</div>
						<div>
							<p className="text-xl md:text-2xl font-bold">23 K+</p>
							<span className="text-xs md:text-sm">Total Users</span>
						</div>
					</div>
				</div>
				<div className="w-full relative flex items-end justify-center md:justify-normal mr-20 lg:mr-0">
					<Image
						src="/header/4.jpg"
						alt="nft"
						width={500}
						height={500}
						className="w-[200px] sm:w-[290px] md:w-[250px] lg:w-[280px] h-72 sm:h-96 object-cover object-top rounded-2xl -rotate-12"
					/>
					<Image
						src="/header/12.jpg"
						alt="nft"
						width={500}
						height={500}
						className="w-[200px] sm:w-[290px] md:w-[260px] lg:w-[300px] h-72 sm:h-80 object-cover object-top rounded-2xl rotate-12"
					/>
					<div className="w-[300px] absolute -bottom-14 left-1/2 md:left-2/3 lg:left-1/2 -translate-x-1/2 bg-gray-100/5 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100/10 p-8">
						<Users text1="More Than" text2="40k+" />
						<p className="text-sm text-white/70 leading-relaxed mt-3">
							Digital art creators joined us to sale their own NFT to our
							marketplace.
						</p>
					</div>
				</div>
			</div>

			<Shine customClasses="-left-44" />
			<AboutCard />
		</div>
	);
};

export default About;
