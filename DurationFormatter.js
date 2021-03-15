function DurationFomatter(seconds) {
  const times = [
    [Math.floor(seconds / 31536000), "years"],
    [Math.floor((seconds % 31536000) / 86400), "days"],
    [Math.floor(((seconds % 31536000) % 86400) / 3600), "hours,"],
    [Math.floor((((seconds % 31536000) % 86400) % 3600) / 60), "minutes and"],
    [(((seconds % 31536000) % 86400) % 3600) % 60, "seconds"],
  ];
  let result = "";

  for (var i = 0; i < times.length; i++) {
    // 뒤에서 부터 s 찾은뒤 자르기
    const findLastS = times[i][1].lastIndexOf("s");

    // index 처음부터 s 전 까지
    const firstText = times[i][1].substring(0, findLastS);

    // index s 이후부터 끝까지
    const lastText = times[i][1].substring(findLastS + 1, times[i][1].length);

    if (times[i][0] === 0) continue;
    // 값이 1이면 s는 잘라주고 아니면 붙혀서 리턴
    result +=
      " " +
      times[i][0] +
      " " +
      (times[i][0] === 1 ? firstText + lastText : times[i][1]);
  }
  // 0s 일경우 now리턴
  if (result == "") return "now";

  // hours 이후 분과 초가 없으면 , 없애기
  if (!times[3][0] && !times[4][0]) return result.replace(",", "").trim();

  // 초가 없으면 and 없애기
  if (!times[4][0]) return result.replace(" and", "").trim();

  return result.trim();
}

console.log(DurationFomatter(366666));
