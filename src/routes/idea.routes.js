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

const ideasingular = {

    tittle: req.body.tittle,
    description: req.body.description

};

const result = await db.collection('ideas').insertOne(ideasingular);

console.log(result);

res.json('creaste un dato');
});




export default router;