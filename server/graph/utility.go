package graph

import (
	"fmt"
	"strconv"
	"strings"

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
