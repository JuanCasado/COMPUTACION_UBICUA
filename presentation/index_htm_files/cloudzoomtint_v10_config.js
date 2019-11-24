var xaraSwidgets_cloudZoomtint_v10Templates = {
	
	main:		'<div class="zoom-section" id="{component_id}OuterDiv">'
			+	'<div class="zoom-small-image">'
			+   '<a href="{firstimage}" class = "cloud-zoom" rel="tint: \'#000000\',tintOpacity:0.5, adjustY:-4, adjustX:10, smoothMove:5">'
			+   '<img style="border: none;" src="{firstsimage}" alt="{firstalt}" title="{firsttitle}" /></a>'
			+ 	'</div>'
			+	'<div class="zoom-desc"><p>'
			+	'</p></div></div>'

};

function xsw_czt_htmlbr(str) {
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
function xaraSwidgets_cloudZoomtint_v10Constructor(divID, data)
{
    // Convert the title text into HTML (just replace newlines with BRs)
    var title = xsw_czt_htmlbr(data[0].viewertext);

    // now lets compile the 'main' template which acts as a wrapper for each entry
    var mainData = {
        component_id: divID,
        firstimage: data[0].imagebig,
        firstsimage: data[0].imagesmall,
        firstalt: data[0].alt,
        firsttitle: title
    };

	var mainTemplate = xaraSwidgets_compileTemplate(xaraSwidgets_cloudZoomtint_v10Templates.main, mainData);

	// work out the required dimensions for width and height.
	//var height = $('#' + divID).parent('div').height()-4;
	var width = $('#' + divID).parent('div').width()-4;
	var height = Math.round(width *1.33);
	// now lets apply the resulting HTML for the whole component to the main DIV that was exported by XARA
	$('#' + divID).html(mainTemplate);
	$('#' + divID).find('.zoom-small-image').width(width);
	$('#' + divID).find('img').width(width).height(height);
	$('#' + divID).parent('div').css('overflow', 'visible');
	$('.cloud-zoom, .cloud-zoom-gallery').CloudZoom(); // ADDED
}
