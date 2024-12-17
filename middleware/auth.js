// const jwt = require('jsonwebtoken');
// const authenticateToken = (req, res ,next) =>{
//     const token = req.header('authorization')?.split(' ')[1];
//     if(!token) return  res.status(403).json({mesage:'Access denied'})

//         jwt.verify(token,'your_jwt-seret-key',(err,user)=>{
//             if(err) return res.status(403).json({message: 'Invalid token'})
//                 req.user = user;
//             next();
//         })
// }

// module.exports = authenticateToken;