# GymBuddy Exercise DB

Open exercise dataset for GymBuddy — curated for budget gym users in India. 42 exercises covering all major muscle groups with images and videos.

## Structure

```
gymbuddy-exercise-db/
├── dist/
│   └── exercises.json          # Combined JSON (all exercises, auto-generated)
├── exercises/
│   └── <Exercise_Name>/
│       ├── exercise.json       # Exercise metadata
│       ├── 0.jpg               # Start position image
│       ├── 1.jpg               # End position image
│       └── demo.mp4            # (optional) Demo video
├── scripts/
│   ├── combine.sh              # Merges all exercise.json into dist/exercises.json
│   └── validate.js             # Validates JSON against schema
├── schema.json                 # JSON schema for exercise data
└── .github/
    └── workflows/
        └── ci.yaml             # Validates + rebuilds dist on push
```

## Image/Video conventions

- Images: JPEG, min 400×400px, named `0.jpg` (start) and `1.jpg` (end position)
- Videos: MP4 (H.264), max 8 seconds, named `demo.mp4`, 720p minimum
- All AI-generated content must be reviewed for correct form before merging

## Using the data

Prefix any image path with the raw GitHub URL:

```
https://raw.githubusercontent.com/<your-username>/gymbuddy-exercise-db/main/exercises/
```

Example:
```
https://raw.githubusercontent.com/<your-username>/gymbuddy-exercise-db/main/exercises/Barbell_Bench_Press/0.jpg
```

## Exercise JSON format

See `schema.json` for full spec. Example:

```json
{
  "id": "barbell_bench_press",
  "name": "Barbell Bench Press",
  "category": "Chest",
  "mechanic": "compound",
  "equipment": "barbell",
  "primaryMuscles": ["chest"],
  "secondaryMuscles": ["triceps", "shoulders"],
  "difficulty": "intermediate",
  "instructions": [
    "Lie flat on a bench with your feet on the floor.",
    "Grip the bar slightly wider than shoulder-width.",
    "Lower the bar to your mid-chest under control.",
    "Press the bar back up to the starting position."
  ],
  "images": ["0.jpg", "1.jpg"],
  "video": "demo.mp4",
  "gymbuddy": {
    "priority": 1,
    "dayTag": "Push A",
    "setsRep": "4×6-8",
    "progressionNote": "Add 2.5kg when you hit the top of the rep range for 2 sessions"
  }
}
```

## Scripts

**Combine all exercises into one JSON:**
```bash
bash scripts/combine.sh
```

**Validate all exercises:**
```bash
node scripts/validate.js
```

## License

Exercise data: MIT. Images and videos: check generation source for commercial use rights.
