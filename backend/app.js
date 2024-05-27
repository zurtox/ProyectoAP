import express from 'express'
import cors from 'cors'
const app = express();
import router from './routes/cartRoutes.js'
// const cors = require('cors');


// Permitir conexión a la base de datos
app.use(cors());

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

app.use('/', router);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


export {app}