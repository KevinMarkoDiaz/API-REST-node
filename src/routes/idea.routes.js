import { Router } from "express";
const router = Router();

//Database connection

import { ObjectID } from "mongodb";
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


res.json(result.ops[0]);
});



router.get('/:id',async(req,res)=>{
const {id} = req.params;
const db = await connect();
const result = await db.collection('ideas').findOne( {_id: ObjectID(id)});

 res.json(result);
});


router.delete('/:id', async(req,res)=>{
    const {id} = req.params;
    const db = await connect();
    const result = await db.collection('ideas').findOneAndDelete({_id: ObjectID(id)});
    res.json(`message:La idea fue eliminada correctamente idea: ${id} ` + result
    
    );
});


router.put('/:id', async (req,res)=>{
const {id} = req.params;
const updateIdea = {
    tittle : req.body.tittle,
    description : req.body.description
}

const db = await connect();
const result = await db.collection('ideas').updateOne({_id: ObjectID(id) }
                , {$set: updateIdea});
res.json("tarea realizada");
});


export default router;