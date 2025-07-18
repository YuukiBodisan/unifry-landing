import Image from "next/image";

export const Footer = () => {
	return (
		<footer>
			<div className='container'>
				<div className='footer-inner'>
					<div className='main-block'>
						<div className='column contact'>
							<Image src='/img/logo.png' alt='logo' width={117} height={34} />
							<p>help@frybix.com</p>
							<p>+1 234 456 678 89</p>
						</div>
						<div className='column-group'>
							<div className='column'>
								<h4>links</h4>
								<ul className='list'>
									<li>
										<a href='#features'>Features</a>
									</li>
									<li>
										<a href='#advatnages'>Advatnages</a>
									</li>
									<li>
										<a href='#testimonial'>Testimonial</a>
									</li>
									<li>
										<a href='#faq'>FAQ</a>
									</li>
								</ul>
							</div>
							<div className='column'>
								<h4>legal</h4>
								<ul className='list'>
									<li>
										<a href='#'>terms of use</a>
									</li>
									<li>
										<a href='#'>privacy policy</a>
									</li>
									<li>
										<a href='#'>cookie policy</a>
									</li>
								</ul>
							</div>
							<div className='column'>
								<h4>product</h4>
								<ul className='list'>
									<li>
										<a href='#'>take tour</a>
									</li>
									<li>
										<a href='#s'>live chat</a>
									</li>
									<li>
										<a href='#'>reveiws</a>
									</li>
								</ul>
							</div>
							<div className='column'>
								<h4>Newsletter</h4>
								<ul className='list'>
									<li>
										<a href='#'>Stay up to date</a>
									</li>
									<li>
										<a href='#'>Developing...</a>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className='fading-line'></div>

					<div className='copyright'>
						<h5>Copyright 2022 uifry.com all rights reserved</h5>
					</div>
				</div>
			</div>
		</footer>
	);
};
