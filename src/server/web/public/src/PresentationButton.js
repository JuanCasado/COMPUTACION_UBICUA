

class PresentationButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="btn btn-primary btn-lg"
              onClick={()=>{
                window.open("http://163.172.80.168/presentation/index.htm")
              }}>
        Presentation
      </button>
    );
  }
}