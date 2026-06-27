#!/bin/bash
# Combines all exercise.json files into dist/exercises.json
# Requires: jq (brew install jq / apt install jq)

OUTPUT="dist/exercises.json"
echo "Building $OUTPUT..."

find exercises -name "exercise.json" | sort | xargs -I{} cat {} | jq -s '.' > "$OUTPUT"

COUNT=$(jq length "$OUTPUT")
echo "Done. $COUNT exercises written to $OUTPUT"
