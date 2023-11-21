import express from 'express'
import cors from 'cors'
import usersRouter from './api/users/users.routes';
import profilesRouter from './api/profiles/profiles.routes';
import moviesRouter from './api/movies/movies.routes';
import collectionsRouter from './api/collections/collections.routes';
import collectionMoviesRouter from './api/collectionMovies/collectionMovies.routes';


const app = express();
const port = process.env.PORT || 3001;

// Enable CORS
app.use(cors());

// Parse JSON bodies for this app
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">StreamStash API 🎬</h1>')
  })

app.use('/api/users', usersRouter);
app.use('/api/profiles', profilesRouter);
app.use('/api/movies', moviesRouter);
app.use('/api/collections', collectionMoviesRouter);
app.use('/api/collections', collectionsRouter);

app.listen(port, () => {
  console.log(`🎬 Server is running on http://localhost:${port}`);
});