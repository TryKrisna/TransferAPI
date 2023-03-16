function customResponse(status,message,payload){
    const res = {
        code : status,
        requestDate: new Date(),
        message: message,
        payload: payload,
    }
    return res;
}

export default customResponse;