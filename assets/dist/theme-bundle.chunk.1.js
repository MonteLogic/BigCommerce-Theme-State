webpackJsonp([1],{

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_manager__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_reviews__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_collapsible__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_product_details__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_video_gallery__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_form_utils__ = __webpack_require__(104);
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')}return call&&(typeof call==='object'||typeof call==='function')?call:self}function _inherits(subClass,superClass){if(typeof superClass!=='function'&&superClass!==null){throw new TypeError('Super expression must either be null or a function, not '+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}/*
 Import all product specific js
 */var Product=function(_PageManager){_inherits(Product,_PageManager);function Product(context){_classCallCheck(this,Product);var _this=_possibleConstructorReturn(this,_PageManager.call(this,context));_this.url=window.location.href;_this.$reviewLink=__WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-reveal-id="modal-review-form"]');return _this}Product.prototype.before=function before(next){var _this2=this;// Listen for foundation modal close events to sanitize URL after review.
__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).on('close.fndtn.reveal',function(){if(_this2.url.indexOf('#write_review')!==-1&&typeof window.history.replaceState==='function'){window.history.replaceState(null,document.title,window.location.pathname)}});next()};Product.prototype.loaded=function loaded(next){var _this3=this;var validator=void 0;// Init collapsible
Object(__WEBPACK_IMPORTED_MODULE_3__common_collapsible__["b" /* default */])();this.productDetails=new __WEBPACK_IMPORTED_MODULE_4__common_product_details__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.productView'),this.context,window.BCData.product_attributes);Object(__WEBPACK_IMPORTED_MODULE_5__product_video_gallery__["a" /* default */])();var $reviewForm=Object(__WEBPACK_IMPORTED_MODULE_6__common_form_utils__["b" /* classifyForm */])('.writeReview-form');var review=new __WEBPACK_IMPORTED_MODULE_2__product_reviews__["a" /* default */]($reviewForm);__WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').on('click','[data-reveal-id="modal-review-form"]',function(){validator=review.registerValidation(_this3.context)});$reviewForm.on('submit',function(){if(validator){validator.performCheck();return validator.areAll('valid')}return false});next()};Product.prototype.after=function after(next){this.productReviewHandler();next()};Product.prototype.productReviewHandler=function productReviewHandler(){if(this.url.indexOf('#write_review')!==-1){this.$reviewLink.trigger('click')}};return Product}(__WEBPACK_IMPORTED_MODULE_1__page_manager__["a" /* default */]);/* harmony default export */ __webpack_exports__["default"] = (Product);if(__WEBPACK_IMPORTED_MODULE_0_jquery___default()('#modal-quote-form').length){quotePageOnly()}function quotePageOnly(){// quote page only code
// Dennis DNO Code 
console.log('quotePageOnly');__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).ready(function(){__WEBPACK_IMPORTED_MODULE_0_jquery___default()('#specialId').click(function(){__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.ogClosed').css('display','block')})});// Initialize Firebase (ADD YOUR OWN DATA)
var config={apiKey:'AIzaSyCiNBQ6_V7a2V7wpvigxFP3MsZgdT3fvNk',authDomain:'kw-graphics-server.firebaseapp.com',databaseURL:'https://kw-graphics-server.firebaseio.com',projectId:'kw-graphics-server',storageBucket:'kw-graphics-server.appspot.com',messagingSenderId:'334742471890'};firebase.initializeApp(config);// Reference messages collection
var messagesRef=firebase.database().ref('messages');// Listen for form submit
document.getElementById('contactForm').addEventListener('submit',submitForm);// Submit form
function submitForm(e){e.preventDefault();// Get values
var name=getInputVal('name');var company=getInputVal('company');var email=getInputVal('email');var phone=getInputVal('phone');var message=getInputVal('message');// Save message
saveMessage(name,company,email,phone,message);// Show alert
document.querySelector('.alert').style.display='block';// Hide alert after 3 seconds
setTimeout(function(){document.querySelector('.alert').style.display='none'},3000);// Clear form
document.getElementById('contactForm').reset()}// Function to get get form values
function getInputVal(id){return document.getElementById(id).value}// Save message to firebase
function saveMessage(name,company,email,phone,message){var newMessageRef=messagesRef.push();newMessageRef.set({name:name,company:company,email:email,phone:phone,message:message})}__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).ready(function(){__WEBPACK_IMPORTED_MODULE_0_jquery___default()('#contactForm').submit(function(){console.log('Submitted');// $("#firebase-submit").remove();
__WEBPACK_IMPORTED_MODULE_0_jquery___default()('#firebase-submit').replaceWith(' Submission Confirmed &#x2713;');__WEBPACK_IMPORTED_MODULE_0_jquery___default()('#contactForm').trigger('reset')})})}

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_nod__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_collapsible__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_models_forms__ = __webpack_require__(163);
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}var _class=function(){function _class($reviewForm){_classCallCheck(this,_class);this.validator=Object(__WEBPACK_IMPORTED_MODULE_1__common_nod__["a" /* default */])({submit:$reviewForm.find('input[type="submit"]')});this.$reviewsContent=__WEBPACK_IMPORTED_MODULE_0_jquery___default()('#product-reviews');this.$collapsible=__WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-collapsible]',this.$reviewsContent);this.initLinkBind();this.injectPaginationLink();this.collapseReviews()}/**
     * On initial page load, the user clicks on "(12 Reviews)" link
     * The browser jumps to the review page and should expand the reviews section
     */_class.prototype.initLinkBind=function initLinkBind(){var _this=this;var $content=__WEBPACK_IMPORTED_MODULE_0_jquery___default()('#productReviews-content',this.$reviewsContent);__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.productView-reviewLink').on('click',function(){if(!$content.hasClass('is-open')){_this.$collapsible.trigger(__WEBPACK_IMPORTED_MODULE_2__common_collapsible__["a" /* CollapsibleEvents */].click)}})};_class.prototype.collapseReviews=function collapseReviews(){// We're in paginating state, do not collapse
if(window.location.hash&&window.location.hash.indexOf('#product-reviews')===0){return}// force collapse on page load
this.$collapsible.trigger(__WEBPACK_IMPORTED_MODULE_2__common_collapsible__["a" /* CollapsibleEvents */].click)};/**
     * Inject ID into the pagination link
     */_class.prototype.injectPaginationLink=function injectPaginationLink(){var $nextLink=__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.pagination-item--next .pagination-link',this.$reviewsContent);var $prevLink=__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.pagination-item--previous .pagination-link',this.$reviewsContent);if($nextLink.length){$nextLink.attr('href',$nextLink.attr('href')+' #product-reviews')}if($prevLink.length){$prevLink.attr('href',$prevLink.attr('href')+' #product-reviews')}};_class.prototype.registerValidation=function registerValidation(context){this.context=context;this.validator.add([{selector:'[name="revrating"]',validate:'presence',errorMessage:this.context.reviewRating},{selector:'[name="revtitle"]',validate:'min-length:2',errorMessage:this.context.reviewSubject},{selector:'[name="revtext"]',validate:'min-length:2',errorMessage:this.context.reviewComment},{selector:'[name="email"]',validate:function validate(cb,val){var result=__WEBPACK_IMPORTED_MODULE_3__common_models_forms__["a" /* default */].email(val);cb(result)},errorMessage:this.context.reviewEmail}]);return this.validator};_class.prototype.validate=function validate(){return this.validator.performCheck()};return _class}();/* harmony default export */ __webpack_exports__["a"] = (_class);

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VideoGallery */
/* harmony export (immutable) */ __webpack_exports__["a"] = videoGallery;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}var VideoGallery=function(){function VideoGallery($element){_classCallCheck(this,VideoGallery);this.$player=$element.find('[data-video-player]');this.$videos=$element.find('[data-video-item]');this.currentVideo={};this.bindEvents()}VideoGallery.prototype.selectNewVideo=function selectNewVideo(e){e.preventDefault();var $target=__WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.currentTarget);this.currentVideo={id:$target.data('videoId'),$selectedThumb:$target};this.setMainVideo();this.setActiveThumb()};VideoGallery.prototype.setMainVideo=function setMainVideo(){this.$player.attr('src','//www.youtube.com/embed/'+this.currentVideo.id)};VideoGallery.prototype.setActiveThumb=function setActiveThumb(){this.$videos.removeClass('is-active');this.currentVideo.$selectedThumb.addClass('is-active')};VideoGallery.prototype.bindEvents=function bindEvents(){this.$videos.on('click',this.selectNewVideo.bind(this))};return VideoGallery}();function videoGallery(){var pluginKey='videoGallery';var $videoGallery=__WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-'+pluginKey+']');$videoGallery.each(function(index,element){var $el=__WEBPACK_IMPORTED_MODULE_0_jquery___default()(element);var isInitialized=$el.data(pluginKey)instanceof VideoGallery;if(isInitialized){return}$el.data(pluginKey,new VideoGallery($el))})}

/***/ })

});
//# sourceMappingURL=theme-bundle.chunk.1.js.map