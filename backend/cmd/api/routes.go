package main

import (
	"net/http"

	"github.com/julienschmidt/httprouter"
	"github.com/piotrzalecki/boardgame-results/config"
	"github.com/piotrzalecki/boardgame-results/handlers"
	"github.com/piotrzalecki/boardgame-results/middleware"
)

// func (app *application) wrap(next http.Handler) httprouter.Handle {
// 	return func(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
// 		ctx := context.WithValue(r.Context(), "params", ps)
// 		next.ServeHTTP(w, r.WithContext(ctx))
// 	}
// }

func routes(app *config.AppConfig) http.Handler {
	router := httprouter.New()
	// secure := alice.New(app.checkToken)

	router.HandlerFunc(http.MethodGet, "/status", handlers.Repo.StatusHandler)
	router.HandlerFunc(http.MethodGet, "/v1/players", handlers.Repo.GetAllPlayers)

	// router.HandlerFunc(http.MethodPost, "/v1/signin", app.Signin)

	// router.HandlerFunc(http.MethodGet, "/v1/movies/:id", app.getOneMovie)
	// // router.HandlerFunc(http.MethodGet, "/v1/admin/deletemovie/:id", app.deleteMovie)
	// // router.GET("/v1/admin/deletemovie/:id", app.wrap(secure.ThenFunc(app.deleteMovie)))
	// router.HandlerFunc(http.MethodGet, "/v1/movies", app.getAllMovie)
	// router.HandlerFunc(http.MethodGet, "/v1/movies-genre/:genre_id", app.getAllMovieByGenre)
	// router.HandlerFunc(http.MethodGet, "/v1/genres", app.getAllGenres)

	// // router.POST("/v1/admin/editmovie", app.wrap(secure.ThenFunc(app.editMovie)))
	// // router.HandlerFunc(http.MethodPost, "/v1/admin/editmovie", app.editMovie)

	// router.HandlerFunc(http.MethodPost, "/v1/graphql", app.moviesGraphQL)
	// return router
	return middleware.EnableCORS(router)
}
