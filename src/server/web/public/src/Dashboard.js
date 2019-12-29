
class Dashboard extends React.Component {
  sleepRef = React.createRef();
  tempRef = React.createRef();
  noiseRef = React.createRef();
  humidityRef = React.createRef();

  componentDidMount() {
    this.sleepBar();
    this.tempBar();
    this.noiseBar();
    this.humidityBar();
  }
  

  sleepBar = () => {
    var birdsData = {
      labels: ["Sleeped","Max","Min","Last Week"],
      datasets: [{
        data: [8.5, 9, 7, 8.33],
        backgroundColor: [
          "#003f5c",
          "#f95d6a",
          "#ffa600",
          "#665191"
        ]
      }]
    };
     
    this.myChart = new Chart(this.sleepRef.current, {
      type: 'polarArea',
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Sleep time and recommendations'
        }
      },
      data: birdsData
    });
  };
  tempBar = () => {
    this.myChart = new Chart(this.tempRef.current, {
      type: 'line',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Temperature in the room'
        },
			  maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                min: 5,
                max: 30
              }
            }
          ]
        },
        annotation: {
          annotations: [{
            borderDash: [3, 3],
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y-axis-0',
            value: 12,
            borderColor: '#3D5A6C',
            borderWidth: 3,
            label: {
              position: "right",
              fontSize: 8,
              enabled: true,
              content: 'Minimum'
            }
          },{
            borderDash: [3, 3],
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y-axis-0',
            value: 24,
            borderColor: '#DB5461',
            borderWidth: 3,
            label: {
              position: "left",
              fontSize: 8,
              enabled: true,
              content: 'Maximum'
            }
          }  
        ]
        }
      },
      data: {
        labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
        datasets: [{
          label: "Temperature in celsius",
          data: [16,17,15,14,19,20,24,21,22,17,18,16,17,19,21,22,24,26,23,21,19,18,16,15],
          fill: 'none',
          backgroundColor: ["#003f5c"],
          pointRadius: 2,
          borderColor: ["#003f5c"],
          borderWidth: 1,
          lineTension: 0
        }]
      }
    });
  }
  humidityBar = () => {
    this.humidityChart = new Chart( this.humidityRef.current, {
      type: 'bar',
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 100
              }
            }
          ]
        },
        annotation: {
          annotations: [{
            borderDash: [3, 3],
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y-axis-0',
            value: 30,
            borderColor: '#3D5A6C',
            borderWidth: 3,
            label: {
              position: "right",
              fontSize: 8,
              enabled: true,
              content: 'Minimum'
            }
          },{
            borderDash: [3, 3],
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y-axis-0',
            value: 50,
            borderColor: '#DB5461',
            borderWidth: 3,
            label: {
              position: "left",
              fontSize: 8,
              enabled: true,
              content: 'Maximum'
            }
          }  
        ]
        },
        responsive: true,
	      maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Humidity in the room'
        },
        
      },
      data: {
        labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
        datasets: [{
          label: "Humidity percentage",
          data: [25,24,26,28,30,25,24,26,25,30,30,24,26,27,30,30,24,26,28,39,40,50,40,40],
          backgroundColor: ["#003f5c","#2f4b7c","#665191","#a05195","#d45087","#f95d6a","#ff7c43","#ffa600","#003f5c","#2f4b7c","#665191","#a05195","#d45087","#f95d6a","#ff7c43","#ffa600","#003f5c","#2f4b7c","#665191","#a05195","#d45087","#f95d6a","#ff7c43","#ffa600"]
        }]
      }
    });
  };
  noiseBar = () => {
    this.noiseChart = new Chart( this.noiseRef.current, {
      type: 'bar',
      options: {
        responsive: true,
	      maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Sounds in the room'
        },        
        annotation: {
          annotations: [{
            borderDash: [3, 3],
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y-axis-0',
            value: 50,
            borderColor: '#DB5461',
            borderWidth: 3,
            label: {
              position: "left",
              fontSize: 8,
              enabled: true,
              content: 'Maximum'
            }
          }  
        ]
        }
      },
      data: {
        labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
        datasets: [{
          label: "Sound decibel",
          data: [33,34, 27, 55, 39, 20, 21, 53, 54, 29, 29, 24, 33, 39, 38, 33, 54, 28, 21, 16, 56, 43, 45, 39],
          backgroundColor: ["#003f5c","#2f4b7c","#665191","#a05195","#d45087","#f95d6a","#ff7c43","#ffa600","#003f5c","#2f4b7c","#665191","#a05195","#d45087","#f95d6a","#ff7c43","#ffa600","#003f5c","#2f4b7c","#665191","#a05195","#d45087","#f95d6a","#ff7c43","#ffa600"]
        }]
      }
    });
  };
  render() {
    const mainPage = (
    <div className="bg">
      	<div className="top-menu">
					<h1 className="main-title">Smart <b className="blue-title">Bed</b> </h1> 
					<p className="sub-title">Ubiquitous Computing at UAH</p>
				</div>
         <div className="main chart-wrapper">
         <canvas ref={this.humidityRef}  ></canvas>
        </div>
        <div className="sub chart-wrapper">
        <canvas ref={this.tempRef}></canvas>
        </div>
        <div className="sub chart-wrapper">
        <canvas ref={this.noiseRef}></canvas>
        </div>
        <div className="sub chart-wrapper">
        <canvas ref={this.sleepRef}></canvas>
        </div>
    </div>
    );
    return mainPage;
  }
}