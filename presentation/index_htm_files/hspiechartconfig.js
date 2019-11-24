var xaraSwidgets_HSPieChartTemplates = {

	entry:	'{title}',
	entry2:	'{theme}',
	entry3: '{csv}',
	
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
function xaraSwidgets_HSPieChartConstructor(divID, data)
{
	var entryHTML = '';
	var entryHTML2 = '';
	var entryHTML3 = '';
	
	// loop through each entry in the array and compile the entry template for it
	for(var i=0; i<data.length; i++)
	{
		
		entryHTML += xaraSwidgets_compileTemplate(xaraSwidgets_HSPieChartTemplates.entry, data[i]);	
		entryHTML2 += xaraSwidgets_compileTemplate(xaraSwidgets_HSPieChartTemplates.entry2, data[i]);	
		entryHTML3 += xaraSwidgets_compileTemplate(xaraSwidgets_HSPieChartTemplates.entry3, data[i]);	
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

	
	var mainTemplate = xaraSwidgets_compileTemplate(xaraSwidgets_HSPieChartTemplates.main, mainData);
	
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
					defaultSeriesType: 'pie',
					plotBorderWidth: null,
					plotShadow: false
				},
				title: {
					text: entryHTML
				},
				tooltip: {
				useHTML : true,
				formatter: function() {
				return '<b>'+ this.point.name +'</b>: '+ Math.round (this.percentage) +' %';
			}
			},
				credits: {
					enabled: false
				},
				
				plotOptions: {
						pie: {
							allowPointSelect: true,
							cursor: 'pointer',
							dataLabels: {
								enabled: false
							},
							showInLegend: true
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
		//	datasort(options,entryHTML3); // send the csv data and options to be processed
		
	//	$.get('piedata.csv', function(data) {
      // Split the lines
	  var data = htmlString3;
      var lines = data.split('\n');
				
      var series = {
         data: []
      };
      
      // Iterate over the lines and add categories or series
      $.each(lines, function(lineNo,line) {
         var items = line.split(',');
         
         series.data.push({
            type:'pie',
            name: items[0],
            y:parseFloat(items[1])
         });
      });
      
      options.series.push(series);
				
			
			try {
				
				Highcharts.setOptions(theme);
				var chart = new Highcharts.Chart(options);
				
			} catch (err) {
			
				
				
			}
			
			
		

}