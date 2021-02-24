import {Router} from 'express';

const router = Router();


router.get('/', (req, res)=>{
    res.send('welcome to my application');
})


export default router;