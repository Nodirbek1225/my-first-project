const express = require('express')
const app = express()
const port=8080

// Route to randomly give the name of a song from Frank Sinatra
app.get('/', (req, res) => {
  const songs = ['New York, New York', 'My Way', 'Fly Me to the Moon', 
  'Strangers in the Night', 'I Get a Kick Out of You', 'Come Fly With Me',
   'The Lady is a Tramp', 'All of Me', 'Summer Wind', "That's Life",
    'Love and Marriage', 'The Way You Look Tonight', 'Witchcraft', 
    "I've Got You Under My Skin", 'One for My Baby', 'Young at Heart',
     "Nice 'n' Easy", 'High Hopes', 'Chicago', 'Luck Be a Lady']
  const randomSong = songs[Math.floor(Math.random() * songs.length)]
  res.send(randomSong)
})

// Route to give Frank Sinatra's birth date
app.get('/birth_date', (req, res) => {
  res.send('December 12, 1915')
})

// Route to give Frank Sinatra's birth city
app.get('/birth_city', (req, res) => {
  res.send('Hoboken, New Jersey')
})

// Route to give all the names of Frank Sinatra's wives
app.get('/wives', (req, res) => {
  res.send('Nancy Barbato, Ava Gardner, Mia Farrow, Barbara Marx')
})

// Route to redirect to Frank Sinatra's picture
app.get('/picture', (req, res) => {
  res.redirect('https://en.wikipedia.org/wiki/Frank_Sinatra#/media/File:Frank_Sinatra2,_Pal_Joey.jpg')
})

// Route to print "Everybody can see this page"
app.get('/public', (req, res) => {
  res.send('Everybody can see this page')
})

// Route to be protected by HTTP Basic access authentication
app.get('/protected', (req, res) => {
  const auth = {login: 'admin', password: 'admin'}
  const b64auth = (req.headers.authorization || '').slipt(' ')
  const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':')

  if (login && password && login === auth.login && password === auth.password) {
    res.send('Welcome, authenticated client')
  } else {
    res.status(401).send('Not authorized')
  }
})

// Listen on port 8080
app.listen(8080, '0.0.0.0', () => {
  console.log('Server is listening on port 8080')
})