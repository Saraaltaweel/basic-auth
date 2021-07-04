'use strict';

mudule.export=(req,res,next)=>{
    console.log('path:',req.path,'method:',req.method);
    next();

}