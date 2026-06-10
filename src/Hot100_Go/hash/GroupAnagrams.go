package hash

import (
	"maps"
	"slices"
)

func groupAnagrams(strs []string) [][]string {
	record := map[string][]string{}

	for _, str := range strs {
		tmp := []byte(str)
		slices.Sort(tmp)
		sortedStr := string(tmp)

		record[sortedStr] = append(record[sortedStr], str)
	}

	return slices.Collect(maps.Values(record))
}
