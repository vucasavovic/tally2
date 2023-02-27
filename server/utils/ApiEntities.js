
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

    static success = function(payload){
        const status = new ApiResponseStatus(false,200,"Success!");
        return new ApiResponse(status,payload)
    }
    static error = function(code,message){
        const status = new ApiResponseStatus(true,code,message);
        return new ApiResponse(status)
    }
    static custom = function(statusCode,message,payload){
        const status = new ApiResponseStatus(true,statusCode,message);
        return new ApiResponse(status,payload)
    }
 
}


module.exports = { ApiResponse }