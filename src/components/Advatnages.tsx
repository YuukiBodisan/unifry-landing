import Image from "next/image";

export const Advatnages = () => {
	return (
		<section className='advatnages' id='advatnages'>
			<div className='container'>
				<div className='advatnages-inner'>
					<div className='advatnages-block'>
						<div className='text-block'>
							<div className='title'>
								<h3>advatnages</h3>
								<h2>why choose Uifry?</h2>
							</div>
							<div className='item'>
								<h3>clever notifications</h3>
								<p>
									Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris
									etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
									sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam. Lorem ipsum
									dolor sit amet consectetur, adipisicing elit. Neque libero error modi unde ut repellendus dolores quam
									nemo quasi vel.
								</p>
							</div>
						</div>
						<div className='image-block'>
							<Image src='/img/phone-2.png' alt='phone' width={739} height={720} />
						</div>
					</div>

					<div className='advatnages-block'>
						<div className='image-block'>
							<Image src='/img/phone-3.png' alt='phone' width={720} height={720} />
						</div>
						<div className='text-block'>
							<div className='item'>
								<h3 className='second'>fully customizable</h3>
								<p>
									Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris
									etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
									sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam. Lorem ipsum
									dolor sit amet consectetur adipisicing elit. Atque eligendi cupiditate adipisci similique voluptatibus
									tempore rerum amet, facilis aliquid nisi optio dolorem hic cumque qui numquam molestias ratione quas!
									Iusto!
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
