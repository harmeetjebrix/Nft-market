import Link from "next/link";

import Users from "./common/Users";
import CommonButton from "./common/CommonButton";

const Footer = () => {
	const date = new Date().getFullYear();

	return (
		<footer
			id="contact"
			className="bg-[url('/space.jpg')] bg-cover bg-bottom relative bg-opacity-10 mt-8 md:mt-10 lg:mt-16"
		>
			<div className="flex flex-col gap-16 md:gap-20 lg:gap-32 z-[10] text-white relative pt-28 md:pt-40 md:pb-0 pb-8">
				<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#05092b]/70 via-[#05092b]/50 to-[#05092b] z-[0]" />
				<div className="px-5 md:px-16 z-[1]">
					<div className="flex md:items-center md:justify-between flex-col md:flex-row gap-10 md:gap-5">
						<div className="flex flex-col gap-8 flex-1">
							<h1 className="text-[2.7rem] sm:text-6xl lg:text-7xl font-extrabold leading-snug">
								Let&apos;s join to our <br /> community.
							</h1>
							<p className="text-white/80">
								Are you an artist or NFT project creator?
							</p>
							<p className="text-zinc-200 -mt-7">
								Get in touch with us to get your content on Harmeet Chavda&apos;s
								NFT Market Place.
							</p>
							<Users text1="Join to us more than" text2="40k+ creators" />
						</div>

						<div className="flex md:flex-col flex-row gap-3">
							<CommonButton
								text="Join Now"
								customClasses="rounded-full w-[10.8rem] border"
							/>
							<CommonButton
								text="Connect Wallet"
								customClasses="rounded-full bg-trasparent w-[10.8rem] border text-white hover:bg-white hover:text-purple duration-300"
							/>
						</div>
					</div>
				</div>

				<div className="flex md:items-center md:justify-between py-7 md:py-10 px-5 border-t border-white/10 z-[1] flex-col md:flex-row gap-5">
					<ul className="flex items-center gap-5 md:gap-8 text-sm">
						{["Privacy policy", "Legal notice", "Terms of service"].map(
							(link) => (
								<li key={link}>
									<Link href={"/"}>{link}</Link>
								</li>
							)
						)}
					</ul>

					<div className="text-xs md:text-[.8rem]">
						<p className="text-white/50">
							Copyright © {date} - All rights reserved by{" "}
							<Link
								href="https://linkedin.com/in/harmeetchavda/"
								target="_blank"
								className="underline text-white underline-offset-[3px]"
							>
								Harmeet Chavda
							</Link>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
