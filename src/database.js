import MongoClient from 'mongodb';


export async function connect (){
   
   try {
       const client = await  MongoClient.connect('mongodb://localhost:27017', 
     {useUnifiedTopology: true})



    const db = client.db('bextmemo');
    
    return db;
   } catch (e) {
       console.log(e)
   }
   
    
};

