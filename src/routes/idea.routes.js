import { Router } from "express";
const router = Router();

//Database connection


import { connect } from "../database";

router.get('/', async (req,res) => {


const db =    await connect();
const result = await db.collection('ideas').find({}).toArray();
res.send(result);

});

router.post('/', async(req,res)=>{
const db =    await connect();
res.send('creaste un dato')
});




export default router;