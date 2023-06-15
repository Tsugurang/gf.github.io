var num = 1;

// 초기에 첫 번째 div만 표시
window.onload = function() {
  var initialDiv = document.getElementById("photon1");
  initialDiv.style.display = "block";
};

function changePic(group) {
  var currentDiv = document.getElementById("photon" + num);
  currentDiv.style.display = "none";
  
  var nextDiv = document.getElementById("photon" + group);
  nextDiv.style.display = "block";
  
  num = group;
}

function toggleBorder(element) {
  var newnewscates = document.getElementsByClassName("newnewscate");
  
  // 모든 guncate 요소에 대해 반복
  for (var i = 0; i < newnewscates.length; i++) {
    var newnewscate = newnewscates[i];
    
    // 현재 요소와 클릭된 요소가 동일한 경우, active 클래스를 토글
    if (newnewscate === element) {
      newnewscate.classList.toggle("activetwo");
    }
    // 다른 요소인 경우, active 클래스 제거
    else {
      newnewscate.classList.remove("activetwo");
    }
  }
}