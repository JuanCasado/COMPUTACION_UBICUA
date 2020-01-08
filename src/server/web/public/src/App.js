
function App() {
	return (
		<div className="centered App">
			<div id="menu" className="start-menu">
				<div>
					<h1 className="main-title">Smart <b className="blue-title">Bed</b> </h1>
					<p className="sub-title">Ubiquitous Computing at UAH</p>
				</div>
				<div className="text-center">
					<div className="dropdown-divider"></div>
					<div className="small-margin">
						<ApplicationButton />
					</div>
					<div className="dropdown-divider">
					</div>
					<div className="small-margin">
						<PresentationButton />
					</div>
					<div className="dropdown-divider"></div>
					<div className="small-margin">
						<PresentationButton2 />
					</div>
					<div className="dropdown-divider"></div>
					<div className="small-margin">
						<StoreButton />
					</div>
					<div className="dropdown-divider"></div>
					<div className="small-margin">
						<LikeButton />
					</div>
				</div>
			</div>
		</div>
	);
}
