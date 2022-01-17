import Card from "../Card/Card";
import iconBrandRecognition from "../../assets/icon-brand-recognition.svg";
import iconDetailedRecords from "../../assets/icon-detailed-records.svg";
import iconFullyCustomizable from "../../assets/icon-fully-customizable.svg";

export const dataCard = [
	{
		img: iconBrandRecognition,
		title: "Brand Recognition",
		description:
			"Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
	},
	{
		img: iconDetailedRecords,
		title: "Detailed Records",
		description:
			"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
	},
	{
		img: iconFullyCustomizable,
		title: "Fully Customizable",
		description:
			"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
	},
];

export default function Statistics() {
	return (
		<div className="flex flex-col min-h-screen justify-center items-center py-24">
			<h2 className="text-3xl lg:text-5xl text-very-dark-blue font-bold text-center">
				Advanced Statistics
			</h2>
			<p className="mt-4 text-xl lg:text-3xl text-grayish-violet text-center lg:w-1/2 leading-relaxed">
				Track how your links are performing across the web with our advanced
				statistics dashboard.
			</p>
			<div className="relative container mx-auto px-4 lg:px-0 flex flex-col lg:flex-row items-center justify-center lg:space-x-10 ">
				<div className="w-3 lg:w-3/4 h-3/4 lg:h-3 bg-cyan absolute top-20 lg:top-1/2 lg:left-40 "></div>
				{dataCard.map((item, index) => (
					<Card
						key={index}
						img={item.img}
						title={item.title}
						description={item.description}
						marginTop={index}
					/>
				))}
			</div>
		</div>
	);
}
