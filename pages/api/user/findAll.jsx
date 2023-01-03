
import executeQuery from "../../../utils/db";

const query = "SELECT * FROM tbl_user;"

export default function handler(req, res) {
  try {
    const result = executeQuery({
      query: query,
      values: ''
    });
    result
      .then((result) => {
        if(result.length > 0){
          res.status(200).json({
            message: 'success',
            data: result
          });
        } else {
          res.status(404).json({
            message: 'empty'
          });
        }
      })
      .catch((error) => {
        res.status(500).json({
          message: error
        })
      });
  } catch (error) {
    res.status(500).json({
      message: error
    });
  }
}