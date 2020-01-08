

class PresentationButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="btton btton-presentation"
              onClick={()=>{
                window.open("http://163.172.80.168/presentation1/index.htm")
              }}>
        Presentation 1
        <i className="fas fa-play-circle tab"></i>
      </button>
    );
  }
}