# cancermodel.eu

Website inviting people to adopt the European Common Cancer Data Model (ECCDM) and join the
Phoenix Initiative by HL7 Europe.

Static site built with [Astro](https://astro.build), edited through
[Sveltia CMS](https://github.com/sveltia/sveltia-cms) (git-based: content is Markdown in this
repository), deployed to [bunny.net](https://bunny.net) storage + CDN.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Where things live

| What | Where |
|---|---|
| Outbound links and the four calls to action | `src/data/site.ts` |
| Landing page | `src/pages/index.astro` |
| Blog posts | `src/content/blog/*.md` |
| Shared layout and styles | `src/layouts/Base.astro` |
| CMS configuration | `public/admin/config.yml` |
| Build and deploy | `.github/workflows/deploy.yml` |

`src/data/site.ts` contains two `TODO` placeholders: the links for the Phoenix calls and for
Phoenix membership.

## Editing content

Either edit the Markdown files directly, or open `/admin/` on the deployed site and sign in
with a GitHub personal access token that has write access to this repository. Saving in the
CMS commits to `main`, which triggers a deploy.

## Deployment

Every push to `main` builds the site. The deploy job runs once these are set under
*Settings → Secrets and variables → Actions*:

| Kind | Name | Value |
|---|---|---|
| Variable | `BUNNY_STORAGE_ZONE` | Storage zone name |
| Variable | `BUNNY_PULLZONE_ID` | Numeric ID of the pull zone in front of the storage zone |
| Variable | `BUNNY_STORAGE_HOST` | Optional; only if the zone's main region is not Falkenstein (default `storage.bunnycdn.com`) |
| Secret | `BUNNY_STORAGE_PASSWORD` | Storage zone password (FTP & API access) |
| Secret | `BUNNY_API_KEY` | Account API key, used to purge the CDN cache |

One-time setup at bunny.net: create a storage zone in an EU region, connect a pull zone to
it, add `cancermodel.eu` as a custom hostname with free SSL, and point the domain's DNS at
the pull zone as bunny.net instructs.

The upload step does not delete files that were removed from the site; remove those in the
bunny.net dashboard if needed.
