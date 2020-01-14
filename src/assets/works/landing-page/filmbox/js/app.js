$(document).ready(function(){
  $(".datemask").mask("99/99/9999");
  $('.datemask').attr('placeholder','GG/AA/YYYY');
  $(".phonemask").mask("999 999 9999");
  $('.phonemask').attr('placeholder','___ ___ ____');
  $(".ccmask").mask("9999-9999-9999-9999");
  $('.ccmask').attr('placeholder','____-____-____-____');
  $(".cvvmask").mask("999");
  $('.cvvmask').attr('placeholder','___');
  $(".expmask").mask("99-99");
  $('.expmask').attr('placeholder','AA-YY');

  var accentMap = { "ç": "c", "Ç": "c", "ğ": "g", "Ğ": "g", "ı": "i", "İ": "i", "ö": "o", "Ö": "o", "ş": "s", "Ş": "s", "ü": "u", "Ü": "u" }; 

  $('#supporter_amount').on('focusout',function(){
    me = $('#supporter_amount');
    val = me.val();
    val = String(val.replace(/\D/g,""))+" TL";
  /*
    console.log(val);

    if(val < 20 ) {
      val = 20;
    }
    val = String(Math.floor(val/5)*5)+" TL";
  */
    me.val(val);
  });
  $('input.aradio').on('click',function(e){
    val = String($(e.target).val());
    am = $('input#supporter_amount');
    if (val == "1") {
      am.val('');
      am.show();
      am.focus();
    } else {
      am.hide();
      am.val(val);
    }
  });
  var normalize = function( term ) {
    var ret = "";
    for ( var i = 0; i < term.length; i++ ) {
      ret += accentMap[ term.charAt(i) ] || term.charAt(i);
    }
    return ret;
  };

  $( "body" ).on( "blur", "input, textarea, select", function( event ) {
      console.log(this)
      $(this).valid();
    });
  (function( $ ) {
  $.ui.autocomplete.prototype.options.autoSelect = true;
  $( "body" ).on( "blur", "#supporter_region", function( event ) {
    var autocomplete = $( this ).data()['uiAutocomplete'] || $( this ).data()['ui-autocomplete'];
    if ( !autocomplete.options.autoSelect || autocomplete.selectedItem ) { return; }
    var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( $(this).val() ) + "$", "i" );
    autocomplete.widget().children( ".ui-menu-item" ).each(function() {
      var item = $( this )
      if ( matcher.test( item.label || item.value || item ) ) {
        autocomplete.selectedItem = item;
        return false;
      } else {
        $('#region').val('');
        $('#supporter_region').val('');
        $('#supporter_region').valid();
        return false
      }
    });
    if ( autocomplete.selectedItem ) {
      autocomplete._trigger( "select", event, { item: autocomplete.selectedItem } );
    }
  });

  }( jQuery ));
  $( "#supporter_region" ).autocomplete({
    minLength: 2,
    position: { my : "right top", at: "right bottom" },
    source: $regions,
    select: function( event, ui ) {
      console.log(ui.item)
      $( "#supporter_region" ).val( ui.item.value );
      $( "#region" ).val(ui.item.id);
      return false;
    }
  });

  $.extend(jQuery.validator.messages, {
      required: "Zorunlu alan.",
      email: "Lütfen geçerli bir e-posta adresi giriniz.",
      minlength: $.validator.format("Bu alan en az {0} karakter içermelidir."),
      creditcard: "Lütfen geçerli bir kredi kartı numarası giriniz.",
      digits: "Lütfen yalnızca rakam giriniz.",
  });

  $.validator.addMethod("month", function(value, element) { 
    value = parseInt(value.replace(/\D/g,''));
    if (value < 1) {return false;}
    if (value > 12) {return false;}
    return true
  }, $.validator.format("1-12 arasında bir rakam giriniz."));

  $.validator.addMethod("year", function(value, element) { 
    value = parseInt(value.replace(/\D/g,''));
    if (value < 2014) {return false;}
    if (value > 2024) {return false;}
    return true
  }, $.validator.format("Son kullanma tarihi, 2014-2024 aralığında olmalıdır."));

  $.validator.addMethod("expiry", function(value, element) { 
    value = value.replace(/\D/g,'');
    if (value.length != 4) {return false;}
    if (value.substr(0,2) == "00" || parseInt(value.substr(0,2))>12) {return false;}
    if (parseInt(value.substr(2,2))<14) {return false;}
    return true
  }, $.validator.format("Lütfen geçerli bir son kullanma tarihi giriniz."));

  $.validator.addMethod("digit3", function(value, element) { 
    console.log(value)
    value = value.replace(/\D/g,'');
    console.log(value)
    if (String(value).length != 3) return false;
    return true;
  }, $.validator.format("3 haneli CVV numarasını giriniz."));

  $.validator.addMethod("amount0", function(value, element) { 
    value = value.replace(/\D/g,'');
    if (value === "") {return false;} else return true;
  }, $.validator.format("Lütfen destek olmak istediğiniz miktarı giriniz."));

  $.validator.addMethod("amount5", function(value, element) { 
    value = value.replace(/\D/g,'');
    if (value%5 > 0) return false;
    return true;
  }, $.validator.format("Destek miktarı 5'in katları olmalıdır."));

  $.validator.addMethod("amount20", function(value, element) { 
    value = value.replace(/\D/g,'');
    if (value < 30) return false;
    return true;
  }, $.validator.format("Destek miktarı en az 30 TL olmalıdır."));

  $.validator.addMethod("amount1000", function(value, element) { 
    value = value.replace(/\D/g,'');
    if (value > 1000) return false;
    return true;
  }, $.validator.format("Online destek miktarı en fazla 1000 TL olabilir."));

  $.validator.addMethod("trdate", function(value, element) { 
    var parts = value.split('/');
    if (parts[1] > 12) return false
    return new Date(parts[2],parts[1]-1,parts[0]);
  }, $.validator.format("Lütfen geçerli bir doğum tarihi giriniz."));

  $.validator.addMethod('trphone', function(value, element, arg) {
    value = value.replace(/^0{1}/,'')
    console.log(value)
    if (value == "" || value == "___ ___ ____") return true;
    if (value.match(/^[12346789][\d]{2} [\d]{3} [\d]{4}$/)) { return true; } else return false
  }, $.validator.format("Lütfen geçerli bir sabit telefon numarası giriniz."))

  $.validator.addMethod('trmobile', function(value, element, arg) {
    value = value.replace(/^0{1}/,'')
    if (value.match(/^5[02-5]{1}[\d]{1} [\d]{3} [\d]{4}$/)) { return true; } else return false
  }, $.validator.format("Lütfen geçerli bir cep telefonu numarası giriniz."))

  $.validator.addMethod('trid', function(value, element, arg) {
    if (value == "" ){
      return true;
    }
    va = value.split('')
    for(var i=0; i<va.length;i++) va[i] = +va[i];
    ten = (((va[0]+va[2]+va[4]+va[6]+va[8])*7)-(va[1]+va[3]+va[5]+va[7]))%10;
    if (va[9] != ten) { return false; }
    eleven = (va[0]+va[1]+va[2]+va[3]+va[4]+va[5]+va[6]+va[7]+va[8]+va[9])%10;
    if (va[10] == eleven) { return true; } else return false
  }, $.validator.format("Lütfen geçerli bir kimlik numarası giriniz."))

  $.validator.addMethod('daterange', function(value, element, arg) {
       var startDate = new Date().getFullYear()-120,
           endDate = new Date().getFullYear()-18,
           enteredDate = value.split('/')[2]
       if (enteredDate < endDate && enteredDate > startDate ) { return true; } else return false
  }, $.validator.format("Lütfen doğum tarihinizi kontrol ediniz."))

});


