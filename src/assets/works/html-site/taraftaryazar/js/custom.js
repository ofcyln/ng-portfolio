$( document ).ready(function() {
  // news carousel settings
  $('#newsCarousel').carousel({
  	interval: 10000
  });

  // recent writings carousel settings
  $('#recentWritings').carousel({
  	interval: 10000
  });

  // This event fires immediately when the slide instance method is invoked.
  $('#recentWritings').on('slide.bs.carousel', function (e) {
      var id = $('.item.active').data('slide-number');

    	// Added a statement to make sure the carousel loops correct
  		if(e.direction == 'right'){
  	    id = parseInt(id) - 1;
        if(id == -1) id = 4;
      } else{
          id = parseInt(id) + 1;
          if(id == $('[id^=carousel-thumb-]').length) id = 0;
      }

      $('[id^=carousel-thumb-]').removeClass('selected');
      $('[id=carousel-thumb-' + id + ']').addClass('selected');
  });

  // Thumb control
  $('[id^=carousel-thumb-]').click( function(){
    var id_selector = $(this).attr("id");
    var id = id_selector.substr(id_selector.length -1);
    id = parseInt(id);
    $('#recentWritings').carousel(id);
    $('[id^=carousel-thumb-]').removeClass('selected');
    $(this).addClass('selected');
  });


  // best writers carousel settings
  $('#bestWriters').carousel({
    interval: 10000
  });

  // This event fires immediately when the slide instance method is invoked.
  $('#bestWriters').on('slide.bs.carousel', function (e) {
      var id = $('.item.active').data('slide-number');

      // Added a statement to make sure the carousel loops correct
      if(e.direction == 'right'){
        id = parseInt(id) - 1;
        if(id == -1) id = 10;
      } else{
          id = parseInt(id) + 1;
          if(id == $('[id^=writers-carousel-thumb-]').length) id = 0;
      }

      $('[id^=writers-carousel-thumb-]').removeClass('selected');
      $('[id=writers-carousel-thumb-' + id + ']').addClass('selected');
  });

  // Thumb control
  $('[id^=writers-carousel-thumb-]').click( function(){
    var id_selector = $(this).attr("id");
    var id = id_selector.substr(id_selector.length -1);
    id = parseInt(id);
    $('#bestWriters').carousel(id);
    $('[id^=writers-carousel-thumb-]').removeClass('selected');
    $(this).addClass('selected');
  });

  // multiselect controls
  $('#category-selector').multiselect({
    numberDisplayed: 1,
    selectedText: ' Kategori',
    allSelectedText: 'Tüm Kategoriler',
    nonSelectedText: 'Kategori Seçilmedi',
    selectAllValue: 'Tümü',
    selectAllText: 'Tümünü Seç',
    unselectAllText: 'Seçimleri Kaldır',
    buttonText: function(options, select) {
                return 'Kategori Seçiniz';
            },
            buttonTitle: function(options, select) {
                var labels = [];
                options.each(function () {
                    labels.push($(this).text());
                });
                return labels.join(' - ');
            },
    onSelectAll: function(checked) {
      var all = $('#category-selector ~ .btn-group .dropdown-menu .multiselect-all .checkbox');
      all
      // get all child nodes including text and comment
        .contents()
        // iterate and filter out elements
        .filter(function() {
          // check node is text and non-empty
          return this.nodeType === 3 && this.textContent.trim().length;
          // replace it with new text
        }).replaceWith(checked ? this.unselectAllText : this.selectAllText);
    },
    onChange: function() {
      var select = $(this.$select[0]);
      var dropdown = $(this.$ul[0]);
      var options = select.find('option').length;
      var selected = select.find('option:selected').length;
      var all = dropdown.find('.multiselect-all .checkbox');
      all
      // get all child nodes including text and comment
        .contents()
        // iterate and filter out elements
        .filter(function() {
          // check node is text and non-empty
          return this.nodeType === 3 && this.textContent.trim().length;
          // replace it with new text
        }).replaceWith(options === selected ? this.options.unselectAllText : this.options.selectAllText);
    }
  });

    $('.category-selector').multiselect({
    numberDisplayed: 1,
    selectedText: ' Kategori',
    allSelectedText: 'Tüm Kategoriler',
    nonSelectedText: 'Kategori Seçilmedi',
    selectAllValue: 'Tümü',
    selectAllText: 'Tümünü Seç',
    unselectAllText: 'Seçimleri Kaldır',
    buttonText: function(options, select) {
                return 'Kategori Seçiniz';
            },
            buttonTitle: function(options, select) {
                var labels = [];
                options.each(function () {
                    labels.push($(this).text());
                });
                return labels.join(' - ');
            },
    onSelectAll: function(checked) {
      var all = $('#category-selector ~ .btn-group .dropdown-menu .multiselect-all .checkbox');
      all
      // get all child nodes including text and comment
        .contents()
        // iterate and filter out elements
        .filter(function() {
          // check node is text and non-empty
          return this.nodeType === 3 && this.textContent.trim().length;
          // replace it with new text
        }).replaceWith(checked ? this.unselectAllText : this.selectAllText);
    },
    onChange: function() {
      var select = $(this.$select[0]);
      var dropdown = $(this.$ul[0]);
      var options = select.find('option').length;
      var selected = select.find('option:selected').length;
      var all = dropdown.find('.multiselect-all .checkbox');
      all
      // get all child nodes including text and comment
        .contents()
        // iterate and filter out elements
        .filter(function() {
          // check node is text and non-empty
          return this.nodeType === 3 && this.textContent.trim().length;
          // replace it with new text
        }).replaceWith(options === selected ? this.options.unselectAllText : this.options.selectAllText);
    }
  });

  $('#listing-selector').multiselect();
  $('.listing-selector').multiselect();

  $('#modal-category-selector').multiselect();
  $('.modal-category-selector').multiselect();

  $('#modal-category-detail-selector').multiselect();
  $('.modal-category-detail-selector').multiselect();

  // tooltip fire
  $('[data-toggle="tooltip"]').tooltip()

  // signup carousel control
  $('#signupType').carousel();

  // signup form phone signup control
  $('#switchToPhone').on('click', function(event) {
    $('.cellphone-subscription').toggleClass('show');
    $('.email-subscription').toggleClass('hidden');
    $('.email-subs').toggleClass('hidden');
    $('.cell-subs').toggleClass('hidden');
  });

  $('#switchToEmail').on('click', function(event) {
    $('.cellphone-subscription').toggleClass('show');
    $('.email-subscription').toggleClass('hidden');
    $('.email-subs').toggleClass('hidden');
    $('.cell-subs').toggleClass('hidden');
  });

  $('#switchToPhoneSubs').on('click', function(event) {
    $('.cellphone-subscription').toggleClass('show');
    $('.email-subscription').toggleClass('hidden');
    $('.email-subs').toggleClass('hidden');
    $('.cell-subs').toggleClass('hidden');
  });

  $('#switchToEmailSubs').on('click', function(event) {
    $('.cellphone-subscription').toggleClass('show');
    $('.email-subscription').toggleClass('hidden');
    $('.email-subs').toggleClass('hidden');
    $('.cell-subs').toggleClass('hidden');
  });

  // star rating
  var $star_rating = $('.star-rating span');

  var SetRatingStar = function() {
    return $star_rating.each(function() {
      if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
        return $(this).removeClass('range-item').addClass('range-item-fulled');
      } else {
        return $(this).removeClass('range-item-fulled').addClass('range-item');
      }
    });
  };

  $star_rating.on('click', function() {
    $star_rating.siblings('input.rating-value').val($(this).data('rating'));
    return SetRatingStar();
  });

  SetRatingStar();

  // sticky puanlama
  $(window).stuck();
  var s = $(".my-points-area");
	var pos = s.position();
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		if (windowpos >= pos.top & windowpos <= 260) {
			s.removeClass("margin-top-lg");
		} else {
			s.addClass("margin-top-lg");
		}
	});

  // reply button textarea trigger
  $('.reply-button-trigger').on('click', function() {
    $('.reply-text-area').toggleClass('hidden');
  });

  $('.reply-button-trigger-2').on('click', function() {
    $('.reply-text-area-2').toggleClass('hidden');
  });

  // mobile rate button trigger
  $('.mobile-rate-button').on('click', function() {
    $('.mobile-rate-area').toggleClass('hidden');
  });
  // // rating affix
  // $('.my-points-area').affix({
  //     offset: {top: $('.my-points-area').offset().top,bottom: ($('.footer-area').outerHeight(true) + 40)}
  // });

});
