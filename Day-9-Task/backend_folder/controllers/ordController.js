//step-16 //async function use
export const createDatas = async(req,res)=>{

    //console.log(req.body);//step -17
   //step-36 
   try {
    const{ordplace,deliveryplace} = req.body
  //step-37
    //const datasinsert = await 
   } catch (error) {
    
    console.log("error show",error);
    
   }
}