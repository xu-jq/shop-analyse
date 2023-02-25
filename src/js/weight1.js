// 权重值数据获取
var getWeight1Data = function(){
    $.get("http://8.134.157.141:8083/firstWeight-list", function (data) {
        var data1 = data.data;
        // console.log(data1);
        var htmlTable = 
          '<tr class="active centerIt">'+
                  '<td>数字化能力</td>'+
                  '<td>'+ data1[0].level +'</td> '+
                  '<td>'+ data1[0].place +'</td> '+
                  '<td>'+ data1[0].people_density +'</td> '+
                  '<td>'+ data1[0].shop_density +'</td> '+
                  '<td>'+ data1[0].policy +'</td> '+
                  '<td>'+ data1[0].resources +'</td> '+
                  '<td>'+ data1[0].rent +'</td> '+
                  '<td>'+ data1[0].people_num +'</td> '+
                  '<td>'+ data1[0].office_people +'</td> '+
                  '<td>'+ data1[0].area +'</td> '+
                  '<td>'+ data1[0].culture +'</td> '+
                  '<td>'+ data1[0].reform +'</td> '+
                  '<td>'+ data1[0].risk +'</td>'+
                  '<td>'+ data1[0].character +'</td> '+
                  '<td>'+ data1[0].investment +'</td> '+
                  '<td>'+ data1[0].credit +'</td> '+
                  '<td>'+ data1[0].terminal +'</td> '+
                  '<td>'+ data1[0].commerce +'</td> '+
                  '<td>'+ data1[0].society +'</td> '+
                  '<td><button type="button" class="btn btn-default" '+ 
                  'onclick = \"openUpdataW1('+data1[0].id+',\''+data1[0].name+'\','+data1[0].level+','+data1[0].place+','+data1[0].people_density+','+data1[0].shop_density+','+data1[0].policy+','+data1[0].resources+','+data1[0].rent+','+data1[0].people_num+','+data1[0].office_people+','+data1[0].area+','+data1[0].culture+','+data1[0].reform+','+data1[0].risk+','+data1[0].character+','+data1[0].investment+','+data1[0].credit+','+data1[0].terminal+','+data1[0].commerce+','+data1[0].society+')\">点击修改</button></td></tr>'+
                '</tr>'+
                '<tr class="success centerIt">'+
                  '<td>经营能力</td>'+
                  '<td>'+ data1[1].level +'</td> '+
                  '<td>'+ data1[1].place +'</td> '+
                  '<td>'+ data1[1].people_density +'</td> '+
                  '<td>'+ data1[1].shop_density +'</td> '+
                  '<td>'+ data1[1].policy +'</td> '+
                  '<td>'+ data1[1].resources +'</td> '+
                  '<td>'+ data1[1].rent +'</td> '+
                  '<td>'+ data1[1].people_num +'</td> '+
                  '<td>'+ data1[1].office_people +'</td> '+
                  '<td>'+ data1[1].area +'</td> '+
                  '<td>'+ data1[1].culture +'</td> '+
                  '<td>'+ data1[1].reform +'</td> '+
                  '<td>'+ data1[1].risk +'</td>'+
                  '<td>'+ data1[1].character +'</td> '+
                  '<td>'+ data1[1].investment +'</td> '+
                  '<td>'+ data1[1].credit +'</td> '+
                  '<td>'+ data1[1].terminal +'</td> '+
                  '<td>'+ data1[1].commerce +'</td> '+
                  '<td>'+ data1[1].society +'</td> '+
                  '<td><button type="button" class="btn btn-default" '+ 
                  'onclick = \"openUpdataW1('+data1[1].id+',\''+data1[1].name+'\','+data1[1].level+','+data1[1].place+','+data1[1].people_density+','+data1[1].shop_density+','+data1[1].policy+','+data1[1].resources+','+data1[1].rent+','+data1[1].people_num+','+data1[1].office_people+','+data1[1].area+','+data1[1].culture+','+data1[1].reform+','+data1[1].risk+','+data1[1].character+','+data1[1].investment+','+data1[1].credit+','+data1[1].terminal+','+data1[1].commerce+','+data1[1].society+')\">点击修改</button></td></tr>'+
                '</tr>'+
                '<tr class="warning centerIt">'+
                  '<td>经营理念</td>'+
                  '<td>'+ data1[2].level +'</td> '+
                  '<td>'+ data1[2].place +'</td> '+
                  '<td>'+ data1[2].people_density +'</td> '+
                  '<td>'+ data1[2].shop_density +'</td> '+
                  '<td>'+ data1[2].policy +'</td> '+
                  '<td>'+ data1[2].resources +'</td> '+
                  '<td>'+ data1[2].rent +'</td> '+
                  '<td>'+ data1[2].people_num +'</td> '+
                  '<td>'+ data1[2].office_people +'</td> '+
                  '<td>'+ data1[2].area +'</td> '+
                  '<td>'+ data1[2].culture +'</td> '+
                  '<td>'+ data1[2].reform +'</td> '+
                  '<td>'+ data1[2].risk +'</td>'+
                  '<td>'+ data1[2].character +'</td> '+
                  '<td>'+ data1[2].investment +'</td> '+
                  '<td>'+ data1[2].credit +'</td> '+
                  '<td>'+ data1[2].terminal +'</td> '+
                  '<td>'+ data1[2].commerce +'</td> '+
                  '<td>'+ data1[2].society +'</td> '+
                  '<td><button type="button" class="btn btn-default" '+ 
                  'onclick = \"openUpdataW1('+data1[2].id+',\''+data1[2].name+'\','+data1[2].level+','+data1[2].place+','+data1[2].people_density+','+data1[2].shop_density+','+data1[2].policy+','+data1[2].resources+','+data1[2].rent+','+data1[2].people_num+','+data1[2].office_people+','+data1[2].area+','+data1[2].culture+','+data1[2].reform+','+data1[2].risk+','+data1[2].character+','+data1[2].investment+','+data1[2].credit+','+data1[2].terminal+','+data1[2].commerce+','+data1[2].society+')\">点击修改</button></td></tr>'+
                '</tr>'+
                '<tr class="danger centerIt">'+
                  '<td>经营成本</td>'+
                  '<td>'+ data1[3].level +'</td> '+
                  '<td>'+ data1[3].place +'</td> '+
                  '<td>'+ data1[3].people_density +'</td> '+
                  '<td>'+ data1[3].shop_density +'</td> '+
                  '<td>'+ data1[3].policy +'</td> '+
                  '<td>'+ data1[3].resources +'</td> '+
                  '<td>'+ data1[3].rent +'</td> '+
                  '<td>'+ data1[3].people_num +'</td> '+
                  '<td>'+ data1[3].office_people +'</td> '+
                  '<td>'+ data1[3].area +'</td> '+
                  '<td>'+ data1[3].culture +'</td> '+
                  '<td>'+ data1[3].reform +'</td> '+
                  '<td>'+ data1[3].risk +'</td>'+
                  '<td>'+ data1[3].character +'</td> '+
                  '<td>'+ data1[3].investment +'</td> '+
                  '<td>'+ data1[3].credit +'</td> '+
                  '<td>'+ data1[3].terminal +'</td> '+
                  '<td>'+ data1[3].commerce +'</td> '+
                  '<td>'+ data1[3].society +'</td> '+
                  '<td><button type="button" class="btn btn-default" '+ 
                  'onclick = \"openUpdataW1('+data1[3].id+',\''+data1[3].name+'\','+data1[3].level+','+data1[3].place+','+data1[3].people_density+','+data1[3].shop_density+','+data1[3].policy+','+data1[3].resources+','+data1[3].rent+','+data1[3].people_num+','+data1[3].office_people+','+data1[3].area+','+data1[3].culture+','+data1[3].reform+','+data1[3].risk+','+data1[3].character+','+data1[3].investment+','+data1[3].credit+','+data1[3].terminal+','+data1[3].commerce+','+data1[3].society+')\">点击修改</button></td></tr>'+
                '</tr>'+
                '<tr class="active centerIt">'+
                  '<td>资源禀赋</td>'+
                  '<td>'+ data1[4].level +'</td> '+
                  '<td>'+ data1[4].place +'</td> '+
                  '<td>'+ data1[4].people_density +'</td> '+
                  '<td>'+ data1[4].shop_density +'</td> '+
                  '<td>'+ data1[4].policy +'</td> '+
                  '<td>'+ data1[4].resources +'</td> '+
                  '<td>'+ data1[4].rent +'</td> '+
                  '<td>'+ data1[4].people_num +'</td> '+
                  '<td>'+ data1[4].office_people +'</td> '+
                  '<td>'+ data1[4].area +'</td> '+
                  '<td>'+ data1[4].culture +'</td> '+
                  '<td>'+ data1[4].reform +'</td> '+
                  '<td>'+ data1[4].risk +'</td>'+
                  '<td>'+ data1[4].character +'</td> '+
                  '<td>'+ data1[4].investment +'</td> '+
                  '<td>'+ data1[4].credit +'</td> '+
                  '<td>'+ data1[4].terminal +'</td> '+
                  '<td>'+ data1[4].commerce +'</td> '+
                  '<td>'+ data1[4].society +'</td> '+
                  '<td><button type="button" class="btn btn-default" '+ 
                  'onclick = \"openUpdataW1('+data1[4].id+',\''+data1[4].name+'\','+data1[4].level+','+data1[4].place+','+data1[4].people_density+','+data1[4].shop_density+','+data1[4].policy+','+data1[4].resources+','+data1[4].rent+','+data1[4].people_num+','+data1[4].office_people+','+data1[4].area+','+data1[4].culture+','+data1[4].reform+','+data1[4].risk+','+data1[4].character+','+data1[4].investment+','+data1[4].credit+','+data1[4].terminal+','+data1[4].commerce+','+data1[4].society+')\">点击修改</button></td></tr>'+
                '</tr>'+
                '<tr class="success centerIt">'+
                  '<td>地段热度</td>'+
                  '<td>'+ data1[5].level +'</td> '+
                  '<td>'+ data1[5].place +'</td> '+
                  '<td>'+ data1[5].people_density +'</td> '+
                  '<td>'+ data1[5].shop_density +'</td> '+
                  '<td>'+ data1[5].policy +'</td> '+
                  '<td>'+ data1[5].resources +'</td> '+
                  '<td>'+ data1[5].rent +'</td> '+
                  '<td>'+ data1[5].people_num +'</td> '+
                  '<td>'+ data1[5].office_people +'</td> '+
                  '<td>'+ data1[5].area +'</td> '+
                  '<td>'+ data1[5].culture +'</td> '+
                  '<td>'+ data1[5].reform +'</td> '+
                  '<td>'+ data1[5].risk +'</td>'+
                  '<td>'+ data1[5].character +'</td> '+
                  '<td>'+ data1[5].investment +'</td> '+
                  '<td>'+ data1[5].credit +'</td> '+
                  '<td>'+ data1[5].terminal +'</td> '+
                  '<td>'+ data1[5].commerce +'</td> '+
                  '<td>'+ data1[5].society +'</td> '+
                  '<td><button type="button" class="btn btn-default" '+ 
                  'onclick = \"openUpdataW1('+data1[5].id+',\''+data1[5].name+'\','+data1[5].level+','+data1[5].place+','+data1[5].people_density+','+data1[5].shop_density+','+data1[5].policy+','+data1[5].resources+','+data1[5].rent+','+data1[5].people_num+','+data1[5].office_people+','+data1[5].area+','+data1[5].culture+','+data1[5].reform+','+data1[5].risk+','+data1[5].character+','+data1[5].investment+','+data1[5].credit+','+data1[5].terminal+','+data1[5].commerce+','+data1[5].society+')\">点击修改</button></td></tr>'+
                '</tr>';  

     
        $("#weight1Cont").html(htmlTable);
    });
}
// 修改权重1显示
var openUpdataW1 = function(){
  console.log(arguments);
  // $("#updataTable1").css("display","block");
  $("#updataTable1").fadeIn(500);
  // $("#item").slideDown("slow");
  $("#item").css("display","block");
  $("#idcode1").html(arguments[0]);
  $("#name1").html(arguments[1]);
  $("#level1").val(arguments[2]);
  $("#place1").val(arguments[3]);
  $("#people_density1").val(arguments[4]);
  $("#shop_density1").val(arguments[5]);
  $("#policy1").val(arguments[6]);
  $("#resources1").val(arguments[7]);
  $("#rent1").val(arguments[8]);
  $("#people_num1").val(arguments[9]);
  $("#office_people1").val(arguments[10]);
  $("#area1").val(arguments[11]);
  $("#culture1").val(arguments[12]);
  $("#reform1").val(arguments[13]);
  $("#risk1").val(arguments[14]);
  $("#character1").val(arguments[15]);
  $("#investment1").val(arguments[16]);
  $("#credit1").val(arguments[17]);
  $("#terminal1").val(arguments[18]);
  $("#commerce1").val(arguments[19]);
  $("#society1").val(arguments[20]);
}
// 确认修改权重值1——六个维度计算权重
$("#comfirm1").click(function(){
  let sum = Number($("#area1").val())+Number($("#character1").val())+Number($("#commerce1").val())+
  Number($("#credit1").val())+Number($("#culture1").val())+Number($("#investment1").val())+
  Number($("#level1").val())+Number($("#office_people1").val())+Number($("#people_density1").val())+
  +Number($("#people_num1").val())+Number($("#place1").val())+Number($("#policy1").val())+
  Number($("#reform1").val())+Number($("#rent1").val())+Number($("#risk1").val())+Number($("#shop_density1").val())+
  Number($("#society1").val())+Number($("#terminal1").val());
  sum = sum.toFixed(2)
   console.log(sum);
  if(sum==1){
    $.ajax({
      type:"PUT",  
      contentType:"application/json;charset=utf-8",
      url:"http://8.134.157.141:8083/firstWeight-modify",
      data:JSON.stringify({
        "area": Number($("#area1").val()),
        "character": Number($("#character1").val()),
        "commerce": Number($("#commerce1").val()),
        "credit": Number($("#credit1").val()),
        "culture": Number($("#culture1").val()),
        "id":  Number($("#idcode1").html()),
        "investment": Number($("#investment1").val()),
        "level": Number($("#level1").val()),
        "name": $("#name1").html(),
        "office_people": Number($("#office_people1").val()),
        "people_density": Number($("#people_density1").val()),
        "people_num": Number($("#people_num1").val()),
        "place": Number($("#place1").val()),
        "policy": Number($("#policy1").val()),
        "reform": Number($("#reform1").val()),
        "rent": Number($("#rent1").val()),
        "resources": Number($("#resources1").val()),
        "risk": Number($("#risk1").val()),
        "shop_density": Number($("#shop_density1").val()),
        "society": Number($("#society1").val()),
        "terminal": Number($("#terminal1").val())
      }),
      dataType:"json",
      async:false,                
      success:function(res){  
         closeUpdata();
         // 数据分析页面显示
        // $("#keshihua").css("display","block")
        // $("#showData").attr("class","active")
        // // 权重页面隐藏
        // $("#quanzhong").css("display","none")
        // $("#updataQuan").attr("class","")
         getWeight1Data();
        //  getTableData();
         if(!localStorage.customerName){
          $("#quanzhong").css("display","none")
          $("#shuju").css("display","block")
          $("#dataInput").attr("class","active")
          $("#updataQuan").attr("class","")
          alert("权重更新成功，请输入数据信息");

      }else{
          alert(res.msg);
          getTableData();//获取本地存储的localStorage.name进行数据分析
      }
         console.log(res);
      },error:function(){
          console.log("error");
      }
  })
  }else{
    alert("总权重需等于1，请重新输入！")
  }
})

