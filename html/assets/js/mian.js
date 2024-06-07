/*----------------------------------------------
    Index Of Script
------------------------------------------------
    @version  :	1.0.0
    @author   : initTheme
    @url 	  : https://themeforest.net/user/inittheme
    
    
    ::1. Nice Select
    :: slick Nav
    :: WOW active
    :: From with multiStep
    :: select 2
    :: Nice Scroll js
    :: Chat-box active single
    :: chat-box Setting
    :: SelectPricing & Tag
    :: Message active single

------------------------------------------------
    End-of Script
------------------------------------------------*/


(function ($) {
    "use strict";

        /*-----------------------------------
            Nice Select
        -----------------------------------*/
        var nice_Select = $('.nice-select');
        if(nice_Select.length){
            nice_Select.niceSelect();
        }

        /*-----------------------------------
            slick Nav
        -----------------------------------*/
        var menu = $('ul#navigation');
        if(menu.length){
            menu.slicknav({
                prependTo: ".mobile_menu",
                closedSymbol: '+',
                openedSymbol:'-'
            });
        };

        /*-----------------------------------
            WOW active
        -----------------------------------*/
        new WOW().init();

        /*----------------------------------------------
            From with multiStep
        ----------------------------------------------*/
        let Listings = document.querySelectorAll(".step-list-wrapper li");
        let sections = document.querySelectorAll(".multiStep-wrapper-contents");
        let nextButton = document.querySelector("#next");
        let prevButton = document.querySelector("#previous");
        let currents = 0;

        const toggleListings = () => {
            Listings.forEach(function(e) {
                e.classList.remove('current-items');
            });
            Listings[currents].classList.add("current-items");
            Listings[currents].classList.remove("completed");
            if (currents != 0) {
                Listings[currents - 1].classList.add("completed");
            }
        }
        const toggleSections = () => {
            sections.forEach(function(section) {
                section.classList.remove('active');
            });
            sections[currents].classList.add("active");
        }
        $(document).on('click', '#next', function() {
            if (currents < Listings.length - 1) {
                currents++
            }
            toggleListings();
            toggleSections();
        });
        $(document).on('click', '#previous', function() {
            if (currents > 0) {
                currents--
            }
            toggleListings();
            toggleSections();
        });

        /*----------------------------------------------
            select 2
        ----------------------------------------------*/
        $(".js-example-basic-single").select2({ });
        $(".js-example-disabled-results").select2();
        // Multi
        $(".js-example-basic-multiple").select2();

        /*-----------------------------------
            Nice Scroll js
        -----------------------------------*/
        $(".chat-list, .chatShow, .listScroll").niceScroll({});

        /*-----------------------------------
            Chat-box active single
        -----------------------------------*/
        $('.single-user').click(function(){
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        })

        /*-----------------------------------
            chat-box Setting
        -----------------------------------*/
        $('.singlePlan').click(function(){
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        })

        /*-----------------------------------
            Days active
        -----------------------------------*/
        $(".selectCategories li").click(function () {
            $(this).toggleClass('active').siblings().removeClass('active');
        });

        /*------------------------------
            payment gateway selection
        -------------------------------*/
        $(".payment-gateway-list li").on('click', function () {
            $(".payment-gateway-list li").removeClass("selected");
            $(this).addClass("selected");
        });
        
        /*-----------------------------------
            SelectPricing & Tag
        -----------------------------------*/
        $(".selectPricing li, .selectTag li").click(function () {
            $(this).toggleClass('active').siblings().removeClass('active');
        });

        /*-----------------------------------
            Message active single
        -----------------------------------*/
        $('.single-chat').click(function(){
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        })

}(jQuery));
