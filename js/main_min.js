var Controller=function(){var o=this;this.loadImageCount=0,this.folder,this.moduleName,this.courseName,this.moduleTime,this.init=function(){this.loadJson(myPath.__dir),this.showActivityCntr(!1)},this.loadJson=function(e){$.getJSON(e+"data/config.json",function(e){o.loadUI(e)})},this.preloadImages=function(e){console.log(imgArr.length);for(var t=0;t<imgArr.length;t++){var s=new Image;s.src=imgArr[t],s.addEventListener("load",o.onImageLoad.bind(null,e),!1),s.addEventListener("error",o.onImageLoad.bind(null,e),!1)}},this.onImageLoad=function(e){o.loadImageCount++;var t=o.loadImageCount/imgArr.length*100;o.loadImageCount==imgArr.length&&o.preloader("hide"),$(".progress__item").html(t.toFixed(0)+" %")},this.loadUI=function(e){e.sampleCourse;var o="";e.sampleCourse.forEach(function(t,e){var s="";0==e?t.courseModules.forEach(function(e){s+="<li class='list-group-item d-flex justify-content-between moduleList' data-course='"+t.courseTittle+"' data-module='"+e.moduleName+"' data-link='"+e.moduleLink+"' data-time='"+e.moduleTime+"' onclick='ctrl.selectActivity(this,event)'><p class='moduleNamecnt '>"+e.moduleName+"</p><span><p class='module_timing'><span>"+e.moduleTime+"<span> minutes</p><img class='statusImg' src='assets/images/shell/unlock.png'></span></li>"}):t.courseModules.forEach(function(e){s+="<li class='list-group-item d-flex justify-content-between price-course' style='pointer-events:none' data-course='"+t.courseTittle+"' data-module='"+e.moduleName+"' data-time='"+e.moduleTime+"' data-link='"+e.moduleLink+"' onclick='ctrl.selectActivity(this,event)'><p class='courseModuletext'>"+e.moduleName+"</p><span><p class='module_timing'><span>"+e.moduleTime+"<span> minutes</p><img class='statusImg' src='assets/images/shell/lock.png'></span></li>"}),o+="<div class='card'><div class='card-header'><a class='card-link custom_card' data-toggle='collapse' href='#"+t.courseID+"'>"+t.courseTittle+"</a></div><div id='"+t.courseID+"' class='collapse' data-parent='#accordion'><div class='card-body card_paddding'><p class='priceCategory'>"+t.courseCategory+"</p> <ul class='list-group'>"+s+"</ul></div></div></div>"}),$("#accordion").html(o)},this.preloader=function(e){"show"==e?$(".preloader").show():($(".preloader").hide(),$(".courseUnits").show())},this.selectActivity=function(e,t){$(".progress__item").html(""),o.preloader("show"),o.showActivityCntr(!0),o.folder=e.dataset.link,o.courseName=e.dataset.course,o.moduleName=e.dataset.module,o.moduleTime=e.dataset.time,$(".courseName").html(o.courseName+" - "+o.moduleName),$("#clockdiv").html(o.moduleTime),$(".multichoice").attr("data-course",o.courseName),$(".multichoice").attr("data-module",o.moduleName),(new ServiceWrapper).loadINITData("course/"+o.folder,jsonSuccessHandler,jsonErrorHandler),o.preloader("hide")},this.showActivityCntr=function(e){e?($(".courseList").hide(),$(".activityCntr").show()):($(".courseList").show(),$(".activityCntr").hide(),$(".successScreen").hide())}};