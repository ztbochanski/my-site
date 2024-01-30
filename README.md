# my-site

[My Site](zachsblog.netlify.app)

[![Netlify Status](https://api.netlify.com/api/v1/badges/ca5b8b51-f7ed-4b2b-9a7b-5492256692ad/deploy-status)](https://app.netlify.com/sites/zachsblog/deploys)

This document outlines clear steps for efficiently building a small project

### Phase 0: Conceptualize and Design
- Create a picture of the endstate
- Break down the picture into components and steps

### Phase 1: Structure - Create a static site using a package like Astro. (HTML Only)
- Create index page
- Create dynamic blog page
- Set up markdown (mdx) content for blog page
- Configure helper code or modules for SEO, markdown rendering, processing tasks, etc.

### Phase 2: Design - Add styling and animations
- Add CSS
- Add animations
- Add D3 visualizations
- Add interactive elements
  
### Phase 3: Content - Add mdx and components
- Add blog pages
- Add informative components
  
## 🚀 Project Structure

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

## Tool Stack

- [Astro](https://astro.build)
- [Vite](https://vitejs.dev/)
- [Tailwindcss](https://tailwindcss.com/docs)
- [Motion](https://motion.dev/)
- [mdx](https://mdxjs.com/)
- [iconify](https://iconify.design/)

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Credit

Check out [Astro documentation](https://docs.astro.build) that helped guide this build; also check [Bear Blog](https://github.com/HermanMartinus/bearblog/) which referenced used by [astro](https://docs.astro.build) to inspire the starter template.
