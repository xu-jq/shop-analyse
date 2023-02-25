package service

import (
	"github.com/fatih/structs"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
	"shop-analyse/models"
)

// GetFirstWeight
// @Tags 公共方法
// @Summary 获取权重1
// @Accept json
// @Success 200 {string} json "{"code":"200","data":""}"
// @Router /firstWeight-list [get]
func GetFirstWeight(c *gin.Context) {
	list := make([]*models.FirstWeight, 0)
	err := models.DB.Find(&list).Error
	if err != nil {
		c.JSON(http.StatusOK, gin.H{
			"code": -1,
			"msg":  "Get FirstWeight err:" + err.Error(),
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"code": 200,
		"data": list,
	})
}

// UpdateFirstWeight
// @Tags 公共方法
// @Summary 权重1修改
// @Param data body models.FirstWeight true "FirstWeight"
// @Success 200 {string} json "{"code":"200","data":""}"
// @Router /firstWeight-modify [put]
func UpdateFirstWeight(c *gin.Context) {
	firstWeight := new(models.FirstWeight)
	err := c.ShouldBindJSON(firstWeight)
	if err != nil {
		log.Println("[JsonBind Error] : ", err)
		c.JSON(http.StatusOK, gin.H{
			"code": -1,
			"msg":  "参数错误",
		})
		return
	}
	m := structs.Map(firstWeight)
	err = models.DB.Model(&firstWeight).Updates(m).Error
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
