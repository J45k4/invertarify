//go:generate go run scripts/gqlgen.go

package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/go-chi/chi"
	_ "github.com/go-sql-driver/mysql"
	"github.com/j45k4/invertarify/config"
	"github.com/j45k4/invertarify/graph"
	"github.com/j45k4/invertarify/graph/generated"
	"github.com/rs/cors"
	migrate "github.com/rubenv/sql-migrate"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func main() {
	connectionString := fmt.Sprintf(
		"%s:%s@tcp(%s:3306)/%s?parseTime=true",
		config.DBUser,
		config.DBPassword,
		config.DBHost,
		config.DBName,
	)

	db, err := sql.Open("mysql", connectionString)

	if err != nil {
		fmt.Println("Sql open error ", err)

		panic("Cannot create db connection")
	}

	migrations := &migrate.FileMigrationSource{
		Dir: "./migrations",
	}

	_, err = migrate.Exec(db, "mysql", migrations, migrate.Up)

	if err != nil {
		fmt.Println("migration exec failed ", err)

		panic("Failed to migrate database")
	}

	gormDB, err := gorm.Open(mysql.New(mysql.Config{
		Conn: db,
	}), &gorm.Config{})
	router := chi.NewRouter()

	if err != nil {
		fmt.Println("Failed to create gorm db connection")

		panic("Failed to create gorm db")
	}

	router.Use(cors.New(cors.Options{
		AllowedOrigins:   []string{"*"},
		AllowCredentials: true,
		AllowedHeaders:   []string{"Authorization", "Content-Type"},
		Debug:            true,
	}).Handler)

	port := "3090"

	srv := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: &graph.Resolver{
		DB: gormDB,
	}}))

	router.Handle("/playground", playground.Handler("GraphQL playground", "/graphql"))
	router.Handle("/graphql", srv)

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, router))
}
