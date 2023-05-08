import { getDatabase, ref, update, get, set } from "firebase/database";
import { auth, database } from "../config/firebaseConfig";

class Project {
  static addProject(userId, projectData) {
    try {
      const db = getDatabase();
      set(ref(db, "projects/"), projectData);
    } catch (err) {
      console.log(err);
    }
  }
}

export default Project;
