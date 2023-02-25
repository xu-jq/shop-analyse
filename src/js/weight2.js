var getWeight2Data = function(){
  $.get("http://8.134.157.141:8083/secondWeight-list", function (data, status) {
    var data = data.data;
    // console.log(data);
    var htmlTable = 
        '<tr class="centerIt">'+
        '<th rowspan="2" class="centerIt"  style="vertical-align: middle;">便民终端</th>'+
        '<td>'+data[0].name+'</td>'+
        '<td>'+data[0].digitization+'</td>'+
        '<td>'+data[0].ability+'</td>'+
        '<td>'+data[0].idea+'</td>'+
        '<td>'+data[0].cost+'</td>'+
        '<td>'+data[0].resource+'</td>'+
        '<td>'+data[0].place+'</td><td><button type="button" class="btn btn-default" '+ 
        'onclick = \"openIt('+data[0].id+',\''+data[0].name+'\','+data[0].digitization+','+data[0].ability+','+data[0].idea+','+data[0].cost+','+data[0].resource+','+data[0].place+')\">点击修改</button></td></tr>'+
      '<tr class="centerIt">'+
        '<td>'+data[1].name+'</td>'+
        '<td>'+data[1].digitization+'</td>'+
        '<td>'+data[1].ability+'</td>'+
        '<td>'+data[1].idea+'</td>'+
        '<td>'+data[1].cost+'</td>'+
        '<td>'+data[1].resource+'</td>'+
        '<td>'+data[1].place+'</td><td><button type="button" class="btn btn-default"'+
        'onclick = \"openIt('+data[1].id+',\''+data[1].name+'\','+data[1].digitization+','+data[1].ability+','+data[1].idea+','+data[1].cost+','+data[1].resource+','+data[1].place+')\">点击修改</button></td></tr>'+
      '<tr class="centerIt">'+
        '<th rowspan="2" class="centerIt"  style="vertical-align: middle;">红色终端</th>'+
        '<td>'+"党建示范"+'</td>'+
        '<td>'+data[2].digitization+'</td>'+
        '<td>'+data[2].ability+'</td>'+
        '<td>'+data[2].idea+'</td>'+
        '<td>'+data[2].cost+'</td>'+
        '<td>'+data[2].resource+'</td>'+
        '<td>'+data[2].place+'</td><td><button type="button" class="btn btn-default"'+
        'onclick = \"openIt('+data[2].id+',\''+data[2].name+'\','+data[2].digitization+','+data[2].ability+','+data[2].idea+','+data[2].cost+','+data[2].resource+','+data[2].place+')\">点击修改</button></td></tr>'+
      '<tr class="centerIt">'+
        '<td>'+data[3].name+'</td>'+
        '<td>'+data[3].digitization+'</td>'+
        '<td>'+data[3].ability+'</td>'+
        '<td>'+data[3].idea+'</td>'+
        '<td>'+data[3].cost+'</td>'+
        '<td>'+data[3].resource+'</td>'+
        '<td>'+data[3].place+'</td><td><button type="button" class="btn btn-default"'+
        'onclick = \"openIt('+data[3].id+',\''+data[3].name+'\','+data[3].digitization+','+data[3].ability+','+data[3].idea+','+data[3].cost+','+data[3].resource+','+data[3].place+')\">点击修改</button></td></tr>'+
        '<tr class="centerIt">'+
          '<th rowspan="5" class="centerIt"  style="vertical-align: middle;">文化终端</th>'+
          '<td>'+data[4].name+'</td>'+
          '<td>'+data[4].digitization+'</td>'+
          '<td>'+data[4].ability+'</td>'+
          '<td>'+data[4].idea+'</td>'+
          '<td>'+data[4].cost+'</td>'+
          '<td>'+data[4].resource+'</td>'+
          '<td>'+data[4].place+'</td><td><button type="button" class="btn btn-default"'+
          'onclick = \"openIt('+data[4].id+',\''+data[4].name+'\','+data[4].digitization+','+data[4].ability+','+data[4].idea+','+data[4].cost+','+data[4].resource+','+data[4].place+')\">点击修改</button></td></tr>'+
        '<tr class="centerIt">'+
          '<td>'+data[5].name+'</td>'+
          '<td>'+data[5].digitization+'</td>'+
          '<td>'+data[5].ability+'</td>'+
          '<td>'+data[5].idea+'</td>'+
          '<td>'+data[5].cost+'</td>'+
          '<td>'+data[5].resource+'</td>'+
          '<td>'+data[5].place+'</td><td><button type="button" class="btn btn-default"'+
          'onclick = \"openIt('+data[5].id+',\''+data[5].name+'\','+data[5].digitization+','+data[5].ability+','+data[5].idea+','+data[5].cost+','+data[5].resource+','+data[5].place+')\">点击修改</button></td></tr>'+
        '<tr class="centerIt">'+
          '<td>'+data[6].name+'</td>'+
          '<td>'+data[6].digitization+'</td>'+
          '<td>'+data[6].ability+'</td>'+
          '<td>'+data[6].idea+'</td>'+
          '<td>'+data[6].cost+'</td>'+
          '<td>'+data[6].resource+'</td>'+
          '<td>'+data[6].place+'</td><td><button type="button" class="btn btn-default"'+
         'onclick = \"openIt('+data[6].id+',\''+data[6].name+'\','+data[6].digitization+','+data[6].ability+','+data[6].idea+','+data[6].cost+','+data[6].resource+','+data[6].place+')\">点击修改</button></td></tr>'+
        '<tr class="centerIt">'+
          '<td>'+data[7].name+'</td>'+
          '<td>'+data[7].digitization+'</td>'+
          '<td>'+data[7].ability+'</td>'+
          '<td>'+data[7].idea+'</td>'+
          '<td>'+data[7].cost+'</td>'+
          '<td>'+data[7].resource+'</dh>'+
          '<td>'+data[7].place+'</td><td><button type="button" class="btn btn-default"'+
          'onclick = \"openIt('+data[7].id+',\''+data[7].name+'\','+data[7].digitization+','+data[7].ability+','+data[7].idea+','+data[7].cost+','+data[7].resource+','+data[7].place+')\">点击修改</button></td></tr>'+
        '<tr class="centerIt">'+
          '<td>'+data[8].name+'</td>'+
          '<td>'+data[8].digitization+'</td>'+
          '<td>'+data[8].ability+'</td>'+
          '<td>'+data[8].idea+'</td>'+
          '<td>'+data[8].cost+'</td>'+
          '<td>'+data[8].resource+'</td>'+
          '<td>'+data[8].place+'</td><td><button type="button" class="btn btn-default"'+
          'onclick = \"openIt('+data[8].id+',\''+data[8].name+'\','+data[8].digitization+','+data[8].ability+','+data[8].idea+','+data[8].cost+','+data[8].resource+','+data[8].place+')\">点击修改</button></td></tr>'+
        '<tr class="centerIt">'+
          '<th style="text-align: center;vertical-align: middle;  !important;" >游客终端</th>'+
          '<td>'+data[9].name+'</td>'+
          '<td>'+data[9].digitization+'</td>'+
          '<td>'+data[9].ability+'</td>'+
          '<td>'+data[9].idea+'</td>'+
          '<td>'+data[9].cost+'</td>'+
          '<td>'+data[9].resource+'</td>'+
          '<td>'+data[9].place+'</td><td><button type="button" class="btn btn-default"'+
          'onclick = \"openIt('+data[9].id+',\''+data[9].name+'\','+data[9].digitization+','+data[9].ability+','+data[9].idea+','+data[9].cost+','+data[9].resource+','+data[9].place+')\">点击修改</button></td></tr>'
          $("#content1").html(htmlTable);
});
}
// 修改权重值2——与不同终端类型匹配度权重
var openIt = function(id,name,digitization,ability,idea,cost,resource,place){
        // $("#updataTable2").css("display","block");
        $("#updataTable2").fadeIn(500);
        $("#item").css("display","block");
        console.log(id,name,digitization,ability,idea,cost,resource,place);
        $("#digitization").val(digitization);
        $("#ability").val(ability);
        $("#idea").val(idea);
        $("#cost").val(cost);
        $("#resource").val(resource);
        $("#shopplace").val(place);
        $("#name").html(name);
        $("#idcode").html(id);
    }
