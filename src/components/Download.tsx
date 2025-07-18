import Image from "next/image";

export const Download = () => {
	return (
		<section className='download'>
			<div className='container'>
				<div className='download-inner'>
					<Image src='/img/icons/red-yellow.svg' alt='red-yellow' width={427} height={427} className='red-yellow' />
					<Image src='/img/lines-radius.png' alt='lines' width={409} height={309} className='lines-radius' />
					<Image src='/img/icons/star-decor-white.svg' alt='star' width={64} height={64} className='star-decor' />
					<Image src='/img/icons/star-decor-white.svg' alt='star' width={48} height={48} className='star-decor-2' />

					<div className='title'>
						<h2>ready to get started?</h2>
						<p>Risus habitant leo egestas mauris diam eget morbi tempus vulputate.</p>
						<button>download app</button>
					</div>
					<Image src='/img/phones.png' alt='phones' width={591} height={509} className='phones' />
				</div>
			</div>
		</section>
	);
};
