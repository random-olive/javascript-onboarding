function problem6(forms) {
  var answer = [];
  let find = []; //중복문자열
  let idx = [];

  for (let i = 0; i < forms.length; i++) {
    if (forms[i][1]) {
      for (let j = 0; j < forms[i].length; j++) {
        if (forms[i][1][j + 1]) {
          find.push({ idx: i, char: forms[i][1][j] + forms[i][1][j + 1] });
        }
      }
    }
  }
  
  return answer;
}
//기능 요구사항
//같은 글자가 연속적으로 포함되면, 이메일 목록 리턴
//제한사항
//2글자 이상 연속문자
//1~10,000명 이하
//이메일 형식에 부합, 전체길이는 11자 이상 20자 미만
// @email.com 도메인으로만 제한
//닉네임은 한글만 가능, 전체길이는 1자 이상 20자 미만
// 이메일 오름차순, 중복 제거?? 중복제거 뭔솔
// -- case 필요한가?
module.exports = problem6;
