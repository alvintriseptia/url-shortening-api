type Props = {
	isOpen: boolean;
};

export default function MobileListNav({ isOpen }: Props) {
	return (
		<div
			className={`fixed z-50 ${
				isOpen ? "-translate-y-0" : "translate-y-[-1440px]"
			} transition-all top-32 left-4 right-4 bg-dark-violet rounded-2xl text-white font-bold text-xl py-8 px-4`}
		>
			<div className="flex flex-col space-y-6 border-b-2 border-b-gray/40 pb-6 text-center">
				<button>Features</button>
				<button>Pricing</button>
				<button>Resources</button>
			</div>
			<div className="flex flex-col space-y-6 pt-6">
				<button className="font-bold">Login</button>
				<button className="bg-cyan hover:bg-cyan/60 transition-all rounded-full py-4">
					Sign up
				</button>
			</div>
		</div>
	);
}
