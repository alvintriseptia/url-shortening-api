import {
	Boost,
	Footer,
	Hero,
	LinkedList,
	Navbar,
	Shorten,
	Statistics,
} from "./components/index";

function App() {
	return (
		<div className="overflow-hidden flex flex-col justify-center items-center">
			<Navbar />
			<Hero />
			<div className="bg-grayish-violet/20 min-h-screen w-full mt-10">
				<Shorten />
				<LinkedList />
				<Statistics />
			</div>
			<Boost />
			<Footer />
		</div>
	);
}

export default App;
