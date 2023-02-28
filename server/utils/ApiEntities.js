
class ApiResponseStatus{
    constructor(error,code,message){
        this.error = error
        this.code = code,
        this.message = message
    }
}

class ApiResponse{

    constructor(status,payload=null){
        this.status=  status,
        this.payload= payload
    }

    static success = function(payload=null){
        const status = new ApiResponseStatus(false,200,"Success!");
        return new ApiResponse(status,payload)
    }
    static error = function(message){
        const status = new ApiResponseStatus(true,500,message);
        return new ApiResponse(status)
    }
    static custom = function(statusCode,message,payload=null){
        const status = new ApiResponseStatus(true,statusCode,message);
        return new ApiResponse(status,payload)
    }
 
}

class ApiError{
    constructor(){
        
    }
}


module.exports = { ApiResponse, ApiError }