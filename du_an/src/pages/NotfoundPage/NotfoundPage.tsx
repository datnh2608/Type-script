import Style from './Notfound.module.scss'; // Import CSS module

const Notfound = function () {
	return (
		<section className={Style.page_404}>
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<div className="col-sm-10 col-sm-offset-1 text-center">
							<div className={Style.four_zero_four_bg}>
								<h1 className="text-center">404</h1>
							</div>
							<div className={Style.contant_box_404}>
								<h3 className="h2">Look like you're lost</h3>
								<p>The page you are looking for is not available!</p>
								<a href="/" className={Style.link_404}>
									Go to Home
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Notfound;
