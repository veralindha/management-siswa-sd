
import executeQuery from "../../utils/db";
import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';


export default function handler(req, res) {
  if(req.method === 'POST'){
    const query = 'SELECT * FROM tbl_user WHERE username=? AND password=?';
    const login = executeQuery({
      query: query,
      values: [req.body.username, req.body.password]
    });
    login
      .then((result) => {
        if(result.length > 0){
          const hashDigest = sha256(req.body.username + req.body.password);
          const hmacDigest = Base64.stringify(hmacSHA512(hashDigest, 'kmprt'));
          res.status(200).json({
            message: 'success',
            data: {
              sessionData: hmacDigest 
            }
          })
        } else {
          res.status(404).json({
            message: 'not found',
          })
        }
      })
  } else {
    res.status(400).json({
      message: 'bad request'
    });
  }
}