// 蒙版关闭
var closeUpdata =function(){
    $("#updataTable1").css("display","none");
    $("#updataTable2").css("display","none");
    $("#item").css("display","none");
}
// 确认修改权重值2——与不同终端类型匹配度权重
$("#comfirm2").click(function(){

  var ability = Number($("#ability").val())
  var cost = Number($("#cost").val());
  var digitization = Number($("#digitization").val());
  var idcode = Number($("#idcode").html())
  var idea = Number($("#idea").val());
  var name = $("#name").html()
  var shopplace = Number($("#shopplace").val());
  var resource = Number($("#resource").val());
  console.log(ability,cost,digitization,idea,shopplace,resource);
  var total = Number(ability+cost+digitization+idea+shopplace+resource).toFixed(2)
  console.log(total);
  if(total==1){
    $.ajax({
      type:"PUT",  
      contentType:"application/json;charset=utf-8",
      url:"http://8.134.157.141:8083/secondWeight-modify",
      data:JSON.stringify({
        "ability": ability,
        "cost": cost,
        "digitization": digitization,
        "id": idcode,
        "idea": idea,
        "name": name,
        "place": shopplace,
        "resource": resource
      }),
      dataType:"json",
      async:false,                
      success:function(res){  
        //  console.log(res);
        alert(res.msg)
        closeUpdata();
        // 数据分析页面显示
        // $("#keshihua").css("display","block")
        // $("#showData").attr("class","active")
        // // // 权重页面隐藏
        // $("#quanzhong").css("display","none")
        // $("#updataQuan").attr("class","")
         getWeight2Data();
         getTableData();
      },error:function(){
          console.log("error");
      }
  })
  }else{
    alert("总权重需等于1，请重新输入！")
  }
})