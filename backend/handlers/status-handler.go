package handlers

import (
	"encoding/json"
	"net/http"
)

type AppStatus struct {
	Status      string `json:"status"`
	Environemnt string `json:"environment"`
	Version     string `json:"version"`
}

func (rep *Repository) StatusHandler(w http.ResponseWriter, r *http.Request) {
	currentStatus := AppStatus{
		Status:      "Available",
		Environemnt: rep.App.Env,
		Version:     rep.App.Version,
	}
	js, err := json.MarshalIndent(currentStatus, "", "\t")
	if err != nil {
		rep.App.InfoLogger.Println(err)
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	w.Write(js)
}
