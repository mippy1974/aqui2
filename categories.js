/* aquí - browse categories.
   The brief calls these "working categories": they are meant to be edited and
   extended. In this demo they live here; in the full app they move to the
   admin area. Icon files are in .

   CATEGORY PHOTOS
   Each card shows a photo across the top when one exists, and falls back to the
   line icon when it does not, so photos can arrive one at a time with no code
   change.

   To add one: drop a landscape image into  named after the id
   below, for example skincare.jpg. Either .jpg or .png works.
   The card crops to a wide strip, about 2.1 times wider than tall, so keep the
   subject in the middle band. At least 1200 pixels wide is plenty.

   To go back to icons for a category, remove its file (or clear its photo line
   here). Nothing else needs to change. */

window.CATEGORIES = [
  { id: 'skincare',  en: 'Natural Skincare & Bodycare',  es: 'Cuidado natural de piel y cuerpo', icon: 'cat-skincare.png',  photo: 'skincare.jpg' },
  { id: 'herbs',     en: 'Herbs, Tea & Natural Remedies', es: 'Hierbas, té y remedios naturales', icon: 'cat-herbs.png',     photo: 'herbs.jpg' },
  { id: 'food',      en: 'Healthy Food & Drinks',         es: 'Alimentos y bebidas saludables',   icon: 'cat-food.png',      photo: 'food.jpg' },
  { id: 'menstrual', en: 'Menstrual & Intimate Care',     es: 'Cuidado menstrual e íntimo',       icon: 'cat-menstrual.png', photo: 'menstrual.jpg' },
  { id: 'ritual',    en: 'Home, Ritual & Wellbeing',      es: 'Hogar, ritual y bienestar',        icon: 'cat-ritual.png',    photo: 'ritual.jpg' },
  { id: 'living',    en: 'Home & Living',                 es: 'Hogar y decoración',               icon: 'cat-living.png',    photo: 'living.jpg' },
  { id: 'kids',      en: 'Kids & Family',                 es: 'Niños y familia',                  icon: 'cat-kids.png',      photo: 'kids.jpg' }
];
