package main

import (
	"context"
	"database/sql"
	"fmt"
	"os"

	_ "github.com/go-sql-driver/mysql"
	"github.com/joho/godotenv"

	"redmine-go-app/backend/app/redmine" // Update this path to match your actual module path
	"redmine-go-app/backend/models"
)

// App struct
type App struct {
	ctx context.Context
	db  *sql.DB
}

// NewApp creates a new App application struct
func NewApp() *App {
	_ = godotenv.Load()
	user := os.Getenv("MYSQL_USER")
	pass := os.Getenv("MYSQL_PASSWORD")
	host := os.Getenv("MYSQL_HOST")
	port := os.Getenv("MYSQL_PORT")
	dbname := os.Getenv("MYSQL_DATABASE")
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s", user, pass, host, port, dbname)
	db, err := sql.Open("mysql", dsn)
	if err != nil {
		panic(fmt.Sprintf("Failed to connect to MySQL: %v", err))
	}
	return &App{db: db}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

func (a *App) FetchRedmineProjects() ([]models.Project, error) {
	// redmineAPIKey := os.Getenv("REDMINE_API_KEY")
	// if redmineAPIKey == "" {
	// 	return nil, fmt.Errorf("REDMINE_API_KEY not set in environment variables")
	// }
	projects, err := redmine.GetProjectList()
	if err != nil {
		return nil, fmt.Errorf("failed to fetch Redmine projects: %w", err)
	}
	return projects, nil
}

func (a *App) FetchProjectMemberships(projectID int) ([]models.Membership, error) {
	memberships, err := redmine.GetProjectMemberships(projectID)
	if err != nil {
		return nil, fmt.Errorf("failed to fetch memberships for project %d: %w", projectID, err)
	}
	return memberships, nil
}