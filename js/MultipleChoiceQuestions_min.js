var MCQ=function(){var e,i,n,o,a,r,c,t,l=this,p=[],s=[],u=[],d=1,h=0,m=0,f=[],g=[];l.mainRef=ctrl;var v,y,b=[];console.log(l.mainRef),this.init=function(t){o=t,l.currentData=o.questionData,l.declaration(),l.activityValidation(),l.hideAll(),l.loadUI(l.currentData),l.bindEvents(),v=setInterval(l.timer,1e3)},this.activityValidation=function(){p=o.questionData[d].activity,c=o.questionData[d].activity.length,$("#difficultyLevel").html("Difficulty Level: "+o.questionData[d].activityLevel),console.log(".............................."+o.questionData[d].activityLevel+".............................................")},this.declaration=function(){u=[],keyArr=[],!(p=[]),t=o.questionData[0].correctAnswerTarget,e=i=0},this.clear=function(){},this.randomize=function(t){for(var e,i,n=t.length;0!==n;)i=Math.floor(Math.random()*n),e=t[n-=1],t[n]=t[i],t[i]=e;return t},this.loadUI=function(t){$("#title").html(l.currentData[0].slideTitle),l.loadQuestions()},this.loadQuestions=function(){l.preloader("hide"),n=i+1,$("#optionContainer").html(""),$("#questionNo").html(n+".  "),$("#previousBtn").css("pointer-events","none"),$("#previousBtn").css("opacity","0.5"),(1<=e||e==c)&&($("#previousBtn").css("pointer-events","auto"),$("#previousBtn").css("opacity","1")),n==c?$("#submitBtn").html("Submit"):$("#submitBtn").html(" Next "),$("#submitBtn").css("pointer-events","none"),$("#submitBtn").css("opacity","0.5"),console.log("questionAttended:"+i),s=[],$(".currentQuestion").html(n+" of "+c),$("#question").html(p[e].question.trim()),$("#question").attr("correcttarget",p[e].answer).attr("indexNumber",p[e].questionNumber),p[e].isImage?$("#questionImage").html('<img class="img-fluid img" src ="'+p[e].imagePath+'">'):$("#questionImage").html("");for(var t=0;t<p[e].answerOption.length;t++)s.push(p[e].answerOption[t]);l.generateOptions(),l.bindEvents(),l.generateCorrectAnswer(),u.push(p[e].question),e++,l.preloader("hide")},this.generateOptions=function(){for(var t=0;t<s.length;t++)p[e].isOptionImage?s[t].isOptionImage?$("#optionContainer").append('<div class="'+p[e].isInputType+' choice_area d-flex "><span class="alphabetOption checkList1"></span> <input type="'+p[e].isInputType+'" class="radioColor" name="radioOption" id="'+p[e].isInputType+"_"+t+'"> <label for="'+p[e].isInputType+"_"+t+'"><img class="img-fluid img" src ="'+s[t].value+'"></label> </div>'):$("#optionContainer").append('<div class="'+p[e].isInputType+' choice_area d-flex "><span class="alphabetOption checkList1"></span> <input type="'+p[e].isInputType+'" class="radioColor" name="radioOption" id="'+p[e].isInputType+"_"+t+'"> <label for="'+p[e].isInputType+"_"+t+'">'+s[t].value+"</label> </div>"):$("#optionContainer").append('<div class="'+p[e].isInputType+' choice_area d-flex"><span class="alphabetOption checkList1"></span> <input type="'+p[e].isInputType+'" class="radioColor" name="radioOption" id="'+p[e].isInputType+"_"+t+'"> <label for="'+p[e].isInputType+"_"+t+'">'+s[t]+"</label> </div>")},this.generateCorrectAnswer=function(){r=$("#question").attr("correcttarget"),console.log("answer:"+r),$("#question").removeAttr("correcttarget")},this.bindEvents=function(){$("input[type=radio]").change(function(){$("#submitBtn").css("opacity","1"),$("#submitBtn").css("pointer-events","auto")}),$("input[type=checkbox]").change(function(){$("#submitBtn").css("opacity","1"),$("#submitBtn").css("pointer-events","auto")}),$("#submitBtn").unbind("click").bind("click",l.submitValidation),$("#previousBtn").unbind("click").bind("click",l.previousValidation)},this.submitValidation=function(){var i,n;l.preloader("show"),y=!1;var o=[],s=[];if($(this).css("pointer-events","none"),$(this).css("opacity","0.5"),$("input[type='checkbox']:checked, input[type='radio']:checked").each(function(t,e){i=$(this).attr("id"),console.log($(e).attr("type")),"checkbox"==$(e).attr("type")?0!=$("label[for='"+i+"']").find("img").length?(o.push($("label[for='"+i+"']").find("img").attr("src")),s.push($("label[for='"+i+"']").find("img").attr("src"))):(o.push($("label[for='"+i+"']").text()),s.push($("label[for='"+i+"']").text())):(0!=$("label[for='"+i+"']").find("img").length?(n=$("label[for='"+i+"']").find("img").attr("src")).trim()==r.trim()&&(y=!0):(n=$("label[for='"+i+"']").html()).trim()===r.trim()&&(y=!0),s.push(n))}),"checkbox"==p[e-1].isInputType&&l.checkBoxValidation(o),h=c,y){b.push(e-1),a++,f.push({questionIndex:e-1,optionIndex:s,feedback:"correct"}),console.log("..................correct....................");$("#question").attr("indexnumber")}else f.push({questionIndex:e-1,optionIndex:s,feedback:"wrong"}),console.log("..................Incorrect......................");[],$("input[type='radio']").prop("disabled","true"),$("input[type='checkbox']").prop("disabled","true"),l.checkAnswerValidation(),l.progressValidation()},this.checkBoxValidation=function(t){for(var e=r.split(","),i=0,n=0;n<e.length;n++)for(var o=0;o<t.length;o++)t[o].trim()===e[n].trim()&&i++;i==e.length&&t.length==e.length&&(y=!0),console.log("answerValue:::::::"+y)},this.checkAnswerValidation=function(){i++,console.log("CorrectTarget:"+t),console.log("questionAttended:"+i),i==c?l.timerFeedBackFunction():l.reloadActivity(0)},this.downloadPdfFunction=function(){var t=document.createElement("a");t.href=url,t.download="file.pdf",t.dispatchEvent(new MouseEvent("click")),$("#download_pdf").append(t)},this.evaluatefeedBack=function(){var t=l.currentData[0].correctFeedBack,e=100*a/c,i="",n="";n=80<=e.toFixed(1)?(i=t[0].levelTitle,t[0].targetLevelImage):e.toFixed(1)<80&&50<=e.toFixed()?(i=t[1].levelTitle,t[1].targetLevelImage):(i=t[2].levelTitle,t[2].targetLevelImage),$(".congratsText").html(i),$(".feedbacktrophy").attr("src",n);$(".multichoice").data("course"),$(".multichoice").data("module")},this.reloadActivity=function(t){clearTimeout(e);var e=setTimeout(function(){l.loadQuestions()},t)},this.preloader=function(t){"show"==t?$(".preloader").show():$(".preloader").hide()},this.removeCorrectQuestion=function(t){for(var e=0;e<p.length;e++)p[e].questionNumber==t&&(p.splice(e,1),console.log(p))},this.checkAnswer=function(){$("input[type='radio']").prop("disabled","true"),d<3&&d++,setTimeout(function(){l.init(o)},2e3)},this.hideAll=function(){$("#question").html(""),$("#quesList").html(""),$("#optionContainer").html(""),$(".scrollBtn").css("opacity","0"),$("#feedbackSection").css("display","none"),$("input[type='radio']").prop("disabled","false"),$(".showAnsList_cntr").css("display","none"),$("#showAnswer").css("pointer-events","auto"),$("#showAnswer").css("opacity","1"),a=0},this.progressValidation=function(){var t=(100*i/c).toFixed(3)+"%";$("#ui-progressbar").css({width:t})},this.previousValidation=function(){l.preloader("show"),e-=2,i-=1,h-=1,f.pop();for(var t=0;t<b.length;t++)b[t]==e&&0<a&&a--;l.reloadActivity(0),l.progressValidation()},this.showAnswer=function(){$(this).css("pointer-events","none"),$(this).css("opacity","0.5"),$(".showAnsList_cntr").css("display","block"),$(window).scroll(function(){0<$(this).scrollTop()?$(".scrollBtn").css("opacity","1"):$(".scrollBtn").css("opacity","0")}),$(".scrollBtn").click(function(){$("html, body").animate({scrollTop:0},function(){$(".scrollBtn").css("opacity","0")})});var e="",s=0;(g=p).forEach(function(i,n){var o="",t="";s=n+1,i.answerOption.forEach(function(t,e){i.isOptionImage?t.isOptionImage?o+="<li id='ques"+n+"opt"+e+"'> <img class='img-fluid' src="+t.value+"><span></span></li>":o+="<li id='ques"+n+"opt"+e+"'>"+t.value+"</li>":o+="<li id='ques"+n+"opt"+e+"'>"+t+"</li>"}),i.isImage&&(t="<img class='img-fluid' src="+i.imagePath+">"),e+="<div class='question_cntr p-3'><p><span>"+s+".</span> "+i.question+"</p>"+t+"<ul class='list-group'>"+o+"</ul></div>"}),$("#quesList").html(e),g.forEach(function(a,r){s=r+1,a.answerOption.forEach(function(t,e){for(var i=0;i<f.length;i++)for(var n=0;n<f[i].optionIndex.length;n++)t==f[i].optionIndex[n]?a.isOptionImage&&t.isOptionImage?$("#ques"+i+"opt"+e).find("span").html("<img width='20px' src='assets/images/shell/wrong.png'>"):$("#ques"+i+"opt"+e).css("color","red"):t.value==f[i].optionIndex[n]&&(a.isOptionImage&&t.isOptionImage?$("#ques"+i+"opt"+e).find("span").html("<img width='20px' src='assets/images/shell/wrong.png'>"):$("#ques"+i+"opt"+e).css("color","red"));var o="";if("checkbox"==a.isInputType){o=a.answer.split(",");for(var s=0;s<o.length;s++)a.isOptionImage?t.isOptionImage?o[s].trim()==t.value.trim()&&$("#ques"+r+"opt"+e).find("span").html("<img width='20px' src='assets/images/shell/tick.png'>"):o[s].trim()==t.value.trim()&&$("#ques"+r+"opt"+e).css("color","green"):o[s].trim()==t.trim()&&$("#ques"+r+"opt"+e).css("color","green")}else o=a.answer,a.isOptionImage?t.isOptionImage?o.trim()==t.value.trim()&&$("#ques"+r+"opt"+e).find("span").html("<img width='20px'src='assets/images/shell/tick.png'>"):o.trim()==t.value.trim()&&$("#ques"+r+"opt"+e).css("color","green"):o.trim()==t.trim()&&$("#ques"+r+"opt"+e).css("color","green")})})};var w=60*l.mainRef.moduleTime;this.timer=function(){var t=Math.floor(w/24/60/60),e=Math.floor(w-86400*t),i=Math.floor(e/3600),n=Math.floor(e-3600*i),o=Math.floor(n/60),s=w%60;this.pad=function(t){return t<10?"0"+t:t},document.getElementById("timer").innerHTML=pad(i)+":"+pad(o)+":"+pad(s),0==w?(clearInterval(v),$("#timeUpscreen").css("display","block"),$("#viewScore").off("click").on("click",l.timerFeedBackFunction)):w--},this.timerFeedBackFunction=function(){e=0,"simple"==o.questionData[d].activityLevel?(l.preloader("hide"),clearInterval(v),$("#feedbackSection").css("display","block"),$("#timeUpscreen").css("display","none"),$("#questionScreen").css("display","none"),l.currentData[0].NegativeMarks?((m=a*l.currentData[0].questionMark-(c-a)*l.currentData[0].questionMark)<0&&(m=0),$(".evaluvateTest").html("Your Score : "+m+" / "+h+'<sup class="superText">*</sup>'),$(".evalText").html('<span class="superText">*</span><span style="color:green; font-size:14px;">- Negative Marks also included</span>')):$(".evaluvateTest").html("Your Score : "+m+" / "+h),$(".total_Ques").html(c),$(".correct_Ques").html(a),$(".wrong_Ques").html(c-a),l.evaluatefeedBack(),$("#showAnswer").off("click").on("click",l.showAnswer),$("#download_pdf").off("click").on("click",l.exportHTMLToDoc)):l.checkAnswer()},this.exportHTMLToDoc=function(){l.showAnswer(),$(".scrollBtn").hide(),setTimeout(function(){$("#feedbackSection").wordExport(l.mainRef.moduleName)},2e3),$(".scrollBtn").show()}};