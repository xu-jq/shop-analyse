package models

type User struct {
	Id            int    `gorm:"primarykey;" json:"id"`
	Name          string `json:"name"`
	Type          string `json:"type"`
	Level         string `json:"level"`
	Place         string `json:"place"`
	PeopleDensity string `json:"people_density"`
	ShopDensity   string `json:"shop_density"`
	Policy        string `json:"policy"`
	Resources     string `json:"resources"`
	Rent          string `json:"rent"`
	PeopleNum     string `json:"people_num"`
	OfficePeople  string `json:"office_people"`
	Area          string `json:"area"`
	State         string `json:"state"`
	Culture       string `json:"culture"`
	Reform        string `json:"reform"`
	Risk          string `json:"risk"`
	Character     string `json:"character"`
	Investment    string `json:"investment"`
	Credit        string `json:"credit"`
	Terminal      string `json:"terminal"`
	Commerce      string `json:"commerce"`
	Society       string `json:"society"`
}

func (table *User) TableName() string {
	return "user"
}
