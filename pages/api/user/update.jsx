
import executeQuery from "../../../utils/db";

export default function handler(req, res) {
  const query = "UPDATE tbl_user SET username=(?), password=(?), fullname=(?) WHERE user_id=(?)";
  const update = executeQuery({
    query: query,
    values: [
      req.body.username,
      req.body.password,
      req.body.fullname,
      req.body.user_id,
    ]
  });
  update
    .then((data) => {
      res.status(200).json({
        message: 'success',
        data: data
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'error',
        data: error
      });
    });
}