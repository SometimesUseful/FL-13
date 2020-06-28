// Example: $('#someId').css({'prop' : 'value', 'prop1' : 'value1', ...});

//body: add padding 30px
$('body').css({'padding' : '30px'});
// id title: make align center, remove top margin
$('#title').css({'text-align': 'center'});
// div after header: add double border and padding 20px
$('.row').css({'border':'2px double', 'padding': '20px'});
// change color for all h2 and set top margin to 0
$('h2').css({'color': 'red', 'marginTop': '0px'});
// set font size 18px for all .list direct children
$('.list').children().css({'fontSize': '18px'});

// in #list-1
  // show all hidden and not cloned li
    $('ul#list-1 :hidden not li.cloned').show({'display': 'block'});
  // hide empty li
    $('ul#list-1 li:empty').css({'display': 'none'});
// in #list-3
  // for all even li set margin-left -20px
    $('ul#list-3 li:even').css({'marginLeft': '-20px'});
  // for the first li set any different color
    $('ul#list-3 li:first-child').css({'color': 'blue'});
  // for all li with index > 5 set color to #ccc
    $('ul#list-3 li:gt(4)').css({'color':'#ccc'});
// for li which has em add red color
    $('ul#list-3 li').has('em').css({'color':'red'});
// for li which contains text 'Buratino' set font weight to bold
    $('li:contains(Buratino)').css({'fontWeight':'bold'});

// for b in p which is the only child set font size 36px
    $('p b:only-child').css({'fontSize': '36px'});
// for em in p which is the last child of type set color to green
    $('p em').css({'color':'green'});

// set width 80px for input with attribute name ended by 'age'
    $('input[name$=\'age\']').css({'width':'80px'});
// set width 120px for input with attribute name started by 'my'
    $('input[name^=\'my\']').css({'width':'120px'});
// console.log checked checkbox
    $('input:checkbox').click(function () {
        console.log('Checked!');
    });
// show all images with a cat
    $('img').show({'display': 'block'});
    $('img:eq(1)').hide();
// wrap every image into the div
    $('.mbox img').each(function(index, element) {
    $(element).wrap("<div class='cat'></div>");
});
// for .mbox with index 3 set padding-top 50px
    $('.mbox .cat:eq(2)').css({'paddingTop':'50px'});
// for first div wraper for img set float left and border red
    $('.cat:eq(0)').css({'float': 'left', 'border': '1px solid red'});