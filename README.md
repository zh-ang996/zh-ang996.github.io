# Junyang / Robotics

A single-page personal homepage for robotics research, learning-based control and sim-to-real work.

## Personalize it

The main content lives in [`app/page.tsx`](app/page.tsx), and the site URL metadata lives in [`app/layout.tsx`](app/layout.tsx). Before publishing, replace:

- the name, phone number and email if you want different public contact details
- `your-handle` with your GitHub and LinkedIn handles
- project descriptions, years and links with your actual work
- the media placeholders with your own images and demo videos

The profile photo extracted from the resume is at `public/media/images/avatar.png`. Images go in `public/media/images/`; videos go in `public/media/videos/`. Then uncomment or update the matching `src` value in `app/page.tsx`.

## GitHub Pages

Create a repository named `<your-github-username>.github.io`, push this project to its `main` branch, and enable GitHub Pages in the repository settings with **GitHub Actions** as the source. The included workflow will build and publish the homepage automatically on each push.

GitHub limits individual files to 100 MB. For larger demo videos, use an external video host and replace the project link with that URL.

## Local preview

```bash
npm install
npm run dev
```
