var tab_list = document.querySelector('.tab_list');
var lis = tab_list.querySelectorAll('li');
var item = document.querySelectorAll('.item');
for (var i = 0; i < lis.length; i++) {
    lis[i].setAttribute('index', i);
    lis[i].onclick = function() {
        for (var i = 0; i < lis.length; i++) {
            lis[i].className = '';
        }
        this.className = 'active';
        var index = this.getAttribute('index');
        for (var j = 0; j < item.length; j++) {
            item[j].style.display = 'none';
        }
        item[index].style.display = 'block';
    }
}

$(document).ready(function(){
    allCustomers();//历史数据——所有客户记录
    postData();//数据输入和提交
    getWeight1Data();// 页面加载完进行权重值1数据获取
    getWeight2Data();// 页面加载完进行权重值2数据获取
    $("#showData").click(function(){
        if(!localStorage.customerName){
            $("#keshihua").css("display","none")
			$("#shuju").css("display","block")
			$("#dataInput").attr("class","active")
			$("#showData").attr("class","")
            alert("当前无客户记录，请先输入数据信息或查看历史记录！");

        }else{
            getTableData();//获取本地存储的localStorage.name进行数据分析
        }
        
    })
})


    


