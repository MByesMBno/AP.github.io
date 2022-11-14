window.onscroll = () => {
    
    const header = document.querySelector('.header');
    const menu =  document.querySelector('.menu');
     const Y = window.scrollY; 
     console.log(Y);
    if(Y>=(menu.offsetHeight/2)) {
        menu.classList.add('header_fixed');
        header.style.marginTop= '${menu.offsetHeight}px';

    } 
    if((Y>=970)&&(Y<=1170)||(Y>=810)&&(Y<=1010)||(Y>=1792)&&(Y<=1992))
    {
        menu.classList.remove('header_fixed');
        header.style.marginTop= '0px';
    } 
   
};

VANTA.BIRDS({
    el: "#intro",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: 0x0,
    color1: 0xf0f0f0,
    color2: 0xffffff,
    wingSpan: 20.00,
    speedLimit: 2.00,
    quantity: 2.00
  })

  /*document.querySelector('.button').addEventListener('click', () =>{
    const variant = document.querySelector('.variant');
    const variant2 = document.querySelector('.variant-2');
    const variant3 = document.querySelector('.variant-3');
    const variant4 = document.querySelector('.variant-4');
     L=data=document.querySelector('.VH').value;
     switch(L) {
        case 'name1':
            variant4.classList.remove('variant-4_fixed');
            variant2.classList.remove('variant-2_fixed');
            variant3.classList.remove('variant-3_fixed');
            variant.classList.add('variant_fixed');
        break;
        case 'name2':
            variant.classList.remove('variant_fixed');
            variant4.classList.remove('variant-4_fixed');
            variant3.classList.remove('variant-3_fixed');
            variant2.classList.add('variant-2_fixed');
        break;
        case 'name3':
            variant.classList.remove('variant_fixed');
            variant2.classList.remove('variant-2_fixed');
            variant4.classList.remove('variant-4_fixed');
            variant3.classList.add('variant-3_fixed');
        break;
        case 'name4':
            variant.classList.remove('variant_fixed');
            variant2.classList.remove('variant-2_fixed');
            variant3.classList.remove('variant-3_fixed');
            variant4.classList.add('variant-4_fixed');
        break;
        default:
            console.log(Ебать_ты_лох);
     }
    /*document.querySelector('.out').innerHTML = data; это не нужно*/
  /*})*/