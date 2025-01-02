import { BsFire } from "react-icons/bs";

const Title = ({ title }) => {
	return (
		<div>
			<h2 className="text-[1.5rem] md:text-3xl font-bold flex items-baseline gap-3">
				<BsFire className="text-xl" />
				<span>{title}</span>
			</h2>
			<span className="block w-full bg-white/10 h-[1px] mt-8" />
		</div>
	);
};

export default Title;
