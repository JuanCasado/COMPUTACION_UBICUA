

class PresentationButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="btn btn-primary btn-lg"
              onClick={()=>{
                window.open("http://localhost/163.172.80.168/index.htm")
              }}>
        Presentation
      </button>
    );
  }
}