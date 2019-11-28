var xaraSwidgets_zaccordioncTemplates = {

entry:		'<li>'
		+	'<img src="{image}" width="100%" height="100%" alt="" />'
		+	'<div class="slider-bg"></div>'
		+	'<div class="slider-info">'
//		+	'<img style="margin-left:15px; margin-top:10px;" src="{heading}" />'
		+	'<strong>{heading}</strong>'
		+	'<p class="slider-text">{content}</p>'
//		+	'<p class="slider-text"><img style="margin-left:15px; margin-top:10px;" src="{content}" /></p>'
		+	'</div>'
		+	'</li>',
		
		
trigger:	'{trigger}',
auto:		'{auto}',
pause:		'{pause}',
speed:		'{speed}',

main:		'<div id="{component_id}OuterDiv" class="">'
			+	'<ul id="slider" style="margin-top:0;">'
			+ 	'{entryhtml}'
			+	'</ul>'
			+	'</div>'
			
			
};


function xsw_cs_htmlbr(str) {
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
function xaraSwidgets_zaccordioncConstructor(divID, data)
{
	var entryHTML = '';
	
	// loop through each entry in the array and compile the entry template for it
	for(var i=1; i<data.length; i++)
	{
//	 data[i].desc = xsw_cs_htmlbr(data[i].desc);
	entryHTML += xaraSwidgets_compileTemplate(xaraSwidgets_zaccordioncTemplates.entry, data[i]);
	trigger = (data[0].trigger);
	auto = (data[0].auto);
	timeout = (data[0].timeout);
	speed = (data[0].speed);
	myTheme = (data[0].theme);
	}
	
	var defaultTrigger = 1;
		var enteredTrigger = parseInt(trigger);
		var trigger = isNaN(enteredTrigger) ? defaultTrigger : enteredTrigger
		var trigger = parseInt(trigger);
		if(!isNaN(trigger))
			{
			useTrigger = trigger;
			}	
		if (trigger ==1){
			trigger ='click'
			}
		else if (trigger ==2){
			trigger ='mouseover'
			}

		var defaultAuto = 1;
		var enteredAuto = parseInt(auto);
		var auto = isNaN(enteredAuto) ? defaultAuto : enteredAuto
		var auto = parseInt(auto);
		if(!isNaN(auto))
			{
			useAuto = auto;
			}	
		if (auto ==1){
			auto = true
			}
		else if (auto ==2){
			auto = false
			}

		// get the timeout value 	
		var enteredTimeout = parseInt(timeout)*1000;
		var defaultTimeout = '4500';
		var timeout = isNaN(enteredTimeout) ? defaultTimeout : enteredTimeout
		
		// get the speed value 
		var enteredSpeed = parseInt(speed)*1000;
		var defaultSpeed = '700';
		var speed = isNaN(enteredSpeed) ? defaultSpeed : enteredSpeed
	//	console.log(speed)
	//	console.log(timeout)
		


	
	//	entryHTML = xsw_ea_htmlbr(entryHTML);
	// now lets compile the 'main' template which acts as a wrapper for each entry
	
	var mainData = {
		component_id:divID,
		entryhtml:entryHTML,
		
	};
	
	var mainTemplate = xaraSwidgets_compileTemplate(xaraSwidgets_zaccordioncTemplates.main, mainData);
	
	// now lets apply the resulting HTML for the whole component to the main DIV that was exported by XARA
	
	
	$('#' + divID).html(mainTemplate);
	
	
	// get the theme color value 

		var defaultTheme = 0;
		var enteredTheme = parseInt(myTheme);
		var theme = isNaN(enteredTheme) ? defaultTheme : enteredTheme
//		var theme = parseInt(myTheme);
		if(!isNaN(theme))
			{
			useTheme = theme;
			}	
		if (theme ==1){
			var $p = $("<p class='xr_c_Theme_Color_1'></p>").hide().appendTo("body");
			var $p1 = $("<p class='xr_c_Light_Text'></p>").hide().appendTo("body");
				
			
			}
		else if (theme ==0){
			var $p = $("<p style='color:#000000'></p>").hide().appendTo("body");
			var $p1 = $("<p style='color:#ffffff'></p>").hide().appendTo("body");
			
			
			}
	
	
    
//	console.log(overcolor);
		var overcolor = $p.css("color");
		var defaultovercolor = '#000';
		var enteredovercolor = overcolor;
		
		if (enteredovercolor !== 'rgb(0, 0, 0)')
		{
		var overcolor= enteredovercolor
		}
		else 
		{
		var overcolor= defaultovercolor;
		}
		
		if($.browser.msie && document.documentMode && document.documentMode <= 8) {
    		// ie less than version 9
    		if (enteredovercolor !== '#000000' )
			{
			var overcolor= enteredovercolor
			}
			else 
			{
			var overcolor= defaultovercolor;
			}

		}

    $p.remove();
	// get the panel color value 
	
	var panelcolor = $p1.css("color");
	
	var defaultpanelcolor = '#ffffff';
	var enteredpanelcolor = panelcolor;
	
		
		if (enteredpanelcolor !== 'rgb(0, 0, 0)')

		{
		var panelcolor= enteredpanelcolor
		}
		else 
		{
		var panelcolor= defaultpanelcolor;
		}

		if($.browser.msie && document.documentMode && document.documentMode <= 8) {
    		// ie less than version 9
    		if (enteredpanelcolor !== '#000000' )
			{
			var overcolor= enteredpanelcolor
			}
			else 
			{
			var overcolor= defaultpanelcolor;
			}

		}
		
//	console.log(panelcolor);
    $p1.remove();
	
	

	// get the dimensions of the parent div  
	
	var width = $('#' + divID).parent('div').width();
	//var height = $('#' + divID).parent('div').height();
	var height1 = Math.round(width*33.11/100);

	
// write the css values to the doc  
/*	
	$('#' + divID).css('height',height);
	$('#' + divID).css('width',width);
	$('head').append("<style>."+ divID +"InnerDiv {background: url(arrow.png) -1px 40px no-repeat "+overcolor+"}</style>");	
	$('head').append("<style>#"+ divID +"OuterDiv {border:"+panelcolor+" solid 10px;}</style>");						
	//	$('#' + divID + 'OuterDiv').css('border' ,panelcolor+'solid 10px');
	$('head').append("<style>."+ divID +"InnerDiv {top: "+ panel +"; left: 0;}</style>");	
*/
$('head').append("<style>#"+ divID +"OuterDiv #slider {z-index:0;}</style>");	

$('head').append("<style>#"+ divID +"OuterDiv #slider div.slider-bg {background:"+overcolor+";bottom:0px; height:25%;width:100%;left:0;position:absolute;z-index:10;opacity:.5;}</style>");	
$('head').append("<style>#"+ divID +"OuterDiv #slider .slider-closed div.slider-info {bottom:-20px;height:25%;left:0;position:absolute;width:65px;z-index:15;padding:15px;}</style>");
$('head').append("<style>#"+ divID +"OuterDiv #slider .slider-open div.slider-info {bottom:-20px;height:25%;left:0;position:absolute;width:90%;z-index:15;padding:15px;}</style>");
$('head').append("<style>#"+ divID +"OuterDiv #slider .slider-closed p {display:none;font-size:11px;line-height:14px;text-shadow:none;color:"+panelcolor+";margin:0 !important;}</style>");
$('head').append("<style>#"+ divID +"OuterDiv p {font-size:12px;line-height:14px;text-shadow:none;margin:0 !important;}</style>");

$('head').append("<style>#"+ divID +"OuterDiv #slider .slider-closed strong {font-size:12px; margin-bottom:5px;}</style>");
$('head').append("<style>#"+ divID +"OuterDiv #slider .slider-open strong {font-size:22px;}</style>");

	// invoke the effect 
		$('#' + divID + 'OuterDiv #slider' ).zAccordion({
						
					auto: auto,
					tabWidth: "10%",
					width: "100%",
					timeout: timeout,
					speed: speed,
					slideClass: "slider",
					animationStart: function() {
					$('#' + divID + 'OuterDiv #slider').find("li.slider-open div.slider-info").css("display", "none");
					$('#' + divID + 'OuterDiv #slider').find("li.slider-previous div.slider-info").css("display", "none");
					},
					animationComplete: function() {
					$('#' + divID + 'OuterDiv #slider').find("li.slider-open div.slider-info").fadeIn(600);
					$('#' + divID + 'OuterDiv #slider').find("li.slider-previous div.slider-info").fadeIn(600);
					},
					height: height1,
					trigger: trigger
				});	//write some css
			//		$('#' + divID + 'OuterDiv #splash' ).find("li.slide-closed div").css("display", "none");
			
					$('#' + divID + 'OuterDiv #slider' ).find("li").css("overflow", "visible !important");
					$('#' + divID + 'OuterDiv #slider strong' ).css("color" ,panelcolor);
					$('#' + divID + 'OuterDiv #slider strong' ).css("margin-bottom" ,"5px");
					$('#' + divID + 'OuterDiv #slider p' ).css("color" ,panelcolor);
//					$('#' + divID + 'OuterDiv #slider .slider-closed' ).css("margin-bottom" ,"5px");
//					$('#' + divID + 'OuterDiv #slider .slider-closed strong' ).css("font-size" ,"12px");
//					$('#' + divID + 'OuterDiv #slider strong' ).css("font-size" ,"18px");
//					$('#' + divID + 'OuterDiv #slider .slider-open strong' ).css("font-size" ,"22px");
					$('#' + divID + 'OuterDiv #slider .slider-open strong' ).css("color" ,panelcolor);
						
				
							
					
			}		
