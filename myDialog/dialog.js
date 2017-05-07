/**
 * Created by 22935 on 2017/4/4.
 */
(function ($) {
     let _DIALOGNAME_="myDialog";
     $.fn[_DIALOGNAME_]=$[_DIALOGNAME_]=function (userData) {//第一句不理解？为什么写fn，还写后面的？
        let setting={
           title:"",
           txt:"",
           ok:"确定",
           cancel:"取消",
           _html:`<div id="shadow" style="width:100%;height:100%;position:absolute;left:0;top:0;
                 background-color:rgba(0,0,0,0.4)">
                 <div id="dialog" style="min-width:270px;border:thin solid #666;overflow: hidden;padding:20px;background-color:#ffffff;
                 border-radius:10px;position:absolute;top:50%;left:50%;transform: translate(-50%,-50%)">
                 <div id="title" style="margin:-20px -20px 10px -20px;padding:10px 22px;background-color: #eff0f6;font-family:'宋体';font-size:15px;
                 font-weight:bold;color:#666;text-align: left">提示</div>
                 <div id="txt" style="margin:30px 0 30px 0;padding:5px;min-height:100px"></div>
                 <div id="button" style="margin:10px 0;display:flex;justify-content: space-around">                 
                   <a href="#">
                     <label for="ok"></label>
                     <input type="button" id="ok" value="" style="padding: 5px 15px;font-size: 15px;color: rgb(0,0,0);
                   background-color: rgb(196,196,196); cursor: pointer;">
                   </a>
                   <a href="#">
                     <label for="cancel"></label>
                     <input type="button" id="cancel" value="" style="padding:5px 15px;font-size: 15px;
                   color: rgb(0,0,0);background-color: rgb(196,196,196); cursor: pointer;">
                   </a>                              
                 </div>
                 </div>
                 </div>`,
          callback:null
        };
       let data;/*必须在函数调用前声明*/
       function initial() {
         data=$.extend({},setting,userData);/*后面两个参数顺序不能颠倒*/
          $(data._html).appendTo(document.body);
          let title=data.title,
              txt=data.txt,
              ok=data.ok,
              cancel=data.cancel;
          $('#title').html(title);/*不能用赋值方式*/
          console.log(txt);

          if(txt!=""){
           $("#txt").html(txt);/*2.val()不能使用*/
          }else{
           $("#txt").css("display","none");
          }

          if(ok!=""){
            $("#ok").val(ok);
          }else{
            $("#ok").closest("a").css("display","none");
          }

         if(cancel!=""){
           $("#cancel").val(cancel);
         }else{
           $("#cancel").closest("a").css("display","none");
         }
       }
       function hoverEvent() {
          $("#dialog").children("#button").children().each(function () {
              $(this).bind({
                mouseover:function (e) {
                  $(e.target).css({
                    backgroundColor: '#2ea3ce',
                    color: '#FFF'
                  });
                },
                mouseout:function (e) {
                   $(e.target).css({
                     backgroundColor: '#c4c4c4',
                     color: '#000'
                   })
                },
                click:function (e) {
                  $("#shadow").remove();
                }

              });
          });
       }
       if(this==$){
         initial();
         hoverEvent();
         if(data.callback instanceof Function){
           data.callback();
         }
       }else{
         this.bind("click",function () {
           initial();
           hoverEvent();
           if(data.callback instanceof Function){
             data.callback();
           }
         })
       }

     }
}(jQuery))
