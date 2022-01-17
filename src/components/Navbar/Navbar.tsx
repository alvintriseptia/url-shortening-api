import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
	return (
		<nav className=" container mx-4 lg:mx-auto my-16">
			<DesktopNav />
			<MobileNav />
		</nav>
	);
}
