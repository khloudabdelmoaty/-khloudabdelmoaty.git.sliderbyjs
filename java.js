var slidesImg = Array.from(document.querySelectorAll("#slider img"));
var sliderNumber = document.getElementById("sliderr-number");
var left = document.getElementById("left");
console.log(left)
var right = document.getElementById("right");
var currentSlide = 1;
var slideImgCount = slidesImg.length;

left.onclick = leftbtn;
right.onclick = nextSlide;

function nextSlide() {
   
    if(right.classList.contains ("disabled")){
        console.log("false")
    }else{
        currentSlide++;
        check();
        console.log("true")
    }
};


function leftbtn() {
   
    if(left.classList.contains ("disabled")){
        console.log("false")
    }else{
        currentSlide--;
        check();
        
        console.log("trueeeee")
    }

};




var paginationElement = document.createElement('ul');
paginationElement.setAttribute('id' , 'pagination-ul');



// make loop through slide img
for(var i = 1; i <= slideImgCount; i++){
    var paginationItems = document.createElement('li');
    paginationItems.setAttribute('data-index' , i);
    paginationItems.appendChild(document.createTextNode(i));
    paginationElement.appendChild(paginationItems);
}
var myIndicators = document.getElementById("tops");
myIndicators.appendChild(paginationElement);

var createdNewElement = document.getElementById("pagination-ul");
var slidesBullets = Array.from(document.querySelectorAll("#pagination-ul li"));
  check();
var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));
for(var i = 0; i < paginationBullets.length; i++){
    paginationBullets[i].onclick = function() {
        currentSlide = parseInt(this.getAttribute('data-index'));
        check();
    }
}


// create function to check
function check(){
    sliderNumber.textContent = 'current image # ' + currentSlide + ' of ' + slideImgCount;
    removeActiveClasses();
    slidesImg[currentSlide - 1].classList.add('active');
    createdNewElement.children[currentSlide - 1].classList.add('active');
    if(currentSlide == 1){
        left.classList.add('disabled')
    } else {
        left.classList.remove('disabled')
    }
    if(currentSlide == slideImgCount){
        right.classList.add('disabled')
    } else {
        right.classList.remove('disabled')
    }
}
function removeActiveClasses(){
    slidesImg.forEach(function(img){
        img.classList.remove('active');
    });
    slidesBullets.forEach(function(bullet){
        bullet.classList.remove('active')
    });
}
nextSlide()
leftbtn()