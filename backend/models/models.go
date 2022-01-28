package models

type Player struct {
	ID            int           `json:"player_id"`
	PlayerName    string        `json:"player_name"`
	MatchesNumber int           `json:"matches_number"`
	Matches       []PlayerMatch `json:"matches"`
}

type PlayerMatch struct {
	GameName   string `json:"game_name"`
	MatchScore int    `json:"match_score"`
}
