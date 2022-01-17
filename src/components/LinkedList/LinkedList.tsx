import React, { useEffect, useState } from "react";

let getShorten: string[] = [];
let getList: string[] = [];

export default function LinkedList() {
	const [shorten, setShorten] = useState<string[]>([]);
	const [list, setList] = useState<string[]>([]);
	const [copySuccess, setCopySuccess] = useState<string[]>([]);

	async function copyToClipboard(e: React.SyntheticEvent) {
		const target = e.target as HTMLTextAreaElement;
		await navigator.clipboard.writeText(target.id);
		// change copy success text for 2 seconds
		setCopySuccess([...copySuccess, target.id]);
		setTimeout(() => {
			setCopySuccess(copySuccess.filter((item) => item !== target.id));
		}, 1000);
	}

	useEffect(() => {
		getShorten = localStorage.getItem("shorten")?.split(" ") || [];
		getList = localStorage.getItem("list")?.split(" ") || [];
		setShorten(getShorten);
		setList(getList);
	}, []);

	return (
		<div className="flex flex-col justify-center mt-10 container mx-auto px-4 lg:px-0 ">
			{shorten.map((item, index) => (
				<div
					key={index}
					className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:justify-between bg-white rounded-xl lg:px-4 py-4 m-2"
				>
					<div className="text-center overflow-clip border-b border-b-gray/50 lg:border-b-transparent pb-4 lg:pb-0">
						<p className="text-lg text-very-dark-blue font-medium">
							{list[index]}
						</p>
					</div>
					<div className="flex flex-col space-y-2 lg:flex-row lg:space-y-0 lg:space-x-8 items-center">
						<p className="text-cyan text-lg ">{item}</p>
						<button
							id={item}
							onClick={(e) => copyToClipboard(e)}
							className="py-2 px-4 bg-cyan hover:bg-dark-violet transition-all rounded-xl text-white font-bold"
						>
							{copySuccess.includes(item) ? "Copied!" : "Copy"}
						</button>
					</div>
				</div>
			))}
		</div>
	);
}
