import bgBoostDesktop from "../../assets/bg-boost-desktop.svg";
import bgBoostMobile from "../../assets/bg-boost-mobile.svg";

export default function Boost() {
	return (
		<div className="relative w-full py-16 bg-dark-violet">
			<img
				src={bgBoostDesktop}
				alt="bg-boost-desktop"
				className="absolute top-0 left-0 w-full h-full object-cover hidden lg:inline"
			/>
			<img
				src={bgBoostMobile}
				alt="bg-boost-mobile"
				className="absolute top-0 left-0 w-full h-full object-cover lg:hidden"
			/>
			<div className="relative z-10  flex flex-col justify-center items-center">
				<h2 className="text-3xl lg:text-5xl text-white font-bold mb-10">
					Boost your links today
				</h2>
				<button className="bg-cyan hover:bg-cyan/60 transition-all rounded-full py-4 px-10 text-white font-bold">
					Get Started
				</button>
			</div>
		</div>
	);
}
