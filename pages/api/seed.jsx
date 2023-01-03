
import Seed from "../../utils/seeder";

export default function handler(req, res){
  try {
    const seed = Seed();
    res.status(200).json({
      message: "Seeding completed!!"
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occured: " + error
    });
  }
}
