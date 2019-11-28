
function App() {
  return (
    <div className="centered App">
      <div className="text-left">
        <h1>Smart Bed</h1>
        Ubiquitous Computing at UAH
      </div>
      <div className="dropdown-divider"></div>
      <div className="text-center">
        <div className="small-margin">
          <PresentationButton />
        </div>
        <div className="dropdown-divider"></div>
        <div className="small-margin">
          <StoreButton />
        </div>
        <div className="dropdown-divider"></div>
        <div className="small-margin">
          <LikeButton />
        </div>
        <div className="dropdown-divider"></div>
      </div>
    </div>
  );
}
