---
description: Add a new challenge entry (product + video) to the 100 Day Challenge page
allowed-tools: Read, Edit, Bash(git status:*), Bash(git diff:*), Bash(git log:*), Bash(git add:*), Bash(git commit:*), Bash(git push:*), WebFetch
---

## Input

The user will provide:
- **Video link** (required): A URL to the video (usually Xiaohongshu)
- **Product link** (required): A URL to the product

## Task

Add a new challenge entry to the 100 Day Challenge page and deploy it.

### Steps

1. **Fetch product info**: Use WebFetch on the product URL to extract the product name and a short description (under 60 chars).

2. **Determine video description**: Extract or infer the video title/description from the URL or user input. Translate to English if needed, keep it concise.

3. **Determine the date**: Use today's date in `YYYY.MM.DD` format.

4. **Edit the challenge file**: Open `src/pages/Challenge.jsx` and add a new entry to the end of the `challenges` array (before the closing `];`), following this format:
   ```javascript
   {
     date: 'YYYY.MM.DD',
     product: { name: 'ProductName', desc: 'Short description', url: 'https://...' },
     video: { desc: 'Video description in English', url: 'https://...' },
   },
   ```

5. **Commit**: Stage and commit with message format: `day N: ProductName - short desc`
   - The day number N = total number of entries in the challenges array after adding
   - Use HEREDOC format for the commit message

6. **Push**: Push to remote with `git push`

7. **Confirm**: Show the user what was added and confirm the push was successful.

### Important
- Keep descriptions concise and in English
- Follow the exact data format of existing entries
- The day number in the commit message should match the total count of challenges
