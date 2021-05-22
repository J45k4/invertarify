package graph

import (
	"context"
	"fmt"
	"log"
	"strconv"
	"strings"

	"github.com/99designs/gqlgen/graphql"
	"github.com/vektah/gqlparser/v2/gqlerror"
	"github.com/volatiletech/null/v8"
)

func createUniqueID(modelName string, id int) string {
	s := modelName + ":" + fmt.Sprint(id)

	return s
}

func parseUniqueID(id string) (string, int) {
	s := strings.Split(id, ":")

	i, _ := strconv.Atoi(s[1])

	return s[0], i
}

func uniqueIdPtrAsNullableInt(id *string) null.Int {
	if id == nil {
		return null.IntFromPtr(nil)
	}

	_, i := parseUniqueID(*id)

	return null.IntFrom(i)
}

func uniqueIdAsNullableInt(id string) null.Int {
	_, i := parseUniqueID(id)

	return null.IntFrom(i)
}

func uniqueIdAsInt(id string) int {
	_, i := parseUniqueID(id)

	return i
}

type errorCode string

const (
	ContainerDoesNotExist errorCode = "CONTAINER_DOES_NOT_EXIST"
	ItemDoesNotExist                = "ITEM_DOES_NOT_EXIST"
	InternalServerError             = "INTERNAL_SERVER_ERROR"
)

func createError(ctx context.Context, code errorCode) *gqlerror.Error {
	return &gqlerror.Error{
		Path:    graphql.GetPath(ctx),
		Message: fmt.Sprint(code),
		Extensions: map[string]interface{}{
			"code": code,
		},
	}
}

func logError(ctx context.Context, err error) {
	path := graphql.GetPath(ctx)

	log.Printf("%v %v", path.String(), err.Error())
}
