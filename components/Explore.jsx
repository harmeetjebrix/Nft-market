"use client";

import { useState } from "react";

import Card from "./common/Card";
import cardData from "../data/Explore/data.json";
import Title from "./common/Title";
import { cn } from "@/lib/utils";
import { Categories } from "@/constants/Categories";
import { Button } from "./ui/button";

const Explore = () => {
	const [selectedItem, setSelectedItem] = useState("trendings");

	return (
		<div id="explore" className="flex flex-col gap-16">
			<div className="flex md:items-start justify-between flex-col md:flex-row">
				<div className="w-fit">
					<Title title="Explore NFTs" />
				</div>
				<div className="flex items-center gap-2 lg:gap-4 xl:gap-5 flex-wrap">
					{Categories.map((item) => (
						<Button
							key={item.id}
							size="sm"
							onClick={() => setSelectedItem(item.name)}
							className={cn(
								selectedItem === item.name
									? "text-purple bg-white/100 hover:text-purple hover:bg-white"
									: "text-white bg-[#121636] hover:bg-[#121636] hover:text-white",
								"whitespace-nowrap rounded-full px-4 md:px-3 lg:px-6 py-5 lg:py-[1.4rem] bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 border border-gray-100/10 w-fit flex items-center gap-2 capitalize text-sm lg:text-base"
							)}
						>
							<item.icon />
							{item.name}
						</Button>
					))}
				</div>
			</div>
			<span className="md:block w-full bg-white/10 h-[1px] -mt-16 hidden" />
			<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:gird-cols-5 gap-5">
				{cardData.map((data) => (
					<Card key={data.id} data={data} />
				))}
			</div>
		</div>
	);
};

export default Explore;
