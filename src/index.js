import '@babel/polyfill';
import { async } from 'regenerator-runtime';
import app from './server';

import {connect} from './database' ;

 async function main(){

        await app.listen(app.get('port')); 
        console.log('Server escuchando en puesrto ' + app.get('port'));
        
        await connect(); 
};

main();
