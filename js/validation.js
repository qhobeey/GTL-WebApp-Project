
function validateEmptyField(id) {
  if(document.querySelector(`#${id}`).value == '') {
      return true
  }else{
    return false
  }
}

function validatePhoneInput(number) {
  var phone = parseInt(number)
  if(phone == NaN || phone == undefined || phone == "") return false
  if(number.length < 10 || number.length > 10) {
    return false
  }else {
    return true
  }
}

function validateTextInput(text) {
  var errorArray = [".", "-"]
  for (var i = 0; i < 10; i++) {
    errorArray.push(String(i))
  }
  for (var i = 0; i < errorArray.length; i++) {
    if(text.includes(errorArray[i])) return false
  }

  return true
}

function validateEmailInput(email) {
  var atpos = email.indexOf("@")
  var dotpos = email.indexOf(".")

  if(atpos < 1 || (dotpos - atpos < 2)) {
    return false
  } else
  return true
}

function onchangeNumber(id) {
  var number = document.querySelector(`#${id}`).value
  if(validateEmptyField(id) == false) {
    document.querySelector("#gt_contact_button").disabled = true
    alertError("Sorry this field is required", id)
  } else {
    document.querySelector("#gt_contact_button").disabled = true
    resetError(id)
  }
  if(validatePhoneInput(number) == false) {
    document.querySelector("#gt_contact_button").disabled = true
    alertError("Please enter a valid number", id)
  } else {
    document.querySelector("#gt_contact_button").disabled = true
    resetError(id)
  }
}

function onchangeName(id) {
  var text = document.querySelector(`#${id}`).value
  if(validateTextInput(text) == false) {
    document.querySelector("#gt_contact_button").disabled = true
    alertError("Sorry this field cannot have special characters", id)
  } else {
    document.querySelector("#gt_contact_button").disabled = true
    resetError(id)
  }
}

function onchangeEmail(id) {
  var email = document.querySelector(`#${id}`).value
  if(validateEmailInput(email) == false) {
    document.querySelector("#gt_contact_button").disabled = true
    alertError("Sorry your email seem not to be valid", id)
  } else {
    document.querySelector("#gt_contact_button").disabled = false
    resetError(id)
  }
}

function submitForm() {
  var email = document.querySelector("#email").value
  var firstname = document.querySelector("#firstname").value
  var lastname = document.querySelector("#lastname").value
  var phone_number = document.querySelector("#phone_number").value
  if(email  == "" || firstname  == "" || lastname  == "" || phone_number  == "") {
    document.querySelector("#top_err_p").style.display = "block"
    return false
  }else{
    document.querySelector("#top_err_p").style.display = "none"
    return true
  }
}

function alertError(message, id) {
  document.querySelector(`#er_${id}`).innerHTML = message
}

function resetError(id) {
  document.querySelector(`#er_${id}`).innerHTML = ""
}
