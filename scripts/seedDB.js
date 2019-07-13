const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks');
const bookSeed = {
  authors: ['Frank Herbert'],
  description:
    "A deluxe hardcover edition of Frank Herbert's epic masterpiece--a triumph of the imagination and one of the bestselling science fiction novels of all time. This deluxe hardcover edition of Dune includes: · An iconic new cover · Stained edges and fully illustrated endpapers · A beautifully designed poster on the interior of the jacket · A redesigned world map of Dune · An updated Introduction by Brian Herbert Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the \"spice\" melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for... When House Atreides is betrayed, the destruction of Paul's family will set the boy on a journey toward a destiny greater than he could ever have imagined. And as he evolves into the mysterious man known as Muad'Dib, he will bring to fruition humankind's most ancient and unattainable dream. A stunning blend of adventure and mysticism, environmentalism and politics, Dune won the first Nebula Award, shared the Hugo Award, and formed the basis of what is undoubtedly the grandest epic in science fiction.",
  image:
    'http://books.google.com/books/content?id=IN-SwwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
  link:
    'http://books.google.com/books?id=IN-SwwEACAAJ&dq=dune&hl=&source=gbs_api',
  title: 'Dune'
};

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
