# aquí 2.0

A curated discovery app for natural products and locally or artisan made
products in Panama. This repository holds the demo version, rebuilt clean on
13 September 2026.

Live: https://mippy1974.github.io/aqui2/

## Running it

There is no build step and nothing to install. Open `index.html` in a browser,
or serve the folder over HTTP. On GitHub Pages, enable Pages on the `main`
branch, root folder. Keep the `.nojekyll` file.

## What is in here

```
index.html          markup shell: header, view container, tab bar
styles.css          all styling, one file
app.js              text, state, search, views, router
data/categories.js  the seven browse categories
data/products.js    central product list, English and Spanish names
data/places.js      searchable towns with coordinates and province
data/brands.js      brands, points of sale, shipping coverage, links
data/content.js     Mission, Privacy Policy, Terms of Use, both languages
assets/logo.png     wordmark
assets/hero.jpg     home screen photo
assets/icons/       navigation and category icons
assets/categories/  category card photos, one per category id
```

Editing content means editing the files in `data/`. They are plain JavaScript
arrays with comments explaining each field. In the full version this content
moves behind a password protected admin area.

## Category cards

Each category is one card: a photo across the top, then a paper strip holding
the name and a chevron. The card looks for `assets/categories/<id>.jpg`, and
falls back to the category line icon when no file is there, so photos can be
replaced or added one at a time with no code change.

The photo box is a wide strip, about 2.1 times wider than tall. Send new photos
landscape, at least 1200 pixels wide, subject in the middle band.

Photo status today: skincare is the full size photo from the designer. Herbs,
food and menstrual were taken from her layout image and are small, fine for the
demo and worth replacing. Ritual, living and kids are stand ins cut from the
home screen photo, there so the grid reads as one finished set.

## How the search works

The brief asks for physical availability and shipping to work as two
independent criteria that can be used at the same time. The rule, in
`search()` in `app.js`:

1. Filter brands by the chosen product and/or category.
2. If no location is chosen, return them all.
3. Otherwise keep a brand when it has a point of sale inside the radius,
   **or** shipping is switched on and the brand ships to that province.

The radius is measured from a brand's **points of sale**, never from the
brand's own location. A brand may produce in Panama City and be sold in a shop
in Coronado, and a search in Coronado has to find it.

Distances are straight line, calculated with the haversine formula. No mapping
service is called.

## Location

Typing a location is the primary path, because someone in Coronado may be
planning a trip to Boquete. "Use my location" is optional. It reads the browser
position once, matches it to the nearest town in `data/places.js`, and discards
the coordinates. Nothing is stored or transmitted.

## Languages

English and Spanish throughout: navigation, buttons, categories, filters,
products, system text and the Mission and legal pages. A product exists once
and carries both names, so a search in either language reaches the same brands.
Autocomplete matches across languages, so typing `chucrut` in English mode
still finds Sauerkraut.

## What this demo does not include

No user accounts, no brand accounts, no cart, no checkout and no admin area.
None of those are needed for V1 per the brief, and the admin area is
deliberately out of the demo. The data shape is the same one the full version
uses, so the content carries over.

Brands and products in `data/` are invented placeholders.

## Legal pages

`data/content.js` holds the Privacy Policy and Terms of Use in both languages.
They describe what this build actually does. They are a starting point and
should be reviewed by a lawyer before the app is published.
