# Allnstack

Desktop workspace for agencies that manage creators’ chats: one inbox for every model and platform,
team roles, shifts, a media vault and AI-assisted replies.

- **Download:** [latest release](https://github.com/oserusapp-cyber/allnstack-releases/releases/latest) (`Allnstack-Setup-<version>.exe`, Windows 10/11 64-bit)
- **Website:** https://oserusapp-cyber.github.io/allnstack-releases/

The installed app updates itself from this repo’s Releases.

## This repo

Installers are published here by the release workflow of the (private) app repo. The website is
VitePress in `docs/`, deployed to GitHub Pages on every push to `main`
(`.github/workflows/deploy-docs.yml`).

```bash
npm install
npm run docs:dev     # local preview
npm run docs:build
```
