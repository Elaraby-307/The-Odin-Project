const db = require("../db/queries");


async function getUsernames(req, res) {
    const searchQuery = req.query.search || '';
    const usernames = await db.getAllUsers(searchQuery);
    console.log("Usernames: ", usernames);
    res.render("index", {usernames : usernames.map(user => user.username).join("  "), title : "usernames" })
}

async function createUsernameGet(req, res) {
    res.render("newGet", { title: "Create Username" });
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUser(username);
  res.redirect("/");
}


async function deleteAllUsers(req, res) {
    await db.deleteAllUsers();
    res.redirect("/");
}

module.exports = {
    getUsernames,
    createUsernameGet,
    createUsernamePost,
    deleteAllUsers
};
