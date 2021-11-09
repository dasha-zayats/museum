import "./style.css"


// radio first ticket form
let basic_ticket = document.querySelector("[name=Basic]");
let basic_minus=document.querySelector(".basic-minus");
let basic_plus=document.querySelector(".basic-plus");

basic_minus.addEventListener("click", function(){
	if (basic_ticket.value==0) basic_ticket.value=0;
	else basic_ticket.value--;
	basic_ticket2.value=basic_ticket.value;
})

basic_plus.addEventListener("click",function(){
	if (basic_ticket.value==20) basic_ticket.value=20;
    else basic_ticket.value++;
    basic_ticket2.value=basic_ticket.value;
})



let senior_ticket = document.querySelector("[name=Senior]");
let senior_minus=document.querySelector(".senior-minus");
let senior_plus=document.querySelector(".senior-plus");

senior_minus.addEventListener("click", function(){
	if (senior_ticket.value==0) senior_ticket.value=0;
	else senior_ticket.value--;
	senior_ticket2.value=senior_ticket.value;
})

senior_plus.addEventListener("click",function(){
	if (senior_ticket.value==20) senior_ticket.value=20;
    else senior_ticket.value++;
    senior_ticket2.value=senior_ticket.value;
})

let basic_ticket2 = document.querySelector("[name=Basic2]");
let senior_ticket2 = document.querySelector("[name=Senior2]");



// range
let progress = document.querySelectorAll('.player-progress');
progress.forEach((item) => {
	item.addEventListener('input', function () {
		const value = this.value;
		this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`;
	});
});

// form
// open
let open_form=document.querySelector("[name=buy-now]");
let form=document.querySelector(".form");

open_form.addEventListener("click",function(){
	form.style.display="inline-block";
	form.style.left='450px';
});

// close
let close_form=document.querySelector(".exit");
close_form.addEventListener("click",function(){
	form.style.display="none";
	form.style.left='0px';});

let book=document.querySelector("[name=book]");
book.addEventListener("click",function(){
	form.style.display="none";
	form.style.left='0px';
});

