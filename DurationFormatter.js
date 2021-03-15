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
    const findLastS = times[i][1].lastIndexOf("s");
    const firstText = times[i][1].substring(0, findLastS);
    const lastText = times[i][1].substring(findLastS + 1, times[i][1].length);

    if (times[i][0] === 0) continue;
    result +=
      " " +
      times[i][0] +
      " " +
      (times[i][0] === 1 ? firstText + lastText : times[i][1]);
  }

  if (result == "") return "now";
  if (!times[3][0] && !times[4][0]) return result.replace(",", "").trim();
  if (!times[4][0]) return result.replace(" and", "").trim();

  return result.trim();
}
