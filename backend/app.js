import express from 'express'
import cors from 'cors'
const app = express();

// Import Routes
import router from './routes/cartRoutes.js'

import contentXPlatformRoutes from './routes/contentXPlatformRoutes.js';
import documentalRoutes from './routes/documentalRoutes.js';
import enumRoutes from './routes/enumRoutes.js';
import episodeRoutes from './routes/episodeRoutes.js';
import favoriteMovieRoutes from './routes/favoriteMovieRoutes.js';
import movieParticipantRoutes from './routes/movieParticipantRoutes.js';
import nationalityRoutes from './routes/nationalityRoutes.js';
import paymentMethodRoutes from './routes/paymentMethodRoutes.js';
import personHolderRoutes from './routes/personHolderRoutes.js';
import personRoutes from './routes/personRoutes.js';
import personxPersonHolderRoutes from './routes/personxPersonHolderRoutes.js';
import photoRoutes from './routes/photoRoutes.js';
import platformRoutes from './routes/platformRoutes.js';
import purchaseContentRoutes from './routes/purchaseContentRoutes.js';
import purchaseRoutes from './routes/purchaseRoutes.js';
import recentlyViewedRoutes from './routes/recentlyViewedRoutes.js';
import recordRoutes from './routes/recordRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import seasonRoutes from './routes/seasonRoutes.js';
import serieRoutes from './routes/serieRoutes.js';
import userRoutes from './routes/userRoutes.js';

// Permitir conexión a la base de datos
app.use(cors());

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

// Routes
app.use('/nombreJS/nombreFuncion', router);

app.use('/', movieParticipantRoutes);
app.use('/', nationalityRoutes);
app.use('/', paymentMethodRoutes);
app.use('/', personHolderRoutes);
app.use('/', personRoutes);
app.use('/', personxPersonHolderRoutes);
app.use('/', photoRoutes);
app.use('/', platformRoutes);
app.use('/', purchaseContentRoutes);
app.use('/', purchaseRoutes);
app.use('/', recentlyViewedRoutes);
app.use('/', recordRoutes);
app.use('/', reviewRoutes);
app.use('/', seasonRoutes);
app.use('/', serieRoutes);
app.use('/', userRoutes);
app.use('/', favoriteMovieRoutes);
app.use('/', episodeRoutes);
app.use('/', enumRoutes);
app.use('/', documentalRoutes);
app.use('/', contentXPlatformRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


export {app}