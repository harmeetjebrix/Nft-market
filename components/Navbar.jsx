"use client";

import Link from "next/link";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { BiMenu } from "react-icons/bi";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SocialLinks } from "@/constants/SocialLinks";

const SocialIcon = ({ data }) => {
	const { link, icon: Icon } = data;
	return (
		<Link
			href={link}
			target="_blank"
			className="hover:-translate-y-1 transition-all text-lg hover:text-zinc-400"
		>
			<Icon />
		</Link>
	);
};

const Navbar = () => {
	const [showNavbar, setShowNavbar] = useState(false);
	const [selectedItem, setSelectedItem] = useState("home");

	return (
		<div
			id="home"
			className="backdrop-blur-xl bg-purple/10 w-full z-50 fixed top-0 left-0"
		>
			<div className="flex items-center justify-between container px-5 mx-auto py-4 md:py-5">
				<Link href="/">
					<h2 className="text-xl lg:text-2xl font-semibold">NFT MarketPlace</h2>
				</Link>

				<div>
					<ul
						className={`${showNavbar ? "right-0" : "-right-full"}
						 z-50 md:relative absolute top-0 md:left-0 w-full sm:w-80 md:w-auto duration-500 h-screen md:h-auto shadow-2xl md:shadow-none flex items-start md:items-center gap-3 md:gap-8 lg:gap-10 capitalize text-sm bg-purple md:bg-transparent flex-col md:flex-row py-28 px-10 md:p-0 transition-all`}
					>
						<Button
							onClick={() => setShowNavbar(false)}
							size="icon"
							variant="ghost"
							className="md:hidden absolute top-10 left-8 cursor-pointer text-2xl hover:bg-muted-foreground/20 rounded-full hover:text-white hover:rotate-180 transition-all"
						>
							<IoClose />
						</Button>
						{[
							"home",
							"about",
							"live-bidding",
							"explore",
							"collections",
							"contact",
						].map((link) => (
							<li key={link} className="w-full">
								<Link
									href={`#${link}`}
									onClick={() => setSelectedItem(link)}
									className={cn(
										selectedItem === link
											? "text-white before:bg-white before:scale-100 hover:before:scale-100"
											: "before:scale-0 hover:before:scale-100 before:bg-zinc-400 md:before:bg-zinc-500 text-zinc-500",
										"border-b block border-white w-full py-3 md:py-0 md:w-auto md:border-0 relative before:absolute before:bottom-0 md:before:-bottom-1 before:rounded-full before:left-1/2 before:-translate-x-1/2 before:w-full before:h-[2px] before:transition-all before:duration-500 whitespace-nowrap"
									)}
								>
									{link.replace(/-/g, " ")}
								</Link>
							</li>
						))}
						<div className="md:hidden mx-auto absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-3">
							{SocialLinks.map((link) => (
								<SocialIcon key={link.id} data={link} />
							))}
						</div>
					</ul>
				</div>

				<Button
					onClick={() => setShowNavbar(true)}
					size="icon"
					variant="ghost"
					className="md:hidden cursor-pointer text-2xl hover:bg-muted-foreground/20 rounded-full hover:text-white"
				>
					<BiMenu />
				</Button>
			</div>
		</div>
	);
};

export default Navbar;
