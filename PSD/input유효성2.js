i$('input:checkbox[name="checkbox_name"]').is(":checked") == true
$('input:checkbox[id="checkbox_name"]:checked').length

출처: https: //csslab.tistory.com/116 [learning DEV :D ]
  출처: https: //csslab.tistory.com/116 [learning DEV :D ]
  f($('input:radio[name=kboard-option-radio]').is(':checked') == false) {
    alert("문의유형을 선택해주세요");
  }
전체에서는: 13 번~23 번

$('input[type="radio"]') 0~3 >
  1 개라도 check pass >
  아니라면 "altert "
문의유형을 선택해주세요 "
$('input[type="checkbox"]') 0 >
  checkd == "false" >
  아니라면 "altert "
미동의시 문의가 어렵습니다.
"
$("input:visible") 반복문을 돌린다 .4~9 >
  if ()

    //완성!
    $('input[type="radio"]').each(function(idx) {
      if (!$(this).is(":checked")) {
        console.log("체크가안되었습니다.");
      } else {
        console.log("체크가되었습니다");
        return true;
      }
    });


$('input[type="checkbox"]').each(function(idx) {
  if (!$(this).is(":checked")) {
    console.log("동의 해주세요");
    reu
  } else {
    console.log("동의가 되었습니다");
  }
});


$('input[type="text"]').each(function(idx) {
  if (!$(this).val()) {
    console.log(`${idx} 내용을 입력해주세요`);
    return false;
  } else {
    console.log("입력되었습니다.");
  }
});

$('input[type="radio"]').each(function(idx) {
  console.log($(this).val());
});

$('input[type="radio"]').eq(0).is(":checked");





var taget = "text";

$('input[type="text"]').each(function(idx) {
  if (!$(this).val()) {
    console.log(`${idx} 내용을 입력해주세요`);
  } else {
    console.log("입력되었습니다.");
  }
});




var taget = ["radio", "checkbox", "text"];
for (i = 0; i < taget.length; i++) {

  //input type 비교
  $(`input[type="${taget[i]}"]`).each(function(idx) {
    if (!$(this).val()) {
      console.log(`${idx} 내용을 입력해주세요`);
      return false;
    } else {
      console.log(`${idx} 입력되었습니다.`);
    }
  });
  console.log("????if문 나옴 ");
}


////////요거
//////////////////////////////

var idx = 0;
var submitVal;
var submitBtn = jQuery('button[type="submit"]');
// var submitBtn= jQuery('.textbtn');

var submitVal;

