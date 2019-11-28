
function App() {
  return (
    <div className="centered App">
      <div className="text-left">
        <h1 className="blend">Smart Bed</h1>
        <text className="blend">
          Ubiquitous Computing at UAH
        </text>
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
