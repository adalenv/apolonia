var WebmanagerFormStateRegistry = {};

//
// Utility function to support the clientside framework. 
// This file is javascript library independent.
//

var FormsUtil = function() {

  //
  // Function to check if the client is an internet explorer browser
  //
  function isIE() {
    var isIE = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;   // true if we're on ie
    return isIE;  
  }

  //
  // function to normalize a string: convert dots to underscores.
  // this is used, because div id, names are not allowed to have dots in it.
  //
  function normalize(str) {
    // global replace the dot by an underscore
    return str.replace(/\./g,'_');
  }

  //
  // function which makes sure the hidden variable precondition_show and precondition_hide are set correctly.
  // these hidden are set to let the engine know, a field is clientside shown or hidden. 
  // otherwise the engine would return to the same step (for non javascript support)
  //
  function setPrecondition(identifier, inputidentifier, mode, formid) {
    var obj = document.getElementById('precondition_' + formid.replace('wmform_','') + '_' + inputidentifier);
    if (typeof obj != 'undefined') {
      var value = obj.value;
      var spl = value.split(',');

      if (mode == 'add') {
        if (!contains(spl, identifier)) {
          // add it
          spl.push(identifier);
        }
      } else {
        if (contains(spl, identifier)) {
          // remove it
          removeByElement(spl,identifier);
        }        
      }
      obj.value = spl.join(',');
    }
  }

  //
  // function to remove an entry from an array
  //
  function removeByElement(arrayName,arrayElement) {
    for(var i=0; i<arrayName.length;i++) { 
      if(arrayName[i]==arrayElement) {
        arrayName.splice(i,1); 
        break;
      }
    } 
  }

  //
  // function to join the attributes of an object with a delimiter.
  // the joined string is returned
  //
  function join(obj,delimiter) {
    var str = '';
    for(var item in obj) {
      if (str != '') {
        str += delimiter;
      }
      str += obj[item];
    }
    return str;
  }

  //
  // function to check if a value is contained in an array
  //
  function contains(array, element) {
   for (var i = 0; i < array.length; i++) {
     if (array[i] == element) {
       return true;
     }
    }
    return false;
  }

  //
  // function to get an object / attribute based on the attributes of the given object and a dot expression.
  // returns the object / attribute
  //
  function getObject(obj, expression) {
    if (typeof obj != 'undefined' && obj != null) {
      var index = expression.indexOf('.');
      if (index == -1) {
        return obj[expression];
      } else {
        return getObject(obj[expression.substring(0,index)],expression.substring(index+1, expression.length));
      }
    } else {
      return null;
    }
  }

  //
  // Function to check if fields have to be shown or hidden. The function uses an object from the scope as input.
  //
  function checkConditions(obj, path, formId) {
    var result = new Array();
    // loop over all objects in the scope and check if the visibility is changed
    for (var item in obj) {
      if (obj != null && obj[item] != null) {
        var property = obj[item];
        if (typeof property.checkConditions == 'function') {
          // do the check
          if (property.checkConditions()) {
            if (property.visible) {
              setPrecondition(path + item,'show','add', formId);
              setPrecondition(path + item,'hide','remove', formId);

              result.push({"value":"show","identifier":path + item});
            } else {

              setPrecondition(path + item,'hide','add', formId);
              setPrecondition(path + item,'show','remove', formId);  

              result.push({"value":"hide","identifier":path + item});
            }
          }

        }
        // if object then go recursive to look for subforms and repeaters
        if (typeof property == 'object' && property.visible) {
          // FIXME: maybe this can be optimized??
          var subResult = checkConditions(property,path + item + '.', formId);
          for (i=0;i < subResult.length;i++) {
            result.push(subResult[i]);
          }
        }
      }
    }  
    return result;
  }

  //
  // Public methods and variables.
  //
  return {
    checkConditions:checkConditions,
    getObject:getObject,
    contains:contains,
    join:join,
    isIE:isIE,
    normalize:normalize
  }


}();
