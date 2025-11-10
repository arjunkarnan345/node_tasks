export const authController = (req,res)=>{


    console.log(req.body);

    const{name,age} = req.body
   
      res.status(200).json({user:name,age:age,message:"yes message received"})
    


}
