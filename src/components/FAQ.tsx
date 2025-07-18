import Image from "next/image";

export const FAQ = () => {
	return (
		<section className='faq' id='faq'>
			<div className='container'>
				<div className='faq-inner'>
					<Image src='/img/icons/star-decor.svg' alt='star' width={64} height={64} className='star-decor' />
					<div className='title'>
						<h3>faq</h3>
						<h2>Frequently asked questions</h2>
					</div>
					<div className='main-block'>
						<div className='first'>
							<div className='text'>
								<div className='text-inner'>
									<h3>the best financial accounting app ever!</h3>
									<p>
										“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit
										mauris.
									</p>
								</div>
							</div>
							<div className='text'>
								<div className='text-inner'>
									<h3>the best financial accounting app ever!</h3>
									<p>
										“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit
										mauris.
									</p>
								</div>
							</div>
							<div className='text'>
								<div className='text-inner'>
									<h3>the best financial accounting app ever!</h3>
									<p>
										“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit
										mauris.
									</p>
								</div>
							</div>
						</div>

						<div className='second'>
							<div className='text'>
								<div className='text-inner'>
									<h3>the best financial accounting app ever!</h3>
									<p>
										“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit
										mauris.
									</p>
								</div>
							</div>
							<div className='text'>
								<div className='text-inner'>
									<h3>the best financial accounting app ever!</h3>
									<p>
										“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit
										mauris.
									</p>
								</div>
							</div>
							<div className='text'>
								<div className='text-inner'>
									<h3>the best financial accounting app ever!</h3>
									<p>
										“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit
										mauris.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
