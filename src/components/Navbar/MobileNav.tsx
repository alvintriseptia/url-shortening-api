import { useState } from "react";
import logo from "../../assets/logo.svg";
import MobileListNav from "./MobileListNav";

export default function MobileNav() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div className="lg:hidden">
			<div
				className="fixed bg-white top-0 left-0 py-10 px-4 z-50 w-full flex items-
    center justify-between"
			>
				<a href="/">
					<img src={logo} alt="logo" />
				</a>
				<div
					onClick={toggle}
					className="flex flex-col space-y-2 relative cursor-pointer overflow-hidden"
				>
					<div
						className={`w-10 h-1.5  ${
							isOpen && "rotate-45 absolute top-3 left-0"
						} bg-grayish-violet/70 rounded-lg transition-all`}
					></div>
					<div
						className={`w-10 h-1.5 ${
							isOpen ? "translate-x-full" : "translate-x-0"
						} bg-grayish-violet/70 rounded-lg transition-all`}
					></div>
					<div
						className={`w-10 h-1.5  ${
							isOpen && "-rotate-45 absolute top-1"
						} bg-grayish-violet/70 rounded-lg transition-all`}
					></div>
				</div>
			</div>
			<MobileListNav isOpen={isOpen} />
		</div>
	);
}
