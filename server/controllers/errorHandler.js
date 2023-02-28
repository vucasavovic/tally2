const {ApiResponse} = require('../utils/ApiEntities');

module.exports = function(error,req,res,next){

    if(error instanceof ApiResponse){
        res.json(error)
    }else{
        
        
        if(error.parent.code == "ER_DUP_ENTRY"){
          return  res.json(ApiResponse.error('Duplicate entry attempt, failed!'));
        }else{
            res.json(ApiResponse.error('Something went wrong!'));
        }
         
        
    }   
}