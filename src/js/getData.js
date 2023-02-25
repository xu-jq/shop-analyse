// 可视化_终端类型  +  雷达图
var getTableData = function(){
//  if(localStorage.customerName){
  $.get("http://8.134.157.141:8083/mark?name="+localStorage.customerName,function(res){
    // console.log(res);
      if(res.code==200){
        getCustomerData();
       // 表格
        $.get("http://8.134.157.141:8083/cal",function(data){
      
            var data2 = data.data2;
            var data3 = data.data3;
            var data4 = data.data4;
            var data5 = data.data5;
            var htmlC =
          '<thead>'+
              '<tr class="active">'+
                '<th  colspan="2" class="centerIt">终端类型</th>'+
                '<th class="centerIt">六个维度匹配度</th>'+
                '<th class="centerIt">商圈匹配度</th>'+
                '<th class="centerIt">矢量长度</th>'+
              '</tr>'+
            '</thead>'+
            '<tbody class="centerIt"></tbody>'+
            '<tr>'+
            '<th rowspan="2" class="centerIt"  style="vertical-align: middle;">便民终端</th>'+
            '<td>一站式服务终端</td>'+
            '<td>'+ data2.一站式综合服务.toFixed(2) +'</td>'+
            '<td>'+ data3.一站式综合服务.toFixed(0) +'</td>'+
            '<td class="special">'+ data4.一站式综合服务.toFixed(0) +'</td>'+
            '</tr>'+
            '<tr>'+
            '<td>小型便民</td>'+
            '<td>'+data2.小型便民.toFixed(2)+'</td>'+
            '<td>'+data3.小型便民.toFixed(0) +'</td>'+
            '<td class="special">'+data4.小型便民.toFixed(0)+'</td>'+
            '</tr>'+
            '<tr>'+
            '<th rowspan="2" class="centerIt"  style="vertical-align: middle;">红色终端</th>'+
            '<td>党建示范</td>'+
            '<td>'+data2.党群服务.toFixed(2) +'</td>'+
            '<td>'+data3.党群服务.toFixed(0)+'</th>'+
            '<td class="special">'+data4.党群服务.toFixed(0)+'</th>'+
            '</tr>'+
            '<tr>'+
            '<td>红色文化</td>'+
            '<td>'+data2.红色文化.toFixed(2) +'</td>'+
            '<td>'+data3.红色文化.toFixed(0)+'</td>'+
            '<td class="special">'+data4.红色文化.toFixed(0)+'</td>'+
            '</tr>'+
            '<tr>'+
            '<th rowspan="5" class="centerIt"  style="vertical-align: middle;">文化终端</th>'+
            '<td>茶艺</td>'+
            '<td>'+data2.茶艺.toFixed(2) +'</td>'+
            '<td>'+data3.茶艺.toFixed(0)+'</th>'+
            '<td class="special">'+data4.茶艺.toFixed(0)+'</th>'+
            '</tr>'+
            '<tr>'+
            '<td>网红</td>'+
            '<td>'+data2.网红.toFixed(2) +'</td>'+
            '<td>'+data3.网红.toFixed(0)+'</td>'+
            '<td class="special">'+data4.网红.toFixed(0)+'</td>'+
            '</tr>'+
            '<tr>'+
            '<td>品牌</td>'+
            '<td>'+data2.品牌.toFixed(2) +'</td>'+
            '<td>'+data3.品牌.toFixed(0)+'</td>'+
            '<td class="special">'+data4.品牌.toFixed(0)+'</td>'+
            '</tr>'+
            '<tr>'+
            '<td>民俗土特产</td>'+
            '<td>'+data2.民俗土特产.toFixed(2) +'</td>'+
            '<td>'+data3.民俗土特产.toFixed(0)+'</td>'+
            '<td class="special">'+data4.民俗土特产.toFixed(0)+'</td>'+
            '</tr>'+
            '<tr>'+
            '<td>婚庆</td>'+
            '<td>'+data2.婚庆.toFixed(2) +'</td>'+
            '<td>'+data3.婚庆.toFixed(0)+'</td>'+
            '<td class="special">'+data4.婚庆.toFixed(0)+'</td>'+
            '</tr>'+
            '<tr>'+
            '<th class="centerIt"  style="vertical-align: middle;">游客终端</th>'+
            '<td>游客驿站</td>'+
            '<td>'+data2.游客驿站.toFixed(2) +'</td>'+
            '<td>'+data3.游客驿站.toFixed(0)+'</td>'+
            '<td class="special">'+data4.游客驿站.toFixed(0)+'</td>'+
            '</tr>'+
            '</tbody>';
            $("#content").html(htmlC);

          //最值高亮显示
          let max1 = data5[0].toFixed(0);
          let max2 = data5[1].toFixed(0);
          let max3 = data5[2].toFixed(0);
          $('.special').each(function(){
            // console.log($(this).text());
            if($(this).text()==max1){
               $(this).css("color","red")
            }if($(this).text()==max2){
              $(this).css("color","red")
           }if($(this).text()==max3){
            $(this).css("color","red")
         }
          })
         
        
          // 雷达图
          var data1 = data.data1;
          // console.log(data1);
          var mCharts = echarts.init(document.querySelector(".picture"))
          // 各个维度的最大值
          var dataMax = [
            {
              name: '数字化能力',
              max: 100
            },
            {
              name: '地段热度',
              max: 100
            },
            {
              name: '资源禀赋',
              max: 100
            },
            {
              name: '经营成本',
              max: 100
            },
            {
              name: '经营理念',
              max: 100
            },
            {
              name: '经营能力',
              max: 100
            }
          ]
          var option = {
            radar: { 
              indicator: dataMax, // 配置各个维度的最大值
              shape: 'polygon' // 配置雷达图最外层的图形 circle polygon
            },
            series: [
              {
                type: 'radar', // radar 此图表时一个雷达图
                label: { // 设置标签的样式
                  show: true // 显示数值
                },
                color: ['#1c4e98'],
                areaStyle: {}, // 将每一个产品的雷达图形成阴影的面积
                data: [
                  {
                    name: '数值',
                    // value: [10,20,30,40,50,60]
                    value: [data1.数字化能力.toFixed(0),data1.地段热度.toFixed(0), data1.资源禀赋.toFixed(0),  data1.经营成本.toFixed(0), data1.经营理念.toFixed(0), data1.经营能力.toFixed(0)]
                  }
                ]
              }
            ]
          }
          mCharts.setOption(option)
                  
          });
          }else{
            alert("请先输入信息！")
          }
      })
//  }
//  else{
//   // alert("请输入数据")
//   $("#keshihua").html("请输入数据")
//  }
}
//可视化——客户数据信息
var getCustomerData = function(){
  $.get("http://8.134.157.141:8083/getUserMark?name="+localStorage.customerName,function(res){
    // console.log(res.data);
    var r = res.data;
  
    var htmlTable1 = 
  '<tr class="centerIt">'+
    '<th rowspan="2" class="centerIt"  style="vertical-align: middle;">客户名称</th>'+
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
  '</tr>'+
  '<tr class="success centerIt">'+
      '<td>'+r.type+'</td>'+
      '<td>'+r.level+'</td>'+
      '<td>'+r.place+'</td>'+
      '<td>'+r.peopleDensity+'</td>'+
      '<td>'+r.shopDensity+'</td>'+
      '<td>'+r.policy+'</td>'+
      '<td>'+r.resources+'</td>'+
      '<td>'+r.rent+'</td>'+
      '<td>'+r.peopleNum+'</td>'+
      '<td>'+r.officePeople+'</td>'+
      '<td>'+r.area+'</td>'+
  '</tr>'+
  '<tr class="centerIt">'+
      '<th rowspan="2" class="centerIt"  style="vertical-align: middle;">'+r.name+'</th>'+
      '<td>经营业态</td>'+
      '<td>文化程度</td>'+
      '<td>改造意愿</td>'+
      '<td>经营风险承担意愿</td>'+
      '<td>性格</td>'+
      '<td>计划投资力度</td>'+
      '<td>信用情况</td>'+
      '<td>现代终端系统熟练度</td>'+
      '<td>电子商务软件熟悉度</td>'+
      '<td>社会资源</td>'+
      '<td></td>'+
    '</tr>'+
  '<tr class="warning centerIt">'+
      '<td>'+r.state+'</td>'+
      '<td>'+r.culture+'</td>'+
      '<td>'+r.reform  +'</td>'+
      '<td>'+r.risk +'</td>'+
      '<td>'+r.character +'</td>'+
      '<td>'+r.investment +'</td>'+
      '<td>'+r.credit +'</td>'+
      '<td>'+r.terminal +'</td>'+
      '<td>'+r.commerce +'</td>'+
      '<td>'+r.society +'</td>'+
      '<td></td>'+
    '</tr>';

    $("#top1").html(htmlTable1);
  })
}

