// 用户输入信息确认提交
var postData = function(){
	$("#submit").click(function(){
		localStorage.customerName = $("#customer_name").val();
		if($("#customer_name").val()){
			$.post("http://8.134.157.141:8083/input",{
			name:$("#customer_name").val(),
			state:$("#state").val(),
		    types :$("#types").val(),
			level :$("#level").val(),
			place :$("#place").val(),
			people_density :$("#people_density").val(),
			shop_density :$("#shop_density").val(),
			policy :$("#policy").val(),
			resources :$("#resources").val(),
			rent :$("#rent").val(),
			people_num :$("#people_num").val(),
			office_people :$("#office_people").val(),
			area :$("#area").val(),
			culture :$("#culture").val(),
			reform :$("#reform").val(),
			risk :$("#risk").val(),
			character :$("#character").val(),
			investment :$("#investment").val(),
			credit :$("#credit").val(),
			terminal :$("#terminal").val(),
			commerce :$("#commerce").val(),
			society :$("#society").val(),
		},
		function(data){
			alert("提交成功！")
            //成功提交数据后进行数据更新和渲染
			// 数据分析模块更新
			console.log(localStorage.customerName);
			getTableData();
			getCustomerData();
			// 权重修改模块更新
			getWeight1Data();
			getWeight2Data();
			// 历史数据更新
			allCustomers();
			$("#keshihua").css("display","block")
			$("#shuju").css("display","none")
			$("#dataInput").attr("class","")
			$("#showData").attr("class","active")
		});
		}
		else(
			alert("请填写完整！")
		)
	});
}