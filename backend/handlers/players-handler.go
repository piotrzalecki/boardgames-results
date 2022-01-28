package handlers

import (
	"net/http"

	"github.com/piotrzalecki/boardgame-results/models"
	"github.com/piotrzalecki/boardgame-results/utils"
)

func (rep *Repository) GetAllPlayers(w http.ResponseWriter, r *http.Request) {

	var matches []models.PlayerMatch
	var players []models.Player

	//first player moc data
	match := models.PlayerMatch{
		GameName:   "Some game name",
		MatchScore: 15,
	}
	matches = append(matches, match)

	match = models.PlayerMatch{
		GameName:   "the other game",
		MatchScore: 62,
	}
	matches = append(matches, match)

	player := models.Player{
		ID:            0,
		PlayerName:    "Player no 1",
		MatchesNumber: 27,
		Matches:       matches,
	}
	players = append(players, player)

	var matches2 []models.PlayerMatch
	//second player moc data
	match = models.PlayerMatch{
		GameName:   "Some game name",
		MatchScore: 17,
	}
	matches2 = append(matches2, match)

	match = models.PlayerMatch{
		GameName:   "the other game",
		MatchScore: 77,
	}
	matches2 = append(matches2, match)

	player = models.Player{
		ID:            1,
		PlayerName:    "Player no 2",
		MatchesNumber: 15,
		Matches:       matches2,
	}
	players = append(players, player)

	err := utils.WriteJson(w, http.StatusOK, players, "players")
	if err != nil {
		utils.ErrorJson(w, err)
		return
	}

}
