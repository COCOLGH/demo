function $(id) {
  return document.getElementById(id);
}

function chkEmail() {
  if(isBlank($("email").value)) {
    $("emailPrompt").style.color = "red";
    $("emailPrompt").innerHTML = "*邮箱必须填写！";
    return false;
  }else{
    $("emailPrompt").style.color = "black";
    $("emailPrompt").innerText = "*";
  }

  if(!isEmail($("email").value)) {
    $("emailPrompt").style.color = "red";
    $("emailPrompt").innerText = "*邮箱填写不正确！";
    return false;
  }else{
    $("emailPrompt").style.color = "black";
    $("emailPrompt").innerText = "*";
  }
  
  return true;
}


function chkUsername() {
  if(isBlank($("username").value)) {
    $("usernamePrompt").style.color = "red";
    $("usernamePrompt").innerHTML = "*用户名必须填写！";
    return false;
  }else{
    $("usernamePrompt").style.color = "black";
    $("usernamePrompt").innerText = "*";
  }

  var re = new RegExp(/^[a-zA-Z]\w{5,11}$/);

  if(!re.test($("username").value)) {
    $("usernamePrompt").style.color = "red";
    $("usernamePrompt").innerText = "*只能以英文开头，6-12个英文，数字或下划线！";
    return false;
  }else{
    $("usernamePrompt").style.color = "black";
    $("usernamePrompt").innerText = "*";
  }
  return true;
}


function chkPassword() {
  if(isBlank($("password").value)) {
    $("passwordPrompt").style.color = "red";
    $("passwordPrompt").innerHTML = "*密码必须填写！";
    return false;
  }else{
    $("passwordPrompt").style.color = "black";
    $("passwordPrompt").innerText = "*";
  }

  var pw = new RegExp(/^\w{6,12}$/);

  if(!pw.test($("password").value)) {
    $("passwordPrompt").style.color = "red";
    $("passwordPrompt").innerHTML = "*密码必须为6-12个英文，数字，下划线！";
    return false;
  } else {
    $("passwordPrompt").style.color = "black";
    $("passwordPrompt").innerText = "*";
  }
  return true;
}

function chkPasswords() {
  if($("password").value != $("password2").value) {
    $("password2Prompt").style.color = "red";
    $("password2Prompt").innerHTML = "*两次输入的密码不一致！";
    return false;
  }else{
    $("password2Prompt").style.color = "black";
    $("password2Prompt").innerText = "*";
  }
  return true;
}


function chkIdnum() {
  if(!isBlank($("idnum").value)) {
    if(!isIdcardNum($("idnum").value)) {
      $("idnumPrompt").style.color = "red";
      $("idnumPrompt").innerText = "*身份证号应为18位！";
      return false;
    }
  }
  $("idnumPrompt").style.color = "black";
  $("idnumPrompt").innerText = "";
  return true;
}


function chkPhonenum() {
  if(!isBlank($("phonenum").value)) {
    if(!isPhoneNum($("phonenum").value)) {
      $("phonenumPrompt").style.color = "red";
      $("phonenumPrompt").innerText = "*电话号码格式不正确！";
      return false;
    }
  }
  $("phonenumPrompt").style.color = "black";
  $("phonenumPrompt").innerText = "";
  return true;
}


function chkAll() {
  var msg = "";

  if(!chkEmail($("email").value)) {
    msg += "邮箱格式不正确！\n";
  }

  if(!chkUsername($("username").value)) {
    msg += "用户名格式不正确！\n";
  }

  if(!chkPassword($("password").value)) {
    msg += "密码格式不正确！\n";
  }

  if(!chkPasswords($("password2").value)) {
    msg += "两次密码不一致！\n";
  }

  if(!chkIdnum($("idnum").value)) {
    msg += "身份证格式不正确！\n";
  }

  if(!chkPhonenum($("phonenum").value)) {
    msg += "电话号码格式不正确！\n";
  }

  if(msg != "") {
    msg =msg.substr(0, msg.length - 1);
    alert(msg);
    return false;
  }

  return true;
}