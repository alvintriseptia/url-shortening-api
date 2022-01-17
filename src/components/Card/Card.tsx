type Props = {
	img: string;
	title: string;
	description: string;
	marginTop: number;
};

export default function Card({ img, title, description, marginTop }: Props) {
	return (
		<div
			className={`relative lg:block lg:text-left flex justify-center items-center text-center flex-col z-10 bg-white rounded-xl p-16 min-h-80 ${
				marginTop === 1
					? "mt-20 lg:mt-32"
					: marginTop === 2
					? "mt-20 lg:mt-60"
					: "mt-20 lg:mt-0"
			}`}
		>
			<div className="w-24 h-24 -mt-28 rounded-full bg-dark-violet flex justify-center items-center">
				<img src={img} alt="img" />
			</div>
			<h3 className="text-2xl lg:text-3xl text-very-dark-blue font-bold mt-10">
				{title}
			</h3>
			<p className="mt-4 text-lg lg:text-xl text-grayish-violet">
				{description}
			</p>
		</div>
	);
}
