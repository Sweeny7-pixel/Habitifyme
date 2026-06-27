# Adding a new exercise

1. Create a folder under `exercises/` using `Snake_Case` naming:
   ```
   exercises/Barbell_Curl/
   ```

2. Add `exercise.json` — follow the schema in `schema.json`

3. Add images:
   - `0.jpg` — starting position
   - `1.jpg` — end/peak position
   - Minimum 400×400px, JPEG, under 200KB each

4. (Optional) Add `demo.mp4`:
   - Max 8 seconds, 720p, H.264
   - Shows full range of motion, clear form

5. Run validation locally:
   ```bash
   node scripts/validate.js
   ```

6. Open a PR — CI will validate automatically

## Image generation prompt template (for AI-generated images)

Use this format for consistency across exercises:

```
A fitness illustration showing a person performing [EXERCISE NAME].
[START/END] position. Clean gym background with basic equipment visible.
Illustrated style, flat colors, no shadows. Full body visible, correct form.
Gender-neutral figure, athletic build.
```
