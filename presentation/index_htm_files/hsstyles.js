/**
 * Grid theme for Highcharts JS
 * @author Torstein Hønsi
 */

 xaraSwidgets_HSBarStackedChartAlternativeTheme1 = {
	colors: [ '#4572A7', '#AA4643', '#89A54E', '#80699B', '#3D96AE', '#DB843D', '#92A8CD', '#A47D7C', '#B5CA92' ],
	chart: {
		backgroundColor: '#fff',
		borderWidth: 0,
		plotBackgroundColor: '#fff',
		plotBorderWidth: 0,
		plotShadow: false
		

		},
		xAxis: {
					gridLineWidth: 0,
					lineWidth: 0,
					tickColor: '#666',
					
					labels: {
						style: {
								color: '#666'
								}
							},
	
					title: 	{
							
							style: {
								color: '#6d869f'
								   }
							}
					},
					
			yAxis: {
					minorTickInterval: null,
					min: 0,
					lineWidth: 0,
					gridLineColor: '#C0C0C0',
					tickWidth: 0
			
				},			
		
			title: {
					style: {
							color: '#3e576f'
							}
					},
					
			tooltip: {
					backgroundColor: 'rgba(255, 255, 255, .85)',
					borderColor: null,
					borderWidth:2,
					style: {
					color: '#000'
						}
					},		
		
			legend: {
					backgroundColor: '#FFFFFF',
					itemStyle: {
								color: 'black'
								},
					itemHoverStyle: {
								color: '#039'
								},
					itemHiddenStyle: {
								color: 'gray'
								}
						},
					labels: {
						style: {
								color: '#99b'
								}
					}
		
	};
