function problem7(user, friends, visitors) {
  var answer = [];
  let list = [];
  let tens = [];
  let result = [];
  let tensName = [];
  let sorted = [];
  let cutIdx = [0];
  let splitted = [];
  let deduplicated = [];
  let dummy = [];
  let topfive = [];

  for (let i = 0; i < friends.length; i++) {
    if (friends[i][0] || friends[i][1]) {
      if (user === friends[i][0]) {
        list.push(friends[i][1]);
      } else if (user === friends[i][1]) {
        list.push(friends[i][0]);
      }
    }
  }

  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < friends.length; j++) {
      if (list[i] === friends[j][0] && friends[j][1] !== user) {
        tens.push(friends[j][1]);
      } else if (list[i] === friends[j][1] && friends[j][0] !== user) {
        tens.push(friends[j][0]);
      }
    }
  }

  //visitors 체크

  //10점 계산
  for (let i = 0; i < tens.length; i++) {
    if (tens.indexOf(tens[i]) === i) {
      result.push({ name: tens[i], score: 10 });
    } else if (tens.indexOf(tens[i]) !== i) {
      result[tens.indexOf(tens[i])].score += 10;
    }
  }
  for (let i = 0; i < result.length; i++) {
    tensName.push(result[i].name);
  }

  //1점 계산 : 친구 제외
  if (visitors !== undefined) {
    for (let i = 0; i < visitors.length; i++) {
      //visitors=[b,b,d,b,s]
      //list:[d,s]
      //result=[name,score][3]

      if (!list.includes(visitors[i])) {
        if (tensName.includes(visitors[i])) {
          result[tensName.indexOf(visitors[i])].score += 1;
        } else if (visitors.indexOf(visitors[i]) === i) {
          result.push({ name: visitors[i], score: 1 });
          tensName.push(visitors[i]);
        } else if (visitors.indexOf(visitors[i]) !== i) {
          result[tensName.indexOf(visitors[i])].score += 1;
        }
      }
    }
  }

  //정렬
  result.sort((a, b) => {
    return b.score - a.score;
  });

  for (let i = 0; i < result.length; i++) {
    if (result[i + 1] && result[i].score !== result[i + 1].score) {
      cutIdx.push(i + 1);
    }
  }
  cutIdx.push(result.length);

  for (let i = 0; i < cutIdx.length - 1; i++) {
    //if (i === 0) {
    splitted = result.slice(cutIdx[i], cutIdx[i + 1]);

    sorted = splitted.sort((a, b) => {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });

    answer.push(...sorted);
  }

  // return answer; //[2,3]
  let min = 5 < answer.length ? 5 : answer.length;
  for (i = 0; i < min; i++) {
    topfive[i] = answer[i].name;
  }

  return topfive;
}

module.exports = problem7;
