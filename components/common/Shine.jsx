import { cn } from "@/lib/utils";

const Shine = ({ customClasses }) => {
	return (
		<div
			className={cn(
				"w-96 h-96 rounded-full absolute top-2/3 -translate-y-1/2 bg-[#7e2dec] opacity-50 blur-[200px] -z-[1]",
				customClasses
			)}
		/>
	);
};

export default Shine;
