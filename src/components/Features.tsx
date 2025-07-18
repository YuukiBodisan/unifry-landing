import Image from "next/image";

export const Features = () => {
	return (
		<section className='features' id='features'>
			<div className='container'>
				<div className='features-inner'>
					<div className='features-phone'>
						<Image src='/img/phone-1.png' alt='phone' width={720} height={720} />
					</div>
					<div className='features-text'>
						<div className='features-title'>
							<h3>features</h3>
							<h2>uifry premium</h2>
						</div>
						<div className='features-intervals'>
							<div className='features-item'>
								<h3>budgeting intervals</h3>
								<p>
									Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing
									sociis arcu lorem porttitor.
								</p>
							</div>
							<div className='features-item'>
								<h3>budgeting intervals</h3>
								<p>
									Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing
									sociis arcu lorem porttitor.
								</p>
							</div>
							<div className='features-item'>
								<h3>budgeting intervals</h3>
								<p>
									Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing
									sociis arcu lorem porttitor.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
