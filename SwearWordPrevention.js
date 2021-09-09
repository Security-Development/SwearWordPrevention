/**
  * WrodData.txt의 출처 : https://github.com/Hanul/BadWordFilter/blob/master/DB/KO (약간 수정함)
  */

const fs = require("fs");

function FilterMSG(msg)
{
  const filter1 = msg.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "");
  const filter2 = filter1.replace(/[" "]/gi, "");
  const filter3 = filter2.replace(/[0-9]/g, "");
  const filter4 = filter3.replace(/[ㅏ-ㅣ]/g, "");

  return filter4

}

function SerachMSG(msg)
{
  const data = fs.readFileSync("./data/WordData.txt").toString().split("\n");
  const filter = FilterMSG(msg);

  for(let i = 0; i < data.length; i++)
  {
    const word = data[i].replace(/["\r"]/gi, "");

    if(filter.indexOf(word) != -1)
    {
      if(!word) continue;

      console.log(`해당 단어에서 "${word}"라는 단어를 발견 했습니다.`);

    }

  }

}

SerachMSG("안녕 시@@@!1!111121발 왕@!###################@13!@#12따 아놔 시불 시발 새끼야! 시바견");
