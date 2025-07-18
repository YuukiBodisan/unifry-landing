import { Advatnages } from "@/components/Advatnages";
import { Decisions } from "@/components/Decisions";
import { Download } from "@/components/Download";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Testimonial } from "@/components/Testimonial";

export default function Home() {
	return (
		<>
			<Decisions />
			<Features />
			<Advatnages />
			<Testimonial />
			<FAQ />
			<Download />
		</>
	);
}
