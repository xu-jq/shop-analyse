package models

type FirstWeight struct {
	Id            int     `gorm:"primarykey;" json:"id"`
	Name          string  `json:"name"`
	Level         float32 `json:"level"`
	Place         float32 `json:"place"`
	PeopleDensity float32 `json:"people_density"`
	ShopDensity   float32 `json:"shop_density"`
	Policy        float32 `json:"policy"`
	Resources     float32 `json:"resources"`
	Rent          float32 `json:"rent"`
	PeopleNum     float32 `json:"people_num"`
	OfficePeople  float32 `json:"office_people"`
	Area          float32 `json:"area"`
	Culture       float32 `json:"culture"`
	Reform        float32 `json:"reform"`
	Risk          float32 `json:"risk"`
	Character     float32 `json:"character"`
	Investment    float32 `json:"investment"`
	Credit        float32 `json:"credit"`
	Terminal      float32 `json:"terminal"`
	Commerce      float32 `json:"commerce"`
	Society       float32 `json:"society"`
}

func (table *FirstWeight) TableName() string {
	return "first_weight"
}
