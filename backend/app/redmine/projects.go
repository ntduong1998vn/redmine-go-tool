package redmine

import (
	"encoding/json"
	"fmt"
	"net/http"

	"redmine-go-app/backend/models" // Update this path to match your actual module path
)

// ProjectsResponse dùng để map response từ Redmine API
// projects là mảng các project

type ProjectsResponse struct {
	Projects []models.Project `json:"projects"`
}

// getProjectList gọi API Redmine để lấy danh sách project
func GetProjectList() ([]models.Project, error) {
	url := "https://redmine.splus-software.com/projects.json"
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		return nil, err
	}
	req.Header.Set("X-Redmine-API-Key", "cad5eb98b070c1ee75330031c0e34ed4cd412eb1")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("redmine API returned status: %s", resp.Status)
	}

	var result ProjectsResponse
	if err := json.NewDecoder(resp.Body).Decode(&result); err != nil {
		return nil, err
	}

	return result.Projects, nil
}
