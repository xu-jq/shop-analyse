package service

import (
	"github.com/fatih/structs"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
	"shop-analyse/models"
)

// GetSecondWeight
// @Tags 公共方法
// @Summary 获取权重2
// @Accept json
// @Success 200 {string} json "{"code":"200","data":""}"
// @Router /secondWeight-list [get]
func GetSecondWeight(c *gin.Context) {
	list := make([]*models.SecondWeight, 0)
	err := models.DB.Find(&list).Error
	if err != nil {
		c.JSON(http.StatusOK, gin.H{
			"code": -1,
			"msg":  "Get SecondWeight err:" + err.Error(),
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"code": 200,
		"data": list,
	})
}

// UpdateSecondWeight
// @Tags 公共方法
// @Summary 权重2修改
// @Param data body models.SecondWeight true "SecondWeight"
// @Success 200 {string} json "{"code":"200","data":""}"
// @Router /secondWeight-modify [put]
func UpdateSecondWeight(c *gin.Context) {
	secondWeight := new(models.SecondWeight)
	err := c.ShouldBindJSON(secondWeight)
	if err != nil {
		log.Println("[JsonBind Error] : ", err)
		c.JSON(http.StatusOK, gin.H{
			"code": -1,
			"msg":  "参数错误",
		})
		return
	}
	m := structs.Map(secondWeight)
	err = models.DB.Model(&secondWeight).Updates(m).Error
	if err != nil {
		c.JSON(http.StatusOK, gin.H{
			"code": -1,
			"msg":  "更新失败:" + err.Error(),
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"code": 200,
		"msg":  "更新成功",
	})
}
