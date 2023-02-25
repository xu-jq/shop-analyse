package service

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"math"
	"net/http"
	"shop-analyse/models"
	"sort"
)

var types string
var res []float32

//获取输入信息，将其转换为分数，存入数组

// Mark
// @Tags 公共方法
// @Summary 用户输入信息
// @Param name formData string true "客户名称"
// @Param types formData string true "商圈类型"
// @Param level formData string true "商圈等级"
// @Param place formData string true "商铺地段"
// @Param people_density formData string true "人口密度"
// @Param shop_density formData string true "产业聚集度"
// @Param policy formData string true "政策倾斜"
// @Param resources formData string true "自然资源"
// @Param rent formData string true "店租"
// @Param people_num formData string true "客流量"
// @Param office_people formData string true "营业人员"
// @Param area formData string true "经营面积"
// @Param state formData string true "经营业态"
// @Param culture formData string true "文化程度"
// @Param reform formData string true "改造意愿"
// @Param risk formData string true "经营风险承担意愿"
// @Param character formData string true "性格"
// @Param investment formData string true "计划投资力度"
// @Param credit formData string true "信用情况"
// @Param terminal formData string true "现代终端系统熟练情况"
// @Param commerce formData string true "电子商务软件熟悉情况"
// @Param society formData string true "社会资源"
// @Success 200 {string} json "{"code":"200","data":""}"
// @Router /input [post]
func Mark(c *gin.Context) {
	name := c.PostForm("name")
	state := c.PostForm("state")
	types = c.PostForm("types")
	res = []float32{}
	level := c.PostForm("level")
	switch level {
	case "低":
		res = append(res, 30)
	case "中":
		res = append(res, 60)
	case "高":
		res = append(res, 90)
	}

	place := c.PostForm("place")
	switch place {
	case "差":
		res = append(res, 30)
	case "中":
		res = append(res, 60)
	case "高":
		res = append(res, 90)

	}

	peopleDensity := c.PostForm("people_density")
	switch peopleDensity {
	case "少":
		res = append(res, 30)
	case "一般":
		res = append(res, 60)
	case "多":
		res = append(res, 90)
	}

	shopDensity := c.PostForm("shop_density")
	switch shopDensity {
	case "无":
		res = append(res, 0)
	case "有":
		res = append(res, 100)
	}

	policy := c.PostForm("policy")
	switch policy {
	case "无":
		res = append(res, 0)
	case "有":
		res = append(res, 100)
	}

	resources := c.PostForm("resources")
	switch resources {
	case "少":
		res = append(res, 30)
	case "一般":
		res = append(res, 60)
	case "多":
		res = append(res, 90)
	}

	rent := c.PostForm("rent")
	switch rent {
	case "低":
		res = append(res, 30)
	case "中":
		res = append(res, 60)
	case "高":
		res = append(res, 90)
	}

	peopleNum := c.PostForm("people_num")
	switch peopleNum {
	case "少":
		res = append(res, 30)
	case "一般":
		res = append(res, 60)
	case "多":
		res = append(res, 90)
	}

	officePeople := c.PostForm("office_people")
	switch officePeople {
	case "1人":
		res = append(res, 30)
	case "2人":
		res = append(res, 60)
	case "3人或以上":
		res = append(res, 90)
	}

	area := c.PostForm("area")
	switch area {
	case "小":
		res = append(res, 30)
	case "中":
		res = append(res, 60)
	case "大":
		res = append(res, 90)
	}

	culture := c.PostForm("culture")
	switch culture {
	case "小学及以下":
		res = append(res, 30)
	case "中学":
		res = append(res, 60)
	case "大专及以上":
		res = append(res, 90)
	}

	reform := c.PostForm("reform")
	switch reform {
	case "无意愿":
		res = append(res, 30)
	case "一般":
		res = append(res, 60)
	case "意愿较强":
		res = append(res, 90)
	}

	risk := c.PostForm("risk")
	switch risk {
	case "保守型":
		res = append(res, 30)
	case "稳健型":
		res = append(res, 60)
	case "进取型":
		res = append(res, 90)
	}

	character := c.PostForm("character")
	switch character {
	case "内向":
		res = append(res, 0)
	case "外向":
		res = append(res, 100)
	}

	investment := c.PostForm("investment")
	switch investment {
	case "小":
		res = append(res, 30)
	case "中":
		res = append(res, 60)
	case "大":
		res = append(res, 90)
	}

	credit := c.PostForm("credit")
	switch credit {
	case "较差":
		res = append(res, 30)
	case "一般":
		res = append(res, 60)
	case "良好":
		res = append(res, 90)
	}

	terminal := c.PostForm("terminal")
	switch terminal {
	case "未使用":
		res = append(res, 30)
	case "不熟练":
		res = append(res, 30)
	case "较熟练":
		res = append(res, 60)
	case "熟练":
		res = append(res, 90)
	}

	commerce := c.PostForm("commerce")
	switch commerce {
	case "未使用":
		res = append(res, 20)
	case "不熟练":
		res = append(res, 40)
	case "较熟练":
		res = append(res, 60)
	case "熟练":
		res = append(res, 80)
	}

	society := c.PostForm("society")
	switch society {
	case "少":
		res = append(res, 30)
	case "一般":
		res = append(res, 60)
	case "多":
		res = append(res, 90)
	}

	if name == "" {
		c.JSON(http.StatusOK, gin.H{
			"code": -1,
			"msg":  "客户名称不能为空",
		})
		return
	}
	var cnt int64
	err := models.DB.Where("name = ?", name).Model(new(models.User)).Count(&cnt).Error
	if err != nil {
		c.JSON(http.StatusOK, gin.H{
			"code": -1,
			"msg":  "Get User Error:" + err.Error(),
		})
		return
	}
	if cnt > 0 {
		c.JSON(http.StatusOK, gin.H{
			"code": -1,
			"msg":  "该商户已存在",
		})
		return
	}
	// 将用户加入数据库
	user := &models.User{
		Name:          name,
		Type:          types,
		Level:         level,
		Place:         place,
		PeopleDensity: peopleDensity,
		ShopDensity:   shopDensity,
		Policy:        policy,
		Resources:     resources,
		Rent:          rent,
		PeopleNum:     peopleNum,
		OfficePeople:  officePeople,
		Area:          area,
		State:         state,
		Culture:       culture,
		Reform:        reform,
		Risk:          risk,
		Character:     character,
		Investment:    investment,
		Credit:        credit,
		Terminal:      terminal,
		Commerce:      commerce,
		Society:       society,
	}

	err = models.DB.Create(user).Error
	if err != nil {
		c.JSON(http.StatusOK, gin.H{
			"code": -1,
			"msg":  "Crete User Error:" + err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"code": 200,
		"data": res,
		"msg":  "用户信息保存成功",
	})
}

// Mark2
// @Tags 公共方法
// @Summary 历史记录获取用户分数
// @Accept json
// @Param name query string true "客户名称"
// @Success 200 {string} json "{"code":"200","data":""}"
// @Router /mark [get]
func Mark2(c *gin.Context) {
	name := c.Query("name")
	if name == "" {
		c.JSON(http.StatusOK, gin.H{
			"code": -1,
			"msg":  "用户名不能为空",
		})
		return
	}
	user := new(models.User)
	err := models.DB.Where("name = ?", name).Find(&user).Error
	if err != nil {
		c.JSON(http.StatusOK, gin.H{
			"code": -1,
			"msg":  "Get User By name:" + name + " Error:" + err.Error(),
		})
		return
	}
	types = user.Type
	res = []float32{}
	level := user.Level
	switch level {
	case "低":
		res = append(res, 30)
	case "中":
		res = append(res, 60)
	case "高":
		res = append(res, 90)
	}

	place := user.Place
	switch place {
	case "差":
		res = append(res, 30)
	case "中":
		res = append(res, 60)
	case "高":
		res = append(res, 90)

	}

	peopleDensity := user.PeopleDensity
	switch peopleDensity {
	case "少":
		res = append(res, 30)
	case "一般":
		res = append(res, 60)
	case "多":
		res = append(res, 90)
	}

	shopDensity := user.ShopDensity
	switch shopDensity {
	case "无":
		res = append(res, 0)
	case "有":
		res = append(res, 100)
	}

	policy := user.Policy
	switch policy {
	case "无":
		res = append(res, 0)
	case "有":
		res = append(res, 100)
	}

	resources := user.Resources
	switch resources {
	case "少":
		res = append(res, 30)
	case "一般":
		res = append(res, 60)
	case "多":
		res = append(res, 90)
	}

	rent := user.Rent
	switch rent {
	case "低":
		res = append(res, 30)
	case "中":
		res = append(res, 60)
	case "高":
		res = append(res, 90)
	}

	peopleNum := user.PeopleNum
	switch peopleNum {
	case "少":
		res = append(res, 30)
	case "一般":
		res = append(res, 60)
	case "多":
		res = append(res, 90)
	}

	officePeople := user.OfficePeople
	switch officePeople {
	case "1人":
		res = append(res, 30)
	case "2人":
		res = append(res, 60)
	case "3人或以上":
		res = append(res, 90)
	}

	area := user.Area
	switch area {
	case "小":
		res = append(res, 30)
	case "中":
		res = append(res, 60)
	case "大":
		res = append(res, 90)
	}

	culture := user.Culture
	switch culture {
	case "小学及以下":
		res = append(res, 30)
	case "中学":
		res = append(res, 60)
	case "大专及以上":
		res = append(res, 90)
	}

	reform := user.Reform
	switch reform {
	case "无意愿":
		res = append(res, 30)
	case "一般":
		res = append(res, 60)
	case "意愿较强":
		res = append(res, 90)
	}

	risk := user.Risk
	switch risk {
	case "保守型":
		res = append(res, 30)
	case "稳健型":
		res = append(res, 60)
	case "进取型":
		res = append(res, 90)
	}

	character := user.Character
	switch character {
	case "内向":
		res = append(res, 0)
	case "外向":
		res = append(res, 100)
	}

	investment := user.Investment
	switch investment {
	case "小":
		res = append(res, 30)
	case "中":
		res = append(res, 60)
	case "大":
		res = append(res, 90)
	}

	credit := user.Credit
	switch credit {
	case "较差":
		res = append(res, 30)
	case "一般":
		res = append(res, 60)
	case "良好":
		res = append(res, 90)
	}

	terminal := user.Terminal
	switch terminal {
	case "未使用":
		res = append(res, 30)
	case "不熟练":
		res = append(res, 30)
	case "较熟练":
		res = append(res, 60)
	case "熟练":
		res = append(res, 90)
	}

	commerce := user.Commerce
	switch commerce {
	case "未使用":
		res = append(res, 20)
	case "不熟练":
		res = append(res, 40)
	case "较熟练":
		res = append(res, 60)
	case "熟练":
		res = append(res, 80)
	}

	society := user.Society
	switch society {
	case "少":
		res = append(res, 30)
	case "一般":
		res = append(res, 60)
	case "多":
		res = append(res, 90)
	}
	c.JSON(http.StatusOK, gin.H{
		"code": 200,
		"data": res,
	})
}

func getWeight(name string) []float32 {
	var firstWeight models.FirstWeight
	err := models.DB.Where("name = ?", name).Find(&firstWeight).Error
	if err != nil {
		fmt.Println(err)
	}
	var weight []float32
	weight = append(weight, firstWeight.Level, firstWeight.Place, firstWeight.PeopleDensity,
		firstWeight.ShopDensity, firstWeight.Policy, firstWeight.Resources, firstWeight.Rent,
		firstWeight.PeopleNum, firstWeight.OfficePeople, firstWeight.Area, firstWeight.Culture,
		firstWeight.Reform, firstWeight.Risk, firstWeight.Character, firstWeight.Investment,
		firstWeight.Credit, firstWeight.Terminal, firstWeight.Commerce, firstWeight.Society)
	return weight
}

//Digitization 计算数字化能力指标
func Digitization() float32 {
	var result float32
	weight := getWeight("数字化能力")
	for i := 0; i < 19; i++ {
		j := weight[i] * res[i]
		result += j
	}
	return result
}

//Ability 计算经营能力指标
func Ability() float32 {
	var result float32
	weight := getWeight("经营能力")
	for i := 0; i < 19; i++ {
		j := weight[i] * res[i]
		result += j
	}
	return result
}

//Idea 计算经营理念指标
func Idea() float32 {
	var result float32
	weight := getWeight("经营理念")
	for i := 0; i < 19; i++ {
		j := weight[i] * res[i]
		result += j
	}
	return result
}

//Cost 计算经营成本指标
func Cost() float32 {
	var result float32
	weight := getWeight("经营成本")
	for i := 0; i < 19; i++ {
		j := weight[i] * res[i]
		result += j
	}
	return result
}

//Resource 计算资源禀赋指标
func Resource() float32 {
	var result float32
	weight := getWeight("资源禀赋")
	for i := 0; i < 19; i++ {
		j := weight[i] * res[i]
		result += j
	}
	return result
}

//Place 计算地段热度指标
func Place() float32 {
	var result float32
	weight := getWeight("地段热度")
	for i := 0; i < 19; i++ {
		j := weight[i] * res[i]
		result += j
	}
	return result
}

//Target 封装6个指标
func Target() map[string]float32 {
	//计算6项指标
	data := map[string]float32{
		"数字化能力": Digitization(),
		"经营能力":  Ability(),
		"经营理念":  Idea(),
		"经营成本":  Cost(),
		"资源禀赋":  Resource(),
		"地段热度":  Place(),
	}
	return data
}

//Match 计算6个维度匹配度
func Match(name string) float32 {
	var secondWeight models.SecondWeight
	err := models.DB.Where("name = ?", name).Find(&secondWeight).Error
	if err != nil {
		fmt.Println(err)
	}
	six := Target()
	result := six["数字化能力"]*secondWeight.Digitization + six["经营能力"]*secondWeight.Ability + six["经营理念"]*secondWeight.Idea +
		six["经营成本"]*secondWeight.Cost + six["资源禀赋"]*secondWeight.Resource + six["地段热度"]*secondWeight.Place
	return result
}

//MatchCal 一站式综合服务
func MatchCal() map[string]float32 {
	m := map[string]float32{
		"一站式综合服务": Match("一站式综合服务"),
		"小型便民":    Match("小型便民"),
		"党群服务":    Match("党群服务"),
		"红色文化":    Match("红色文化"),
		"茶艺":      Match("茶艺"),
		"网红":      Match("网红"),
		"品牌":      Match("品牌"),
		"民俗土特产":   Match("民俗土特产"),
		"婚庆":      Match("婚庆"),
		"游客驿站":    Match("游客驿站"),
	}
	return m
}

//Judge 商圈匹配度计算
func Judge() map[string]float32 {
	m := map[string]float32{}
	switch types {
	case "高端商业":
		m["一站式综合服务"] = 50
		m["小型便民"] = 50
		m["党群服务"] = 70
		m["红色文化"] = 50
		m["茶艺"] = 90
		m["网红"] = 90
		m["品牌"] = 90
		m["民俗土特产"] = 40
		m["婚庆"] = 80
		m["游客驿站"] = 0
	case "低端商业":
		m["一站式综合服务"] = 50
		m["小型便民"] = 60
		m["党群服务"] = 70
		m["红色文化"] = 50
		m["茶艺"] = 70
		m["网红"] = 50
		m["品牌"] = 80
		m["民俗土特产"] = 60
		m["婚庆"] = 70
		m["游客驿站"] = 0
	case "高端住宅":
		m["一站式综合服务"] = 90
		m["小型便民"] = 90
		m["党群服务"] = 40
		m["红色文化"] = 60
		m["茶艺"] = 90
		m["网红"] = 80
		m["品牌"] = 90
		m["民俗土特产"] = 50
		m["婚庆"] = 80
		m["游客驿站"] = 0
	case "低端住宅":
		m["一站式综合服务"] = 70
		m["小型便民"] = 80
		m["党群服务"] = 30
		m["红色文化"] = 60
		m["茶艺"] = 50
		m["网红"] = 50
		m["品牌"] = 60
		m["民俗土特产"] = 70
		m["婚庆"] = 70
		m["游客驿站"] = 0
	case "高端旅游":
		m["一站式综合服务"] = 50
		m["小型便民"] = 50
		m["党群服务"] = 80
		m["红色文化"] = 90
		m["茶艺"] = 90
		m["网红"] = 90
		m["品牌"] = 90
		m["民俗土特产"] = 80
		m["婚庆"] = 60
		m["游客驿站"] = 90
	case "低端旅游":
		m["一站式综合服务"] = 50
		m["小型便民"] = 50
		m["党群服务"] = 80
		m["红色文化"] = 90
		m["茶艺"] = 60
		m["网红"] = 60
		m["品牌"] = 50
		m["民俗土特产"] = 70
		m["婚庆"] = 40
		m["游客驿站"] = 80
	case "大型工业":
		m["一站式综合服务"] = 90
		m["小型便民"] = 80
		m["党群服务"] = 60
		m["红色文化"] = 40
		m["茶艺"] = 50
		m["网红"] = 30
		m["品牌"] = 40
		m["民俗土特产"] = 50
		m["婚庆"] = 30
		m["游客驿站"] = 0
	case "小型工业":
		m["一站式综合服务"] = 70
		m["小型便民"] = 80
		m["党群服务"] = 60
		m["红色文化"] = 40
		m["茶艺"] = 40
		m["网红"] = 30
		m["品牌"] = 40
		m["民俗土特产"] = 50
		m["婚庆"] = 30
		m["游客驿站"] = 0
	case "高端办公区":
		m["一站式综合服务"] = 50
		m["小型便民"] = 50
		m["党群服务"] = 60
		m["红色文化"] = 60
		m["茶艺"] = 90
		m["网红"] = 90
		m["品牌"] = 90
		m["民俗土特产"] = 50
		m["婚庆"] = 50
		m["游客驿站"] = 0
	case "低端办公区":
		m["一站式综合服务"] = 60
		m["小型便民"] = 70
		m["党群服务"] = 60
		m["红色文化"] = 60
		m["茶艺"] = 60
		m["网红"] = 60
		m["品牌"] = 70
		m["民俗土特产"] = 60
		m["婚庆"] = 40
		m["游客驿站"] = 0
	case "乡村":
		m["一站式综合服务"] = 60
		m["小型便民"] = 70
		m["党群服务"] = 40
		m["红色文化"] = 50
		m["茶艺"] = 50
		m["网红"] = 40
		m["品牌"] = 40
		m["民俗土特产"] = 80
		m["婚庆"] = 50
		m["游客驿站"] = 0
	case "墟镇":
		m["一站式综合服务"] = 80
		m["小型便民"] = 80
		m["党群服务"] = 50
		m["红色文化"] = 50
		m["茶艺"] = 60
		m["网红"] = 50
		m["品牌"] = 50
		m["民俗土特产"] = 70
		m["婚庆"] = 60
		m["游客驿站"] = 0
	case "大型交通枢纽":
		m["一站式综合服务"] = 50
		m["小型便民"] = 50
		m["党群服务"] = 70
		m["红色文化"] = 60
		m["茶艺"] = 80
		m["网红"] = 70
		m["品牌"] = 80
		m["民俗土特产"] = 50
		m["婚庆"] = 50
		m["游客驿站"] = 80
	case "小型交通枢纽":
		m["一站式综合服务"] = 60
		m["小型便民"] = 60
		m["党群服务"] = 60
		m["红色文化"] = 60
		m["茶艺"] = 70
		m["网红"] = 60
		m["品牌"] = 70
		m["民俗土特产"] = 60
		m["婚庆"] = 60
		m["游客驿站"] = 70
	}
	return m
}

//Vector 矢量值计算
func Vector() map[string]float32 {
	m1 := MatchCal()
	m2 := Judge()
	m := map[string]float32{
		"一站式综合服务": float32(math.Sqrt(float64(m1["一站式综合服务"]*m1["一站式综合服务"] + m2["一站式综合服务"]*m2["一站式综合服务"]))),
		"小型便民":    float32(math.Sqrt(float64(m1["小型便民"]*m1["小型便民"] + m2["小型便民"]*m2["小型便民"]))),
		"党群服务":    float32(math.Sqrt(float64(m1["党群服务"]*m1["党群服务"] + m2["党群服务"]*m2["党群服务"]))),
		"红色文化":    float32(math.Sqrt(float64(m1["红色文化"]*m1["红色文化"] + m2["红色文化"]*m2["红色文化"]))),
		"茶艺":      float32(math.Sqrt(float64(m1["茶艺"]*m1["茶艺"] + m2["茶艺"]*m2["茶艺"]))),
		"网红":      float32(math.Sqrt(float64(m1["网红"]*m1["网红"] + m2["网红"]*m2["网红"]))),
		"品牌":      float32(math.Sqrt(float64(m1["品牌"]*m1["品牌"] + m2["品牌"]*m2["品牌"]))),
		"民俗土特产":   float32(math.Sqrt(float64(m1["民俗土特产"]*m1["民俗土特产"] + m2["民俗土特产"]*m2["民俗土特产"]))),
		"婚庆":      float32(math.Sqrt(float64(m1["婚庆"]*m1["婚庆"] + m2["婚庆"]*m2["婚庆"]))),
		"游客驿站":    float32(math.Sqrt(float64(m1["游客驿站"]*m1["游客驿站"] + m2["游客驿站"]*m2["游客驿站"]))),
	}
	return m
}

func sortData() []float64 {
	res := Vector()
	ress := []float64{}
	a := float64(res["一站式综合服务"])
	b := float64(res["小型便民"])
	c := float64(res["党群服务"])
	d := float64(res["红色文化"])
	e := float64(res["茶艺"])
	f := float64(res["网红"])
	g := float64(res["品牌"])
	h := float64(res["民俗土特产"])
	i := float64(res["婚庆"])
	j := float64(res["游客驿站"])
	ress = append(ress, a, b, c, d, e, f, g, h, i, j)
	sort.Float64s(ress)
	resss := []float64{}
	resss = append(resss, ress[9], ress[8], ress[7])
	return resss
}

// Cal
// @Tags 公共方法
// @Summary 获取计算结果
// @Accept json
// @Success 200 {string} json "{"code":"200","data":""}"
// @Router /cal [get]
func Cal(c *gin.Context) {
	if len(res) != 19 {
		c.JSON(http.StatusOK, gin.H{
			"code": -1,
			"msg":  "数据输入有误",
		})
		return
	}
	//6个指标
	data1 := Target()
	//计算六个维度匹配度
	data2 := MatchCal()
	//计算商圈匹配度
	data3 := Judge()
	//计算矢量值
	data4 := Vector()
	//排序返回最大的三个
	data5 := sortData()

	c.JSON(http.StatusOK, gin.H{
		"code":  200,
		"data1": data1,
		"data2": data2,
		"data3": data3,
		"data4": data4,
		"data5": data5,
	})
}
