import logo from "../../assets/logo.svg";

export default function DesktopNav() {
	return (
		<div
			className="hidden fixed left-0 top-0 py-10 w-full px-16 z-50 bg-white lg:flex items-
    center justify-between"
		>
			<div className="flex items-center">
				<a href="/">
					<img src={logo} alt="logo" />
				</a>
				<div className="ml-10 text-grayish-violet flex space-x-6 font-bold">
					<button className="hover:text-very-dark-violet transition-all">
						Features
					</button>
					<button className="hover:text-very-dark-violet transition-all">
						Pricing
					</button>
					<button className="hover:text-very-dark-violet transition-all">
						Resources
					</button>
				</div>
			</div>
			<div className="flex items-center space-x-6 ">
				<button className="text-grayish-violet font-bold hover:text-very-dark-violet transition-all">
					Login
				</button>
				<button className="bg-cyan hover:bg-cyan/60 transition-all text-white rounded-full px-6 py-2">
					Sign up
				</button>
			</div>
		</div>
	);
}
