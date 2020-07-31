var express = require('express');
var router = express.Router();
var usermodule = require("../module/User");
var bookmodule = require("../module/Book");
var fileusermodule = require("../module/fileUser");
var userbookModule = require("../module/fileBook");


//user
router.get('/', usermodule.getUser);
router.post('/:userid',usermodule.checkUExist,usermodule.addUser);
router.put('/:userid',usermodule.checkUExistence ,usermodule.updateUser);
router.delete('/:userid',usermodule.checkUExistence ,usermodule.deleteUser);




//book
router.get("/:userid/books", bookmodule.getBooks);
router.post("/:userid/books/:bookid",bookmodule.checkUBookExist ,bookmodule.addBooks);
router.put("/:userid/books/:bookid",bookmodule.checkUBookExistence, bookmodule.updateBooks);
router.delete("/:userid/books/:bookid",bookmodule.checkUBookExistence,bookmodule.deleteBook);
module.exports = router;

//file user

router.get("/userdata",fileusermodule.getUData);
router.post("/userdata/:userid",fileusermodule.checkfileUserExist,fileusermodule.addUserData);
router.put("/userdata/:userid",fileusermodule.checkfileUserExistence,fileusermodule.updateUserData);
router.delete("/userdata/:userid",fileusermodule.checkfileUserExistence,fileusermodule.deleteUserData);

//file books
router.get("/userdata/book/:userid",userbookModule.getUserBookData);
router.post("/userdata/book/:userid/:bookid",userbookModule.checkUBookExist,userbookModule.addUserBook);
router.put("/userdata/book/:userid/:bookid",userbookModule.checkUBookExistence,userbookModule.updateUserBook);
router.delete("/userdata/book/:userid/:bookid",userbookModule.checkUBookExistence,userbookModule.deleteUserBook);