import admin from "firebase-admin";
import serviceAccount from "./../../sapper-blog-8c057-firebase-adminsdk-pvurz-fe407a0246.json"
import posts from './blog/_posts'

export async function get(req, res, next) {

  let db = admin.database()
  let dbRef = db.ref();
  await Promise.all(posts.map(post => {
    dbRef.child(post.slug).set(post)
  }))
  res.end("done")
}