console.log(5);




// Description: A script to register the quote form onto the tabs.
// Custom Quote - Register ids and Classes


// parent element
var quoteOne = document.querySelector('[class="tabs"]');

// create the element
var quoteLi = document.createElement('li');
var quoteAh = document.createElement('a');
var buttonAh = document.createElement('a');



// add content
quoteLi.textContent = 'text3';
buttonAh.textContent = 'Get A Quote';

// append to DOM
quoteOne.appendChild(quoteLi);
quoteLi.appendChild(quoteAh);
quoteAh.appendChild(buttonAh);

// add to Classes
quoteOne.classList.add('blue');
Top li is good





// tab contents
// tab contents
// tab contents


// create the parent
var quoteTabcontents = document.querySelector('[class="tabs-contents"]');

// create the element
var elementUp = document.createElement('div');

// append to document
quoteTabcontents.appendChild(elementUp);

elementUp.classList.add('tab-quotes-content-one');
    





 // may have to modify js and css
  $(".tab-quotes-content-one").append(`
<a href="" id="btn"></a>

<div class="ogClass">



<div id="modal-quote-form" class="modal open" data-reveal="" style="display: block; opacity: 1; visibility: visible; top: 845px;" tabindex="0" aria-hidden="false">


<div class="modal-content"><div class="modal-header">
        <h2 class="modal-header-title">Submit A Quote</h2>
        <a href="#" class="modal-close" aria-label="Close" role="button">
            <span aria-hidden="true">×</span>
        </a>
    </div><div class="modal-body" style="max-height: 626.2px;">
        <div class="writeReview-productDetails">
            <img src="https://cdn11.bigcommerce.com/s-dcbwi3h6xh/images/stencil/250x100/kwg-logo-fin2-shdw_-200_1509470430__89360.original.jpg">
            <h6 class="product-brand">Mimaki</h6>
            <h5 class="product-title" style="display: none;">Customer Requested Quote</h5>
        </div>
        <form class="form writeQuote-form" action="/postreview.php" method="post">
            <fieldset class="form-fieldset">
                <div class="form-field form-field--select">
                    <label class="form-label" for="rating-rate">
                        <small></small>
                    </label>

                    <select id="rating-rate" class="form-select needsclick" name="revrating" style="display: none;">
                        <option value="5"></option>

                    </select>
                <span style="display: none;"></span></div>


                    <div class="form-field form-field--input form-field--inputText" id="" data-validation="">
    <label class="form-label" for="_input">Name
    </label>
    <input type="text" id="_input" data-label="Name" name="revfromname" class="form-input" aria-required="">
</div>



                <div class="form-field form-field--input form-field--inputText" id="" data-validation="">
    <label class="form-label" for="_input" style="display: none;"><small class="required" style="display: none;">*</small>Review Subject
    </label>
    <input type="text" id="_input" data-label="Review Subject" name="revtitle" class="form-input" aria-required="true" value="Customer Requested/Submitted Quote" style="display: none;">
<span style="display: none;"></span></div>


                <div class="form-field form-field--textarea" id="" data-validation="">
    <label class="form-label" for="_input"><small class="required">*</small>Comments
    </label>
    <textarea name="revtext" id="_input" data-label="Comments" rows="" aria-required="true" class="form-input"></textarea>
<span style="display: none;"></span></div>



                <div class="form-field form-field--submit">
                    <input type="submit" class="button button--primary" value="Request Quote">
                </div>
                <input type="hidden" name="product_id" value="221">
                <input type="hidden" name="action" value="post_review">

            </fieldset>
        </form>
    </div></div><div class="loadingOverlay" style="display: none;"></div></div></div>



`);

    








    
//        $("p").removeClass("productView-price");


 // $( "p" ).removeClass( "productView-price span" )
    
// select 

// add a remove class method to the function.

(function() {
    var queryVar = $(".productView-price span:contains('(800)')" );
    if ($(queryVar).length){
       console.log('Found with Length');


// input appendable txt here
       // Select parent into a variable
       var appendGaqParent = document.querySelector('[class="productView-options"]');

       // Creates the first div - Create the first input
       var formActionTop =  document.createElement('div');
       var inputActionId = document.createElement('input');

       // Add class list - add id
       formActionTop.classList.add('form-action');

       // sets the input id
       inputActionId.setAttribute("id","form-action-addToCart");

       inputActionId.setAttribute("class","button button--primary");

       inputActionId.setAttribute("type","button");

       inputActionId.setAttribute("value","Get A Quote");

       inputActionId.setAttribute("data-reveal-id","modal-quote-form");


       // append to DOM
       appendGaqParent.appendChild(formActionTop);
       formActionTop.appendChild(inputActionId);
        
        $(".productView-price span").remove();

 // input appendable txt here

    }


})();



// Developing the DOM
// Developing the DOM
// Developing the DOM
// Developing the DOM

    


// stray function 



var CountUp = $('.productView-rating .icon--ratingFull').length
console.log(CountUp);
var productView = document.getElementsByClassName("productView-details");

var CountSide = $('.rating--small .icon--ratingFull').length
console.log(CountSide);
    
    
if (CountSide == 0) {
	console.log(CountSide);
    $(".rating--small").remove();

    
}
    
    
if (CountUp == 0) {
    console.log("CountUp is equal to zero");
    $(".productView-rating").remove();
}
