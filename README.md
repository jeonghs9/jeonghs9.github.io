# jeonghs9.github.io

Jekyll portfolio site for GitHub Pages.

## Local development

```bash
bundle install
bundle exec jekyll serve
```

Open `http://127.0.0.1:4000`.

## Content editing

Most portfolio content is managed in `_data/`.

- `_data/profile.yml`: name, role, bio, keywords, contact links
- `_data/news.yml`: recent updates
- `_data/projects.yml`: project entries shown on the home page and Projects page
- `_data/experience.yml`: career history
- `_data/education.yml`: education
- `_data/awards.yml`: honors and awards
- `_data/archive.yml`: timeline archive

For a new project or career entry, copy an existing `- title_en:` or `- company_en:` block and edit the values. Keep the two-space indentation.
