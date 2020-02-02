import admin from "firebase-admin"
import serviceAccount from './../../../../sapper-blog-8c057-firebase-adminsdk-pvurz-fe407a0246.json'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sapper-blog-8c057.firebaseio.com"
});
export async function put(req, res, next) {
  const { slug } = req.params;
  let { title, content, password } = req.body
  if (password === "bla_bla_bla") {
    let db = admin.database()
    let ref = db.ref().child(slug)
    await ref.update({ html: content, title: title })
    res.json({ state: "ok" })
  }
  else {
    res.json({ state: "password wrong" })
  }
}

export async function post(req, res, next) {
  const { slug } = req.params;
  let { title, content, password } = req.body
  if (password === "bla_bla_bla") {
    let db = admin.database()
    let ref = db.ref().child(slug)
    await ref.set({ html: content, title: title, slug: slug })
    res.json({ state: "ok" })
  }
  else {
    res.json({ state: "password wrong" })
  }
}