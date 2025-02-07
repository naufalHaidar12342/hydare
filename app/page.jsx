import Image from "next/image";
import FlipWords from "./components/FlipWords";

export default function Home() {
	const listOfWords = [
		"company profile",
		"product catalog",
		"lovely blog",
		"social links",
	];
	return (
		<section className="min-h-screen flex flex-col items-center py-10 px-8 font-[family-name:var(--font-geist-sans)]">
			this is test
			<div className="flex flex-col text-4xl">
				<span>
					Making your
					<FlipWords words={listOfWords} />
					<br />
				</span>
				<span>comes true, one at a time.</span>
			</div>
		</section>
	);
}
