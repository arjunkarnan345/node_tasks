import userModels from "../models/user.js";

export const createDatas =  async(req,res)=>{
    console.log(req.body);
    
    try {
        //console.log(req.body);

        const {studentname,address} = req.body

        const datastore =await userModels.create({studentname,address})
        
        res.status(201).json({msg:"Datas saved Sucessfully",
            data:datastore
        })

    } catch (error) {
        console.log('error',error)
         res.status(201).json({msg:"Datas not saved ",
            error:error
        })
    }
}