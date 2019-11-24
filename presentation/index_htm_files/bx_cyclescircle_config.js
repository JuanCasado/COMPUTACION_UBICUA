var xaraSwidgets_cycleCircleTemplates = {


    entry:      '<a href="{link}"><img class="{com_id}_image" src="{image1}"  border="none"  /></a>',
    entry1:     '<a href="{link}"><span style="background:url({image}) 0px 0px no-repeat; border-radius: 50%;" class="{com_id}_image" ></span></a>',
    
   


    main:   '<div id="{component_id}OuterDiv" class="cycleCircle" >'
        +   '{entryhtml}'
        +   '</div>'

   
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

function xaraSwidgets_cycleCircleGetConfig(value, d)
{
    var ret = parseInt(value);

    if(!isNaN(ret))
    {
        return ret;
    }
    else
    {
        return d;
    }
}


// this is the constructor for a component
// it loops through each 'entry' in the array of data and compiles the entry template for it
// it then applies the resulting HTML to the main template before writing the whole lot to the div on the page
// it then initialises the actual jquery plugin for the div (that now contains the required HTML as a result of writing the template to it)
function xaraSwidgets_cycleCircleConstructor(divID, data)
{
    var entryHTML = '';
    var entryHTML1 = '';
  

    timeout = (data[0].pause);
    speed = (data[0].speed);

    var config = data[0];

    var useTransition = xaraSwidgets_cycleCircleGetConfig(config.effect, 0);

    var effects = [

        
        'fade',
        'fadeZoom',
        'shuffle',
        'toss'
       

    ];

    var effectName = effects[useTransition];

    // loop through each entry in the array and compile the entry template for it
    for(var i=1; i<data.length; i++)
    {
        data[i].desc = xsw_cs_htmlbr(data[i].desc);
        entryHTML += xaraSwidgets_compileTemplate(xaraSwidgets_cycleCircleTemplates.entry, data[i]);
        entryHTML1 += xaraSwidgets_compileTemplate(xaraSwidgets_cycleCircleTemplates.entry1, data[i]);
       
    }



    var com1_id=divID;
//  entryHTML = xsw_ea_htmlbr(entryHTML);
    // now lets compile the 'main' template which acts as a wrapper for each entry

    // get the timeout value
    var enteredTimeout = parseFloat(timeout)*1000;
    var defaultTimeout = '5000';
    var timeout = isNaN(enteredTimeout) ? defaultTimeout : enteredTimeout;

    // get the speed value
    var enteredSpeed = parseFloat(speed)*1000;
    var defaultSpeed = '700';
    var speed = isNaN(enteredSpeed) ? defaultSpeed : enteredSpeed;


    //set main data depending on whether were using the img or span
    if($.browser.msie && document.documentMode && document.documentMode <=8)

     {

        var mainData = {
        component_id:divID,
        entryhtml:entryHTML,
        com_id:com1_id
        };
     }


     else if (effectName === 'fadeZoom')
     {
        var mainData = {
        component_id:divID,
        entryhtml:entryHTML,
        com_id:com1_id
        }; 
     }   
    
    else
    {
        var mainData = {
        component_id:divID,
        entryhtml:entryHTML1,
        com_id:com1_id
        }; 
    }

    

//    console.log(mainData);
   
    var mainTemplate = xaraSwidgets_compileTemplate(xaraSwidgets_cycleCircleTemplates.main, mainData);


    // now lets apply the resulting HTML for the whole component to the main DIV that was exported by XARA

    $('#' + divID).html(mainTemplate);


    // get the dimensions of the parent div

    var width = $('#' + divID).parent('div').width();
    var height = $('#' + divID).parent('div').height();
    $('#' + divID).css('width',width);
    $('#' + divID +'OuterDiv').css('z-index','0');
    $('#' + divID).css('height',height);
    $('.' + divID +'_image').css('width',width);
    $('.' + divID +'_image').css('height',height);
    $('#' + divID).parent('div').css('overflow', 'visible');


  

   



    // invoke the effect

   if ($.browser.msie && document.documentMode && document.documentMode <=8)

     {

        $('#' + divID + 'OuterDiv').cycle({

        fx: effectName, // choose your transition type, ex: fade, scrollUp, shuffle, etc...
        delay:timeout,
        speed:  speed,
        timeout: timeout,
        cleartypeNoBg: true, // removes the white bg which shows in ie8
        slideExpr: 'img'
      
        });  

     }

    else

    {

        //set the slideExpr value depending on if were using native code or not.
        var effectExprVal = effectName !=="fadeZoom" ? 'span' : 'img';
        //console.log(slideExprVal) 

      

        $('#' + divID + 'OuterDiv').cycle({

        fx: effectName, // choose your transition type, ex: fade, scrollUp, shuffle, etc...
        delay:timeout,
        speed:  speed,
        timeout: timeout,
        cleartypeNoBg: true, // removes the white bg which shows in ie8
        slideExpr: effectExprVal
      
        });  
    }
    
   

     

      

    // not using the 'pause' option. instead make the slideshow pause when the mouse is over the whole wrapper
    $('#' + divID + 'OuterDiv').mouseenter(function(){
        $('#' + divID + 'OuterDiv').cycle('pause');
    }).mouseleave(function(){
            $('#' + divID + 'OuterDiv').cycle('resume');
        });


   if (window._xw_preview==true)
    {
    
       $('#' + divID + 'OuterDiv').cycle('pause'); 
    }


  




}
