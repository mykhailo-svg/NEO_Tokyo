const popUpButtons = document.querySelectorAll(".info__pop__up__title");

const popUpDecorations = document.querySelectorAll(".info__pop__up__decor");


const popUps = document.querySelectorAll(".info__pop__up__list");




for (let i = 0; i < popUpButtons.length; i++) {
    popUpButtons[i].addEventListener('click', function ()  {
        popUps[i].classList.toggle("pop__up__hide");
        popUpDecorations[i].classList.toggle("pop__up__hide");
        popUpButtons[i].classList.toggle("pop__up__hide");
    });
    
}


$(document).ready(function(){
    $('.city__slider').slick({
        adaptiveHeight:true,
        slidesToShow:1,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        easing:'ease',
        slidesToScroll:1,
        dots:true,
      
        arrows:false,
        
        
        

    });
                                                    
});





const animItems= document.querySelectorAll("._anim-items");



 
if(animItems.length>0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(){
        for(let index=0;index < animItems.length;index++){
            const animItem = animItems[index]; 
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset=offset(animItem).top;
            const animStart =2;

            let animItemPoint=window.innerHeight - animItemHeight / animStart;

            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight/ animStart;
            }

            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('an_active');
            }
            else{
                if(!animItem.classList.contains('_anim-no-hide')){
                    animItem.classList.remove('an_active');
                }
                
                    
                
            }
        } 
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        return{ top:rect.top + scrollTop,left:rect.left + scrollLeft}

        
    }
    setTimeout(() => {
        animOnScroll();
    },400)
}
