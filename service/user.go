package service

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"shop-analyse/models"
)

// UserMark
// @Tags 公共方法
// @Summary 获取用户分数
// @Accept json
// @Param name query string true "客户名称"
// @Success 200 {string} json "{"code":"200","data":""}"
// @Router /getUserMark [get]
func UserMark(c *gin.Context) {
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

	data := map[string]interface{}{
		"name":          name,
		"type":          user.Type,
		"level":         res[0],
		"place":         res[1],
		"peopleDensity": res[2],
		"shopDensity":   res[3],
		"policy":        res[4],
		"resources":     res[5],
		"rent":          res[6],
		"peopleNum":     res[7],
		"officePeople":  res[8],
		"area":          res[9],
		"state":         user.State,
		"culture":       res[10],
		"reform":        res[11],
		"risk":          res[12],
		"character":     res[13],
		"investment":    res[14],
		"credit":        res[15],
		"terminal":      res[16],
		"commerce":      res[17],
		"society":       res[18],
	}
	c.JSON(http.StatusOK, gin.H{
		"code": 200,
		"data": data,
	})
}

// GetUser
// @Tags 公共方法
// @Summary 获取全部用户
// @Accept json
// @Success 200 {string} json "{"code":"200","data":""}"
// @Router /getUser [get]
func GetUser(c *gin.Context) {
	list := make([]*models.User, 0)
	err := models.DB.Model(new(models.User)).Find(&list).Error
	if err != nil {
		c.JSON(http.StatusOK, gin.H{
			"code": -1,
			"msg":  "Get All User: Error:" + err.Error(),
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"code": 200,
		"data": list,
	})
}

// Delete
// @Tags 公共方法
// @Summary 删除记录
// @Accept json
// @Param name query string true "客户名称"
// @Success 200 {string} json "{"code":"200","data":""}"
// @Router /deleteUser [delete]
func Delete(c *gin.Context) {
	name := c.Query("name")
	err := models.DB.Where("name = ?", name).Delete(new(models.User)).Error
	if err != nil {
		c.JSON(http.StatusOK, gin.H{
			"code": -1,
			"msg":  "Delete User err:" + err.Error(),
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"code": 200,
		"msg":  "删除成功",
	})
}
