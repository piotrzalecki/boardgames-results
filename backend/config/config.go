package config

import (
	"log"
)

type AppConfig struct {
	Port        int
	Env         string
	Version		string
	InfoLogger  *log.Logger
	ErrorLogger *log.Logger
}
