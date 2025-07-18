import Image from "next/image";

export const Decisions = () => {
	return (
		<section className='decisions' id='home'>
			<div className='container'>
				<div className='decisions-inner'>
					<div className='decisions-text'>
						<div className='red-yellow'></div>
						<h1>make the best financial decisions</h1>
						<p>
							Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis
							arcu lorem porttitor.
						</p>
						<button className='decisions-btn'>Get Started</button>
						<Image src='/img/line-info.png' alt='line' width={569} height={390} />
					</div>
					<div className='decisions-phones'>
						<Image src='/img/three-phones.png' alt='phones' width={738} height={791} />
					</div>
				</div>
			</div>
		</section>
	);
};
