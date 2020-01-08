

class PresentationButton2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="btton btton-presentation"
              onClick={()=>{
                window.open("http://163.172.80.168/presentation2/index.htm")
              }}>
        Presentation 2
        <i className="fas fa-play-circle tab"></i>
      </button>
    );
  }
}