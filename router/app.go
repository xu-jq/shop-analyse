package router

import (
	"github.com/gin-gonic/gin"
	swaggerfiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
	_ "shop-analyse/docs"
	"shop-analyse/middlewares"
	"shop-analyse/service"
)

func Router() *gin.Engine {
	r := gin.Default()
	r.Use(middlewares.Cors())

	// Swagger 配置
	r.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerfiles.Handler))

	r.GET("/firstWeight-list", service.GetFirstWeight)

	r.PUT("/firstWeight-modify", service.UpdateFirstWeight)

	r.POST("/input", service.Mark)

	r.GET("/cal", service.Cal)

	r.GET("/secondWeight-list", service.GetSecondWeight)

	r.PUT("/secondWeight-modify", service.UpdateSecondWeight)

	r.GET("/getUserMark", service.UserMark)

	r.GET("/getUser", service.GetUser)

	r.GET("/mark", service.Mark2)

	r.DELETE("/deleteUser", service.Delete)

	return r
}
