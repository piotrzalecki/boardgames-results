package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/piotrzalecki/boardgame-results/handlers"

	"github.com/piotrzalecki/boardgame-results/config"
)

const version = "1.0.0"

var infoLog *log.Logger
var errorLog *log.Logger

func main() {

	var cfg config.AppConfig

	cfg.Port = 9090
	cfg.Env = "dev"

	//setting up loggers
	infoLog = log.New(os.Stdout, "INFO\t", log.Ldate|log.Ltime)
	cfg.InfoLogger = infoLog

	errorLog = log.New(os.Stdout, "ERROR\t", log.Ldate|log.Ltime|log.Lshortfile)
	cfg.ErrorLogger = errorLog

	cfg.Version = version

	//init handlers
	repo := handlers.NewRepo(&cfg)
	handlers.NewHandlers(repo)

	srv := &http.Server{
		Addr:         fmt.Sprintf(":%d", cfg.Port),
		Handler:      routes(&cfg),
		IdleTimeout:  time.Minute,
		ReadTimeout:  10 * time.Second,
		WriteTimeout: 30 * time.Second,
	}

	cfg.InfoLogger.Println("Starting server on port: ", cfg.Port)

	err := srv.ListenAndServe()
	if err != nil {
		log.Println(err)
	}
}
