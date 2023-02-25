package models

type SecondWeight struct {
	Id           int     `gorm:"primarykey;" json:"id"`
	Name         string  `json:"name"`
	Digitization float32 `json:"digitization"`
	Ability      float32 `json:"ability"`
	Idea         float32 `json:"idea"`
	Cost         float32 `json:"cost"`
	Resource     float32 `json:"resource"`
	Place        float32 `json:"place"`
}

func (table *SecondWeight) TableName() string {
	return "second_weight"
}
