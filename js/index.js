// poem
var words = [
  "银烛秋光冷画屏",
  "轻罗小扇扑流萤",
  "斜河拟看星度",
  "云销萍聚",
  "时歌金缕",
  "绿水暂如许",
  "画船听雨眠",
  "竹烟槐雨",
  "此去杜曲",
  "已近紫霄尺五",
  "扁舟夜宿吴江",
  "月光落在左手上，玫瑰长在右心房",
  "七待是你，夕望是你",
  "我已见过银河，但唯爱你这一颗星",
  "柳絮空缱绻",
  "南风知不知",
  "几许欢情与离恨",
  "正水佩霓裳无数",
  "年年并在此宵中",
  "银汉秋期万古同",
  "岂能无意酬乌鹊",
  "惟与蜘蛛乞巧丝",
  "微云未接过来迟",
  "由来碧落银河畔",
  "可要金风玉露时",
  "山野万里，你是藏在心里的欢喜",
  "恐是仙家好别离",
  "故教迢递作佳期",
  "今夜何夕",
  "见此良人",
  "铜壶漏报天将晓",
  "惆怅佳期又一年",
  "情不所起",
  "一往而深",
  "络角星河菡萏天",
  "一家欢笑设红筵",
  "应倾谢女珠玑箧",
  "尽写檀郎锦绣篇",
  "若有知音见采",
  "不辞唱遍阳春",
  "香帐簇成排窈窕",
  "金针穿罢拜婵娟",
  "夜月一帘幽梦",
  "和光同尘",
  "云阶月地",
  "关锁千重",
  "惊落梧桐",
  "草际鸣蛩",
  "未会牵牛意若何",
  "须邀织女弄金梭",
  "天上分金镜",
  "人间望玉钩",
  "钱塘苏小小",
  "更值一年秋",
  "别离还有经年客",
  "怅望不如河鼓星",
  "鹊辞穿线月",
  "花入曝衣楼",
  "一道鹊桥横渺渺",
  "千声玉佩过玲玲",
  "别浦今朝暗",
  "罗帷午夜愁",
  "不觉新凉似水",
  "相思两鬓如霜",
  "金风玉露一相逢",
  "便胜却人间无数",
];
function randomNum(min, max) {
  var num = (Math.random() * (max - min + 1) + min).toFixed(2);
  return num;
}
function init() {
  let container = document.querySelector(".container");
  let f = document.createDocumentFragment();
  words.forEach((w) => {
    let word_box = document.createElement("div");
    let word = document.createElement("div");
    word.innerText = w;
    word.classList.add("word");
    word.style.color = "#00FF00";
    word.style.fontFamily = "楷体";
    word.style.fontSize = "20px";
    word_box.classList.add("word-box");
    word_box.style.setProperty("--margin-top", randomNum(-40, 20) + "vh");
    word_box.style.setProperty("--margin-left", randomNum(6, 35) + "vw");
    word_box.style.setProperty("--animation-duration", randomNum(8, 20) + "s");
    word_box.style.setProperty("--animation-delay", randomNum(-20, 0) + "s");

    word_box.appendChild(word);
    f.appendChild(word_box);
  });
  container.appendChild(f);
}
window.addEventListener("load", init);
let textone = document.querySelector(".textone").querySelector("h1");
let text = document.querySelector(".text").querySelector("h1");
setTimeout(function () {
  textone.innerHTML = "白茶清欢无别事，我在等风也等你！";
  textone.style.color = "#DDFFFF";
  textone.style.fontFamily = "楷体";
  text.innerHTML = "";
}, 28000);
