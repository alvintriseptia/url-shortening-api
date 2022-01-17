import Content from "./Content";
import HeroImg from "./HeroImg";

export default function Hero() {
	return (
		<div className="container mx-4 lg:mx-auto lg:min-h-screen flex flex-col-reverse lg:flex-row items-center relative">
			<Content />
			<HeroImg />
		</div>
	);
}
