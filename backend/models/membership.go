package models

type Membership struct {
	ID      int               `json:"id"`
	Project MembershipProject `json:"project"`
	User    *MembershipUser   `json:"user,omitempty"`
	Group   *MembershipGroup  `json:"group,omitempty"`
	Roles   []MembershipRole  `json:"roles"`
}

type MembershipProject struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
}

type MembershipUser struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
}

type MembershipGroup struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
}

type MembershipRole struct {
	ID        int    `json:"id"`
	Name      string `json:"name"`
	Inherited bool   `json:"inherited,omitempty"`
}
