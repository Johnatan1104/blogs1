const {listarBlogService}= require('../service/blogService')
let listarBlog = async(req,res) => {
    try{
        
        let respuesta= await listarBlogService();
        res.json(respuesta);

    }
    catch(e){
        console.log(e)

    }
}
module.exports={listarBlog}