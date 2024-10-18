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
    
    if (elements.style.textDecoration = 'normal' ) {
      elements.style.textDecoration ='underline';
    } else {
      elements.style.textDecoration = 'normal';
    }
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


document.getElementById('coloInput').addEventListener('input',function() {
  const myText = document.getElementById('pId');
  const colorInput = document.getElementById('coloInput');
  myText.style.color = colorInput.value;
})// আপনি যখন ইনপুট ফিল্ডে নতুন কোনো মান প্রবেশ করান বা টাইপ করেন, তখনই এই ইভেন্টটি চালু হয়।

const editor = document.getElementById('pId');
const fontNumber = document.getElementById('fontNumber');

function fontShow( ){
   const currentSize = getComputedStyle(editor).fontSize;
   fontNumber.textContent = currentSize;
   }
fontShow( );

const textArea = document.getElementById('pId');


document.getElementById('increaseFont').addEventListener('click',function () {
   const currentSize = window.getComputedStyle(editor).fontSize;
   editor.style.fontSize = (parseFloat(currentSize)+2) + 'px'; 
if (textArea.scrollHeight > textArea.clientHeight) {
   textArea.classList.add('overflow-y-auto');
   } else {
   textArea.classList.remove('overflow-y-auto');
}
   fontShow( );
})

document.getElementById('decreaseFont').addEventListener('click',function( ) {
   const currentSize = window.getComputedStyle(editor).fontSize;
   editor.style.fontSize = (parseFloat(currentSize)-2) + 'px';
   if (textArea.scrollHeight > textArea.clientHeight) {
      
      textArea.classList.remove('overflow-y-auto'); //decrease er jonno scroll proyojon nei tai
  } else {
      textArea.classList.add('overflow-y-auto');
  }
   fontShow( );
})

// console.log(textArea.clientHeight); 
// console.log(textArea.scrollHeight);
// console.log(textArea) 