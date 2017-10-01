var base_image = document.getElementById("image");
var result;

Tesseract.recognize(base_image).then(function(result) {
  console.log(result)
})

var calorie,protein,fat, sodium,sugar,carbohydrate;
var newWord=true;
var words=[];
console.log(result);
/*  if(4<"b")
  console.log("false")
  else
  console.log("true")*/
for(var i = 0;i!=length;i++)
{
    if(newWord)
        if(result[i]==" "||result[i]=="\n")
        {
            newWord=true;
        }
        else
        {
          if(result[i]<"0"||result[i]>"9"&&result[i]<"A"||result[i]>"Z"&&result[i]<"a"||result[i]>"z")//true if character is junk
            {
                console.log("testtest")
                continue;//character is junk, so we skip it
            }
              wordsLength++;
            words.push(result[i]);
            newWord=false;
        }
    else if(result[i]!=" "||result[i]=="\n")
    {
        if(result[i]<"0"||result[i]>"9"&&result[i]<"A"||result[i]>"Z"&&result[i]<"a"||result[i]>"z")//true if character is junk
          {
              console.log("testtest")
              continue;//character is junk, so we skip it
          }
        words[wordsLength]=words[wordsLength]+result[i];
    }
    else
        newWord=true;
}
words.push("padpadpad");
wordsLength++;
for(var i = 0;i<wordsLength;i++)//test each word
{
  console.log(words[i])
    for(var j =0;j!=words[i].length;j++)
    {   //CALORIE CASE
        if((words[i].charAt(0)=="c"||words[i].charAt(0)=="C")&&(words[i].length==7||words[i].length==8))//calories
            {
              var threshhold=5,similarity=0;
              var chars=["a","l","o","r","i","e","s"];
              for(var n=0; n!=String(words[i]).length;n++)//cycle through word characters
              {
                  for(var k = 0;k!=chars.length;k++)//compare against chars
                      if(String(words[i])[n]==chars[k])
                        similarity++;
              }
              if(similarity>=threshhold)
              {
                for(var index=0;index<String(words[i+1]).length;index++)
                if(String(String(words[i+1])[index])=="O")
                  words[i+1][index]=0;
                  else if(String(String(words[i+1])[index])<"0"||String(String(words[i+1])[index])>"9")//if is not #
                  {
                    words[i+1]=words[i+1].substr(0,index);//extracts non#
                    index--;
                  }
                calorie=words[i+1];
                i++;
              }
              else
                continue;
                console.log(calorie +" calories")
          }
          //FAT CASE
          else if((words[i].charAt(0)=="f"||words[i].charAt(0)=="F")&&(words[i].length==3||words[i].length==4))//calories
              {
                var threshhold=2,similarity=0;
                var chars=["a","t"];
                for(var n=0; n!=String(words[i]).length;n++)//cycle through word characters
                {
                    for(var k = 0;k!=chars.length;k++)//compare against chars
                        if(String(words[i])[n]==chars[k])
                            similarity++;
                }
                if(similarity>=threshhold)
                {
                  for(var index=0;index<String(words[i+1]).length;index++)
                    if(String(String(words[i+1])[index])=="O")
                      words[i+1][index]=0;
                    else if(String(String(words[i+1])[index])<"0"||String(String(words[i+1])[index])>"9")//if is not #
                    {
                      words[i+1]=words[i+1].substr(0,index);//extracts non#
                      index--;
                    }
                    fat=words[i+1];
                  i++;
                }
                else
                  continue;
                console.log(fat + " fat")
              }
                //SODIUM CASE
              else if(sodium!=0&&(words[i].charAt(0)=="s"||words[i].charAt(0)=="S")&&(words[i].length==6||words[i].length==7))//SODIUM
                    {
                      var threshhold=4,similarity=0;
                      var chars=["o","d","i","u","m"];
                      for(var n=0; n!=String(words[i]).length;n++)//cycle through word characters
                      {
                          for(var k = 0;k!=chars.length;k++)//compare against chars
                              if(String(words[i])[n]==chars[k])
                                  similarity++;
                      }
                      if(similarity>=threshhold)
                      {
                        for(var index=0;index<String(words[i+1]).length;index++)
                          if(String(String(words[i+1])[index])=="O")
                            words[i+1][index]=0;
                          else if(String(String(words[i+1])[index])<"0"||String(String(words[i+1])[index])>"9")//if is not #
                          {
                            words[i+1]=words[i+1].substr(0,index);//extracts non#
                            index--;
                          }
                          sodium=words[i+1];
                        i++;
                      }
                      else
                        continue;
                      console.log(sodium + " sodium")
            }
            //CARBOHYDRATE CASE
            else if((words[i].charAt(0)=="c"||words[i].charAt(0)=="C")&&(words[i].length>=11&&words[i].length<=13))//SODIUM
                {
                  var threshhold=10,similarity=0;
                  var chars=["a","r","b","o","h","y","d","t","e"];
                  for(var n=0; n!=String(words[i]).length;n++)//cycle through word characters
                  {
                      for(var k = 0;k!=chars.length;k++)//compare against chars
                          if(String(words[i])[n]==chars[k])
                              similarity++;
                  }
                  if(similarity>=threshhold)
                  {
                    for(var index=0;index<String(words[i+1]).length;index++)
                      if(String(String(words[i+1])[index])=="O")
                        words[i+1][index]=0;
                      else if(String(String(words[i+1])[index])<"0"||String(String(words[i+1])[index])>"9")//if is not #
                      {
                        words[i+1]=words[i+1].substr(0,index);//extracts non#
                        index--;
                      }
                      carbohydrate=words[i+1];
                    i++;
                  }
                  else
                    continue;
                  console.log(carbohydrate + " carbohydrate")
            }
            //PROTEIN CASE
            else if((words[i].charAt(0)=="P"||words[i].charAt(0)=="p")&&(words[i].length>=6&&words[i].length<=8))//PROTEIN
                {
                  var threshhold=6,similarity=0;
                  var chars=["r","o","t","e","i","n"];
                  for(var n=0; n!=String(words[i]).length;n++)//cycle through word characters
                  {
                      for(var k = 0;k!=chars.length;k++)//compare against chars
                          if(String(words[i])[n]==chars[k])
                              similarity++;
                  }
                  if(similarity>=threshhold)
                  {
                    for(var index=0;index<String(words[i+1]).length;index++)
                      if(String(String(words[i+1])[index])=="O")
                        words[i+1][index]=0;
                      else if(String(String(words[i+1])[index])<"0"||String(String(words[i+1])[index])>"9")//if is not #
                      {
                        words[i+1]=words[i+1].substr(0,index);//extracts non#
                        index--;
                      }
                      protein=words[i+1];
                    i++;
                  }
                  else
                    continue;
                  console.log(protein + " protein")
          }
    }
}
}
