
// for smooth scrolling of website when user click on any link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//scroll to the top of the page when arrow is clicked
function scrollToTop(){
    window.scrollTo({
        top:0,
        behavior:`smooth`
    });
}


//show or hide the arrow based on the scroll position 
window.onscroll=function(){
    const scrollArrow= document.getElementById("scrollArrow");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        scrollArrow.style.display='block';

    }else{
        scrollArrow.style.display=`none`;
    }
};