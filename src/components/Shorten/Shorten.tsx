import { useRef, useState } from "react";
import bgShortenDesktop from "../../assets/bg-shorten-desktop.svg";
import bgShortenMobile from "../../assets/bg-shorten-mobile.svg";
import axios from "axios";

export default function Shorten() {
	const formRef = useRef(null);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	return (
		<div className="container mx-auto px-4 lg:px-0 mt-10 lg:-mt-24">
			<div className="w-full min-h-fit p-8 lg:p-16 bg-dark-violet relative rounded-lg overflow-hidden">
				<img
					src={bgShortenDesktop}
					alt="bg-shorten-desktop"
					className="w-full h-full hidden lg:inline absolute top-0 left-0 rounded-lg"
				/>
				<img
					src={bgShortenMobile}
					alt="bg-shorten-mobile"
					className="w-full h-full lg:hidden  absolute -top-10 -right-72 rounded-lg"
				/>
				<form
					ref={formRef}
					onSubmit={(e: React.SyntheticEvent) => {
						e.preventDefault();
						const target = e.target as typeof e.target & {
							url: { value: string };
						};
						const url = target.url.value;
						if (url === "") setError("Please add a link");
						if (localStorage.getItem("list")?.split(" ").includes(url))
							setError("Link already shortened");
						else if (url !== "") {
							setLoading(true);
							setError("");
							axios
								.post(`https://api.shrtco.de/v2/shorten?url=${url}`)
								.then((res) => {
									let list = localStorage.getItem("list") || "";
									let temp = localStorage.getItem("shorten") || "";
									if (list !== "") {
										list += " " + url;
									} else if (list === "") {
										list = url;
									}
									if (temp !== "") {
										temp += " " + res.data.result.short_link;
									} else if (temp === "") {
										temp = res.data.result.short_link;
									}
									localStorage.setItem("shorten", temp);
									localStorage.setItem("list", list);
									setLoading(false);
									window.location.href = "/";
								})
								.catch((err) => {
									console.log(err);
									setError(err.response.data.error);
								});
							return;
						}
					}}
					className="w-full h-full relative z-10"
				>
					<div className="flex flex-col lg:flex-row lg:justify-between justify-center space-y-8 lg:space-y-0 space-x-8 items-center ">
						<div className="flex flex-col w-full">
							<input
								type="text"
								className="h-16 p-4 text-very-dark-violet lg:text-xl rounded-lg"
								placeholder="Shorten a link here..."
								name="url"
							/>
							{error && <i className="text-red text-sm mt-2">{error}</i>}
						</div>
						<button
							type="submit"
							className="bg-cyan hover:bg-cyan/60 transition-all rounded-lg py-5 px-10 w-52 text-white font-bold"
						>
							{error !== "" ? "Shorten" : loading ? "Shortening..." : "Shorten"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
