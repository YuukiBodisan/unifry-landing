"use client";

import Image from "next/image";
import { AvatarSelector } from "./AvatarSelector";

export const Testimonial = () => {
	return (
		<section className='testimonial' id='testimonial'>
			<div className='container'>
				<div className='testimonial-inner'>
					<div className='title-block'>
						<h3>testimonial</h3>
						<h2>what our users say about us?</h2>
					</div>
					<div className='main-block'>
						<Image src='/img/people.png' alt='people' width={719} height={719} />
						<div className='text-block'>
							<h3>the best financial accounting app ever!</h3>
							<p>
								“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris
								etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
								sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”
							</p>
							<AvatarSelector />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
