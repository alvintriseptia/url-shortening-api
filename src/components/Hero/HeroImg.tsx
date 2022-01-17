import heroImg from "../../assets/illustration-working.svg";

export default function HeroImg() {
	return (
		<img
			src={heroImg}
			alt="hero"
			className="lg:absolute lg:top-50 lg:right-0 translate-x-10 lg:translate-x-52 object-cover"
		/>
	);
}
