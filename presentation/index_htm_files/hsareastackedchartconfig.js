var xaraSwidgets_HSAreaStackedChartTemplates = {

	entry:	'{title}',
	entry2:	'{theme}',
	entry3: '{csv}',
	entry5: '{style}',
	
	main:	 '<div id="{component_id}OuterDiv" class="">'
			+ '</div>'
	        
};

function xsw_ea_htmlbr(str)
{
    if (str == undefined)
        return '';
    var lines = str.split("\n");
    for (var t = 0; t < lines.length; t++) {
        lines[t] = $("<p>").text(lines[t]).html();
    }
    return lines.join("<br/>");
}


// this is the constructor for a component
// it loops through each 'entry' in the array of data and compiles the entry template for it
// it then applies the resulting HTML to the main template before writing the whole lot to the div on the page
// it then initialises the actual jquery plugin for the div (that now contains the required HTML as a result of writing the template to it)
function xaraSwidgets_HSAreaStackedChartConstructor(divID, data)
{
	var entryHTML = '';
	var entryHTML2 = '';
	var entryHTML3 = '';
	var entryHTML5 = '';
	
	// loop through each entry in the array and compile the entry template for it
	for(var i=0; i<data.length; i++)
	{
		
		entryHTML += xaraSwidgets_compileTemplate(xaraSwidgets_HSAreaStackedChartTemplates.entry, data[i]);	
		entryHTML2 += xaraSwidgets_compileTemplate(xaraSwidgets_HSAreaStackedChartTemplates.entry2, data[i]);	
		entryHTML3 += xaraSwidgets_compileTemplate(xaraSwidgets_HSAreaStackedChartTemplates.entry3, data[i]);	
		entryHTML5 += xaraSwidgets_compileTemplate(xaraSwidgets_HSAreaStackedChartTemplates.entry5, data[i]);	
	}
				
	
	// now lets compile the 'main' template which acts as a wrapper for each entry

			
	function trim(stringToTrim) {
	return stringToTrim.replace(/^\s+|\s+$/g,"");  //removes spaces
	}					
						
	var htmlString3 = trim(entryHTML3);//trim the string to be used for the csv data
	
	
	var mainData = {
		component_id:divID
//		entryhtml:htmlString
		
	};

	
	var mainTemplate = xaraSwidgets_compileTemplate(xaraSwidgets_HSAreaStackedChartTemplates.main, mainData);
	
	if (entryHTML2 ==1){
	var theme =	Highcharts.setOptions(xaraSwidgets_HSBarStackedChartAlternativeTheme1);
	}
	
	if (entryHTML2 ==2){
	var theme =	Highcharts.setOptions(xaraSwidgets_HSBarStackedChartAlternativeTheme2);
	}
	
	if (entryHTML2 ==3){
	var theme =	Highcharts.setOptions(xaraSwidgets_HSBarStackedChartAlternativeTheme3);
	}
	
	if (entryHTML2 ==4){
	var theme =	Highcharts.setOptions(xaraSwidgets_HSBarStackedChartAlternativeTheme4);
	}
	
	// now lets apply the resulting HTML for the whole component to the main DIV that was exported by XARA
	
	// work out the required dimensions
	var qr_height = $('#' + divID).parent('div').height()
	var qr_width = $('#' + divID).parent('div').width()
	
		
	$('#' + divID).html(mainTemplate);
	

	$('#' + divID).css('width',qr_width+'px');
	$('#' + divID).css('height',qr_height+'px')
	
			
						var options = {
				chart: {
					renderTo: divID,
					defaultSeriesType: 'area'
				},
				title: {
					text: entryHTML
				},
				xAxis: {
					categories: []
				},
				yAxis: {
					title: {
						text: entryHTML5
					}
				},
				credits: {
					enabled: false
				},
					
					
					
					plotOptions: {
						area: {
							stacking: 'normal',
							marker: {
								enabled: false,
								symbol: 'circle',
								radius: 2,
								states: {
									hover: {
										enabled: true
									}
								}
							}
						}
					},
					tooltip: {
						useHTML : true,
						formatter: function() {
							return '<b>'+ this.x +'</b><br/>'+
								 this.series.name +': '+ this.y;
						}
					},	

				series: []
			};
			
			/*
			 Load the data from the CSV file. This is the contents of the file:
			 
				Apples,Pears,Oranges,Bananas,Plums
				John,8,4,6,5
				Jane,3,4,2,3
				Joe,86,76,79,77
				Janet,3,16,13,15
				
			 */ 

			 //	var chart =divID + 'OuterDiv';
			datasort(options,htmlString3); // send the csv data and options to be processed
				
			
			try {
				
				Highcharts.setOptions(theme);
				var chart = new Highcharts.Chart(options);
				
			} catch (err) {
			
				
				
			}
			
			
		

}