//
// Implemented interaction:
//  (1) onchange: the fragment is validated clientside
//  (2) onchange of a radio, checkbox or selectbox, the preconditions are verified to determine if part of the form has to be shown or not
//  (3) onsubmit: all fields, which are not validated yet are validated. When there are errors the form is not posted
//  (4) onsubmit: when the form is posted: fields which are not visible are cleared
//  (5) onload: the value and the visibility from the inputs are set. This is for the Firefox prefilling values
//

$(document).ready(function(event) {

  //
  // implemented a optimization for the clientside framework:
  //  - load the formState object aynsychronous
  //  - cache the formState serverside
  //  - add an extra call for the filled in values
  //  - init the bindings
  //
  function initializeForms() {
    $('.wmpform').each(function() {
      var url = $(this).find('.csfw').val();
      var versionId = $(this).find('.csfw_versionId').val();
      var stepId = $(this).find('.csfw_stepId').val();
      var formId = $(this).attr("id");
      var formObj = $(this);

      if (typeof url != 'undefined') {
        $.ajax({
          url: url,
          async: true,
          success: function(data) {
            eval(data);
            var formState = WebmanagerFormStateRegistry[formId];

            // we don't get the form values from the user when we don't have a wmstepid in the form
            if (stepId != '') {

              $.getJSON(contextPath + '/wcbservlet/nl.gx.forms.wmpformelement.servlet?formVersionId=' + versionId, function(data) {
                $.each(data.steps, function(j,step){
                  var stepId = step.identifier;
                  $.each(step.fragments, function(i,item){
                    if (typeof item.name != 'undefined') {

                      var fragmentObj = FormsUtil.getObject(formState[stepId], item.name);
                      if (fragmentObj != null) {
                        fragmentObj.value = item.value;
                        fragmentObj.visible = item.visible;
                      }
                    }
                  });
                });
                init(formObj);

              });
            } else {
              init(formObj);
            }
          }
        });
      } else {
        // do the old behavior
        init(formObj);
      }
    });
  }

  $(window).on("IAF_initializeforms",function() {
    initializeForms();
  });

  // Capture the high level events
  $('body').on('IAF_ShowFormFragment', 'div', function() {
    $(this).show();
    return false;
  });

  $('body').on('IAF_HideFormFragment', 'div', function() {
    $(this).hide();
    return false;
  });

  $('body').on('IAF_SubmitForm', 'form', function() {
    $(this).submit();
    return false;
  });

  $('body').on('IAF_ShowError', 'div', function(e, errorDivId, errors) {
    $('#' + errorDivId).html('<div class="form-errormessage form-indent">' + FormsUtil.join(errors,'</div><div class="form-errormessage form-indent">') + '</div>').show();
    $('#' + errorDivId).parent().find("input,textarea,select").addClass('error');
  });

  $('body').on('IAF_HideError', 'div', function(e, errorDivId) {
    $('#' + errorDivId).empty().hide();
    $('#' + errorDivId).parent().find("input,textarea,select").removeClass('error');
  });

  //
  // The init is called after the form values from the use are set in the client side framework:
  // Now we can add the events.
  //
  function init(formObj) {
    //
    // (1) Set a change event on all inputs: we can determine clientside if other fields needs to be shown
    // This is not done by looping over the inputs, because this doesn't work for repeats
    //
    formObj.find(':input[name]').change(function() {
      FormValidation.changeFragment($(this), true);
    });

    // (3) validate all inputs when the form is submitted
    formObj.submit(function(event) {

      var formId = $(this).attr("id");
      var step = WebmanagerFormStateRegistry[formId].currentStep();

      if (!$(this).hasClass("IAF_backpressed")) {
        event.preventDefault();
        var hasErrors = FormValidation.validateForm($(this), step);
        if (!hasErrors) {
          // now we can submit the form
          FormValidation.submitForm($(this), step);
        }
      }
    });

    formObj.find('.wm_input_back_button').click(function() {
      formObj.addClass("IAF_backpressed");
    });


    //
    // Set a click event on all radio inputs and pipe it to the onChange
    // this to avoid problems in IE6/IE7/IE8 that have a different event model
    //
    formObj.find(':input:radio[name]').click(function() {
      if (FormsUtil.isIE) {
        $(this).change();
      }
    });


    //
    // (5) Set the initial value and visibility
    //
    var inputsWithValue = new Array();
    // This is for the radio and checkboxes: we only need to set them once
    var done = new Array();

    formObj.find(':input[name]').each(function() {
      var formId = formObj.attr("id");
      var step = WebmanagerFormStateRegistry[formId].currentStep();

      var inputName = $(this).attr("name");
      var inputType = $(this).attr("type");
      if (inputName != '' && !FormsUtil.contains(done, inputName)) {
        if (inputType != 'hidden') {
          done.push(inputName);
        }

        var fragmentObj = FormsUtil.getObject(step, $(this).attr("name"));

        if (fragmentObj != null) {
          fragmentObj.visible = $(this).is(":visible");
          var value = FormValidation.getFragmentValue($(this));
          if (value != '') {
            inputsWithValue.push($(this));
          }
        }
      }
    });

    // trigger the change event after the value and visibility is set
    for (var i=0;i<inputsWithValue.length;i++) {
      FormValidation.changeFragment(inputsWithValue[i], false);
    }
    formObj.trigger('IAF_ClientsideFrameworkLoaded');
  }
  $(window).trigger("IAF_initializeforms");
});