function isSubmit() {
  $('input[type="radio"]').each(function(idx) {
    if ($(this).is(":checked") && idx < this.length) {
      console.log("값이 있습니다."); //있으면 다음 if문
      //return;
    }
  });
  // radio for end;

  $('input[type="text"]').each(function(idx) {
      if (!$(this).val()) {
        alert(`${idx}input : 내용을 입력해주세요`);
        return false;
      } else if ($(this).val() && this.length == idx ) {
				$('input[type="checkbox"]').each(function(idx) {
					if (!$(this).is(":checked")) {
						console.log("동의하지않았습니다..");
						return false;
					}
					return true;
				});
			}
  });
console.log("끝");




//isSubmit 끝

//클릭이벤트
submitBtn.click(function() {
  submitVal = isSubmit();
  if (submitVal) {
    console.log("제출");
  } else {
    console.log("미제출");
  }
});








////
var ck = 0;
var submit = 0;


$('input[type="radio"]').each(function(idx) {
  if ($(this).is(":checked")) {
    console.log(`${idx}체크가되었습니다.`);
    ck += 1;
  } else {
    console.log("체크가안되었습니다.");
  }
});

if (ck == 0) {
  alert("문의 유형을 선택해주세요");
}


$('input[type="text"]').each(function(idx) {
  if (!$(this).val()) {
    console.log(`${idx} 내용을 입력해주세요`);
    alert("input : 내용을 입력해주세요");
    return false;
  } else {
    console.log("입력되었습니다.");
  }
});



$('input[type="checkbox"]').each(function(idx) {
  if (!$(this).is(":checked")) {
    console.log("동의 해주세요");
    alert("동의 해주세요");
  } else {
    console.log("동의가 되었습니다");
  }
});









//성공 2타입
var ck = 0;
var sucess = true;

while (!sucess) {

  $('input[type="radio"]').each(function(idx) {
    if ($(this).is(":checked")) {
      console.log(`${idx}체크가되었습니다.`);
      ck++;
    }
  });

  if (ck == 0) {
    alert("문의 유형을 선택해주세요");
    return false;
  } else {
    alert("성공");
  }


  $('input[type="text"]').each(function(idx) {
    if (!$(this).val()) {
      console.log(`${idx} 내용을 입력해주세요`);
      return false;
    } else {
      console.log("입력되었습니다.");
    }
  });

  console.log("실패");
  return false;
} else {
  sucess = true;
  console.log("제출");
}





$('input[type="radio"]').each(function(idx) {
  if ($(this).is(":checked") && idx < this.length) {
    console.log("값이 있습니다."); //있으면 다음 if문
  }
  console.log("값이 없습니다.")
});


$('input[type="text"]').each(function(idx) {
  if (!$(this).val()) {
    alert(`${idx}input : 내용을 입력해주세요`);
    return false;
  } // 있으면 다음 if 문
});
return false;

$('input[type="text"]').each(function(idx) {
  if (!$(this).val()) {
    alert(`${idx}input : 내용을 입력해주세요`);
    return false;
  } else {
    $('input[type="checkbox"]').each(function(idx) {
      if (!$(this).is(":checked")) {
        console.log("동의하지않았습니다..");
        return false;
      }
      return true;
    });
  }
});
console.log("끝");





////
$('input[type="radio"]').each(function(idx) {
  if ($(this).is(":checked")) {
    console.log(`${idx}체크가되었습니다.`);
    $('input[type="text"]').each(function(idx) {
      if (!$(this).val()) {

      }
      //return false
    });
  } else {
    "문의사항이 체크된게 없습니다.
    //return false;"
  }
});


var ck = 0;
const submit = 0;

function textCheck() {
  $('input[type="text"]').each(function(idx) {
    if (!$(this).val()) {
      console.log(`${idx} 내용을 입력해주세요`);
      return false;
    } else {
      console.log("입력되었습니다.");
    }
  });
  console.log("텍스트 반복문 끝")
  return false;
}

//성공 1타입
var ck = 0;

$('input[type="radio"]').each(function(idx) {
  if ($(this).is(":checked")) {
    console.log(`${idx}체크가되었습니다.`);
  }
});
if (ck == 0) {
  console.log("라디오실패");
  return false;
}



//성공 2타입
var ck = 0;

$('input[type="radio"]').each(function(idx) {
  if ($(this).is(":checked")) {
    console.log(`${idx}체크가되었습니다.`);
    ck++;
  }
});
if (ck == 0) {
  alert("문의 유형을 선택해주세요");
} else {
  alert("성공");
}







-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
function chekBox() {
  $('input[type="checkbox"]').each(function(idx) {
    if (!$(this).is(":checked")) {
      console.log("동의 해주세요");
      return false;
    } else {
      console.log("동의가 되었습니다");
    }
  });
  console.log("체크박스 반복문 끝")
  return false;
}



var ck = 0;
var loop = 0;

$('input[type="radio"]').each(function(idx) {
  if (ck == 0 || $('input[type="radio"]').length != loop) {
    if ($(this).is(":checked")) {
      console.log(`${idx}체크가되었습니다.`);
      // textCheck();
      console.log("성공");
    } else if (ck == 0) {
      console.log("체크가안되었습니다. / 중간 실패");
      ++loop;
      console.log("loop : " + loop);
    }
  };
  console.log("체크가안되었습니다. / 끝 실패");
  return false;
});
console.log("문의 유형을 선택해주세요");\

\

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

var submitVal;

function val() {
  $('input[type="radio"]').each(function(idx) {
    if ($(this).is(":checked")) {
      console.log("값이 있습니다."); //있으면 다음 if문
      return true;
    }
    console.log(`${idx} : 값이 없습니다.`);
    return false;
  });
}

console.log(submitVal);






-- -- -- -- -- -- -- -- -- -- -- -- -


var submitBtn = $y('.test');
var submitVal;

function isSubmit() {
  $('input[type="radio"]').each(function(idx) {
    if ($(this).is(":checked")) {
      console.log("값이 있습니다."); //있으면 다음 if문
      return true;
    } else {
      return false;
    }
  });
}

submitBtn.click(function() {
  submitVal = isSubmit();
  if (submitVal) {
    console.log("제출");
  } else {
    console.log("미제출");
  }
});

var submitVal;

function submit() {
  $('input[type="radio"]').each(function(idx) {
    if ($(this).is(":checked") && idx < this.length) {
      console.log("값이 있습니다."); //있으면 다음 if문
      break;
    }
    submitVal = false;
    break;
  });
};