// Apply the theme
//var highchartsOptions = Highcharts.setOptions(Highcharts.theme);
 
 xaraSwidgets_HSBarStackedChartAlternativeTheme2 = {
 colors: ["#DDDF0D", "#7798BF", "#55BF3B", "#DF5353", "#aaeeee", "#ff0066", "#eeaaee",
		"#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
	chart: {
		backgroundColor: {
			linearGradient: [0, 0, 0, 400],
			stops: [
				[0, 'rgb(96, 96, 96)'],
				[1, 'rgb(16, 16, 16)']
			]
		},
		borderWidth: 0,
		borderRadius: 15,
		plotBackgroundColor: null,
		plotShadow: false,
		plotBorderWidth: 0
	},
	title: {
		style: {
			color: '#FFF'
		}
	},
	subtitle: {
		style: {
			color: '#DDD'
		}
	},
	xAxis: {
		gridLineWidth: 0,
		lineColor: '#999',
		tickColor: '#999',
		labels: {
			style: {
				color: '#999',
				fontWeight: 'bold'
			}
		},
		title: {
			style: {
				color: '#AAA'
			}
		}
	},
	yAxis: {
		alternateGridColor: null,
		minorTickInterval: null,
		gridLineColor: 'rgba(255, 255, 255, .1)',
		lineWidth: 0,
		tickWidth: 0,
		labels: {
			style: {
				color: '#999',
				fontWeight: 'bold'
			}
		},
		title: {
			style: {
				color: '#AAA'
			}
		}
	},
	legend: {
	backgroundColor: 'none',
		itemStyle: {
			color: '#E0E0E0'
		},
		itemHoverStyle: {
			color: 'white'
		},
		itemHiddenStyle: {
			color: 'gray'
		}
	},
	labels: {
		style: {
			color: '#99b'
		}
	},
	tooltip: {	
		backgroundColor: {
			linearGradient: [0, 0, 0, 50],
			stops: [
				[0, 'rgba(96, 96, 96, .8)'],
				[1, 'rgba(16, 16, 16, .8)']
			]
		},
		borderWidth: 0,
		style: {
			color: '#FFF'
		}
	},


	plotOptions: {
		line: {
			dataLabels: {
				color: '#CCC'
			},
			marker: {
				lineColor: '#333'
			}
		},
		spline: {
			marker: {
				lineColor: '#333'
			}
		},
		scatter: {
			marker: {
				lineColor: '#333'
			}
		},
		candlestick: {
			lineColor: 'white'
		}
	},

	toolbar: {
		itemStyle: {
			color: '#CCC'
		}
	},

	navigation: {
		buttonOptions: {
			backgroundColor: {
				linearGradient: [0, 0, 0, 20],
				stops: [
					[0.4, '#606060'],
					[0.6, '#333333']
				]
			},
			borderColor: '#000000',
			symbolStroke: '#C0C0C0',
			hoverSymbolStroke: '#FFFFFF'
		}
	},

	exporting: {
		buttons: {
			exportButton: {
				symbolFill: '#55BE3B'
			},
			printButton: {
				symbolFill: '#7797BE'
			}
		}
	},

	// scroll charts
	rangeSelector: {
		buttonTheme: {
			fill: {
				linearGradient: [0, 0, 0, 20],
				stops: [
					[0.4, '#888'],
					[0.6, '#555']
				]
			},
			stroke: '#000000',
			style: {
				color: '#CCC',
				fontWeight: 'bold'
			},
			states: {
				hover: {
					fill: {
						linearGradient: [0, 0, 0, 20],
						stops: [
							[0.4, '#BBB'],
							[0.6, '#888']
						]
					},
					stroke: '#000000',
					style: {
						color: 'white'
					}
				},
				select: {
					fill: {
						linearGradient: [0, 0, 0, 20],
						stops: [
							[0.1, '#000'],
							[0.3, '#333']
						]
					},
					stroke: '#000000',
					style: {
						color: 'yellow'
					}
				}
			}
		},
		inputStyle: {
			backgroundColor: '#333',
			color: 'silver'
		},
		labelStyle: {
			color: 'silver'
		}
	},

	navigator: {
		handles: {
			backgroundColor: '#666',
			borderColor: '#AAA'
		},
		outlineColor: '#CCC',
		maskFill: 'rgba(16, 16, 16, 0.5)',
		series: {
			color: '#7798BF',
			lineColor: '#A6C7ED'
		}
	},

	scrollbar: {
		barBackgroundColor: {
				linearGradient: [0, 0, 0, 20],
				stops: [
					[0.4, '#888'],
					[0.6, '#555']
				]
			},
		barBorderColor: '#CCC',
		buttonArrowColor: '#CCC',
		buttonBackgroundColor: {
				linearGradient: [0, 0, 0, 20],
				stops: [
					[0.4, '#888'],
					[0.6, '#555']
				]
			},
		buttonBorderColor: '#CCC',
		rifleColor: '#FFF',
		trackBackgroundColor: {
			linearGradient: [0, 0, 0, 10],
			stops: [
				[0, '#000'],
				[1, '#333']
			]
		},
		trackBorderColor: '#666'
	},

	// special colors for some of the demo examples
	legendBackgroundColor: 'rgba(48, 48, 48, 0.8)',
	legendBackgroundColorSolid: 'rgb(70, 70, 70)',
	dataLabelsColor: '#fff',
	textColor: '#E0E0E0'
//	maskColor: 'rgba(255,255,255,0.3)'
};
 
 
xaraSwidgets_HSBarStackedChartAlternativeTheme3 = {
	colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
	chart: {
		backgroundColor: {
			linearGradient: [0, 0, 500, 500],
			stops: [
				[0, 'rgb(255, 255, 255)'],
				[1, 'rgb(240, 240, 255)']
			]
		},
		borderWidth: 2,
		plotBorderWidth: 1,
		plotBackgroundColor: 'rgba(255, 255, 255, .9)',
		plotShadow: true
		
	},
	title: {
		style: {
			color: '#000'
		}
	},
	subtitle: {
		style: {
			color: '#666666'
		}
	},
	xAxis: {
		gridLineWidth: 1,
		lineColor: '#000',
		tickColor: '#000',
		labels: {
			style: {
				color: '#000'
			}
		},
		title: {
			style: {
				color: '#333',
				fontWeight: 'bold',
				fontSize: '12px'

			}
		}
	},
	yAxis: {
		minorTickInterval: 'auto',
		lineColor: '#000',
		lineWidth: 1,
		tickWidth: 1,
		tickColor: '#000',
		gridLineColor: '#C0C0C0',
		labels: {
			style: {
				color: '#000'
			}
		},
		title: {
			style: {
				color: '#333',
				fontWeight: 'bold',
				fontSize: '12px'
			}
		}
	},
	
	tooltip: {
					backgroundColor: 'rgba(255, 255, 255, .85)',
					borderColor: null,
					borderWidth:2,
					style: {
					color: '#000'
						}
			},			
	legend: {
		backgroundColor: '#FFFFFF',

		itemStyle: {
			color: 'black'

		},
		itemHoverStyle: {
			color: '#039'
		},
		itemHiddenStyle: {
			color: 'gray'
		}
	},
	labels: {
		style: {
			color: '#99b'
		}
	}
};
// Apply the theme
//var highchartsOptions = Highcharts.setOptions(Highcharts.theme);

xaraSwidgets_HSBarStackedChartAlternativeTheme4 = {
	
	colors: [ '#4572A7', '#AA4643', '#89A54E', '#80699B', '#3D96AE', '#DB843D', '#92A8CD', '#A47D7C', '#B5CA92' ],
	chart: {
		backgroundColor: 'none',
		borderWidth: 0,
		plotBackgroundColor: 'none',
		plotBorderWidth: 0,
		plotShadow: false
		

		},
		xAxis: {
					gridLineWidth: 0,
					lineWidth: 0,
					tickColor: '#666',
					
					labels: {
						style: {
								color: '#666'
								}
							},	
						title: {
							text: null,
							style: {
								color: '#6d869f',
								fontWeight: 'notrmal',
								fontSize: '12px'
								}
							}
					},
					
			yAxis: {
					minorTickInterval: null,
					min: 0,
					lineWidth: 0,
					tickWidth: 0,
					gridLineColor: '#C0C0C0',
					title: {
						
						style: {
								color: '#6d869f',
								fontWeight: 'bold',
								fontSize: '12px'
								}
							}
			
				},			
		
		title: {
			style: {
				color: '#3e576f'
				
			}
		},
		tooltip: {
					backgroundColor: 'rgba(255, 255, 255, .85)',
					borderColor: null,
					borderWidth:2,
					style: {
					color: '#000'
						}
					},			
		
		legend: {
		backgroundColor: 'none',
		itemStyle: {
			color: 'black'

		},
		itemHoverStyle: {
			color: '#039'
		},
		itemHiddenStyle: {
			color: 'gray'
		}
	},
	labels: {
		style: {
			color: '#99b'
		}
	}
		
	};
// Apply the theme
//var highchartsOptions = Highcharts.setOptions(Highcharts.theme);

