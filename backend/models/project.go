package models

// Project struct dùng để map dữ liệu project từ Redmine API
// Có thể bổ sung thêm các trường nếu cần thiết

type Project struct {
	ID          int    `json:"id"`
	Name        string `json:"name"`
	Identifier  string `json:"identifier"`
	Description string `json:"description"`
	// ... thêm các trường cần thiết
}
