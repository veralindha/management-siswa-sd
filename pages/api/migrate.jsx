
import Migrate from "../../utils/migrate";

export default function handler(req, res) {
  try {
    const migrate = Migrate();
    res.status(200).json({
      message: "Migration completed!!"
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occured: " + error
    });
  }
}