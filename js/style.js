document.getElementById('b').addEventListener('click',function() {
   const elements = document.getElementById('pId');
   if (elements.style.fontWeight == 'normal') {
    elements.style.fontWeight ='bold';
   } else
    {
    elements.style.fontWeight ='normal';
   }
})

document.getElementById('i').addEventListener('click',function() {
    const elements = document.getElementById('pId');
    if (elements.style.fontStyle == 'normal') {
        elements.style.fontStyle ='italic';
    } else {
        elements.style.fontStyle ='normal'; 
    }
    
 })

 document.getElementById('u').addEventListener('click',function() {
    const elements = document.getElementById('pId');
    elements.style.textDecoration ='underline';
 })
 document.getElementById('left').addEventListener('click',function() {
    const elements = document.getElementById('pId');
    elements.style.textAlign ='left';
 })
 document.getElementById('center').addEventListener('click',function() {
    const elements = document.getElementById('pId');
    elements.style.textAlign ='center';
 })
 document.getElementById('right').addEventListener('click',function() {
    const elements = document.getElementById('pId');
    elements.style.textAlign ='right';
 })
 document.getElementById('justify').addEventListener('click',function() {
    const elements = document.getElementById('pId');
    elements.style.textAlign ='justify';
 })

//  document.getElementById("color").addEventListener('change', function () {
//    const mytext = document.getElementById("pId");
//    const colorInput = document.getElementById("color");
//    const selectedColor = colorInput.value;
//    mytext.style.color = selectedColor;
//  });


document.getElementById('color').addEventListener('click',function ( ) {
   const myText = document.getElementById('pId');
   const inputColor = document.getElementById('color');
   const selectedColor= inputColor.value ;
   myText.style.color = selectedColor;
})


const editor = document.getElementById('pId');

document.getElementById('increaseFont').addEventListener('click',function ( ) {
   const currentSize = window.getComputedStyle(editor).fontSize;
   editor.style.fontSize = (parseFloat(currentSize)+2) + 'px';
})


document.getElementById('decreaseFont').addEventListener('click',function() {
   const currentSize = window.getComputedStyle(editor).fontSize;
   editor.style.fontSize = parseFloat(currentSize)-2 + 'px';
}) 























//  const editor = document.getElementById('pId');

// // Font Size Controls
// document.getElementById('increaseFont').addEventListener('click', function(){
//     let currentSize = window.getComputedStyle(editor).fontSize;
//     editor.style.fontSize = (parseFloat(currentSize) + 2) + 'px';
// });

// document.getElementById('decreaseFont').addEventListener('click', function() {
//     let currentSize = window.getComputedStyle(editor).fontSize;
//     editor.style.fontSize = (parseFloat(currentSize) - 2) + 'px';
// });
 
 
