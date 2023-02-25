// 所有历史数据记录
var allCustomers = function(){
    $.get("http://8.134.157.141:8083/getUser",function(res){
        console.log(res.data);
        var k = res.data;
        var History_html = '';
        for(let i = res.data.length-1;i>=0;i--){
            History_html+=
            '<tr class="centerIt">'+
            '<td rowspan="4"  style="vertical-align: middle;">客户'+(res.data.length-i)+'</td>'+
            '<td rowspan="4"  style="vertical-align: middle;">'+k[i].name+'</td>'+
            '<td>商圈类型</td>'+
            '<td>商圈等级</td>'+
            '<td>商铺地段</td>'+
            '<td>人口密度</td>'+
            '<td>产业聚集度</td>'+
            '<td>政策倾斜</td>'+
            '<td>自然资源</td>'+
            '<td>店租</td>'+
            '<td>客流量</td>'+
            '<td>营业人员</td>'+
            '<td>经营面积</td>'+
            '<td rowspan="2"  style="vertical-align: middle;" id="result" onclick=\"lookHistory(\''+k[i].name+'\')\">查看分析结果</td>'+
          '</tr>'+
          '<tr class="centerIt success">'+
            '<td>'+k[i].type+'</td>'+
            '<td>'+k[i].level +'</td>'+
            '<td>'+k[i].place +'</td>'+
            '<td>'+k[i].people_density +'</td>'+
            '<td>'+k[i].shop_density +'</td>'+
            '<td>'+k[i].policy +'</td>'+
            '<td>'+k[i].resources +'</td>'+
            '<td>'+k[i].rent+'</td>'+
            '<td>'+k[i].people_num +'</td>'+
            '<td>'+k[i].office_people +'</td>'+
            '<td>'+k[i].area+'</td>'+
          '</tr>'+
          '<tr class="centerIt">'+
            
            '<td>经营业态</td>'+
            '<td>文化程度</td>'+
            '<td>改造意愿</td>'+
            '<td>经营风险承担意愿</td>'+
            '<td>性格</td>'+
            '<td>计划投资力度</td>'+
            '<td>信用情况</td>'+
            '<td>现代终端系统熟练情况</td>'+
            '<td>电子商务软件熟悉情况</td>'+
            '<td>社会资源</td>'+
            '<td></td>'+
            '<td rowspan="2"  style="vertical-align: middle;" id="delete" onclick=\"deleteHistory(\''+k[i].name+'\')\">删除</td>'+
            
          '</tr>'+
          '<tr class="centerIt warning">'+
            '<td>'+k[i].state +'</td>'+
            '<td>'+k[i].culture +'</td>'+
            '<td>'+k[i].reform +'</td>'+
            '<td>'+k[i].risk +'</td>'+
            '<td>'+k[i].character+'</td>'+
            '<td>'+k[i].investment+'</td>'+
            '<td>'+k[i].credit +'</td>'+
            '<td>'+k[i].terminal +'</td>'+
            '<td>'+k[i].commerce +'</td>'+
            '<td>'+k[i].society +'</td>'+
            '<td></td>'
          '</tr>';
        }
        $("#historyData").html(History_html)
    })
}
// 删除客户记录
var url = window.location.href;
var deleteHistory = function(res){
  var r=confirm("是否确定删除客户【 "+res+" 】的记录？");
	if (r==true){
		$.ajax({
        type:"Delete",  
        contentType:"application/json;charset=utf-8",
        url:"http://8.134.157.141:8083/deleteUser?name="+res,
        async:false,                
        success:function(r){  
          if(localStorage.customerName == res){
            alert("已删除正在使用的客户记录！")
            localStorage.customerName = '';
            // $("#lishi").css("display","none")
            // $("#shuju").css("display","block")
            // $("#dataInput").attr("class","active")
            // $("#historal").attr("class","")
            // window.location.href = url;
            // getTableData();
          }else{
          alert(r.msg);
          }
          allCustomers();
        },error:function(){
            console.log("error");
        }
    })
	}
}
// 查看客户数据分析结果
var lookHistory = function(res){
    localStorage.customerName = res;
    getTableData();
    let r = confirm("是否跳转到客户 【 "+res+" 】 的分析数据？")
    if(r==true){
        // 数据分析页面显示
        $("#keshihua").css("display","block")
        $("#showData").attr("class","active")
        // // 历史记录隐藏
        $("#lishi").css("display","none")
        $("#historal").attr("class","")
    }
}