
 const slideContainer = document.querySelector('.container')
 const slide = document.querySelector('.slides')
 const nextBtn = document.getElementById('next-btn')
 const prevBtn = document.getElementById('prev-btn')
 const interval = 3000;


 let slides = document.querySelectorAll('.slide')
 let index= 1;

 const firstClone = slide[0].cloneNode(true);
 const lastClone = slide[slide.lengt - 1].cloneNode(true);

 firstClone.id = 'first-clone'
 lastClone.id = 'last-clone'

 slide.append(firstClone);
 slide.prepend(lastClone);

 const slideWidth = slides[index].clientWidth

 slide.style.transform = `translateX(${-slideWidth * index}px)`


 const startSlide = ()=>{
    setInterval(()=>{
        index++;
        slide.style.transform = `translateX(${-slideWidth * index}px)`
    },interval )


 }


startSlide();




 