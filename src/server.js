import express, {json} from 'express';

const app = express();

//Settings
app.set('port', process.env.PORT || 3000 );


//middleweares

app.use(json());

//Routes

import IndexRoutes from "./routes/index.routes";
import IdeaRoutes from "./routes/idea.routes";
//apliccion de las rutas

app.use(IndexRoutes);
app.use('/idea', IdeaRoutes); 

export default app;