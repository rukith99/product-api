const router = require("express").Router();
let Product = require("../models/Product");

//create route to create a product
router.route("/").post((req,res) => {
    const title = req.body.title;
    const description = req.body.description;
    const category = req.body.category;
    const gender = req.body.gender;
    const price = Number(req.body.price);
    const images = req.body.images
    const sizes = req.body.sizes
    const colors = req.body.colors
    const dateAdded = req.body.dateAdded


    const newProduct = new Product({
        title,
        description,
        category,
        gender,
        price,
        images,
        sizes,
        colors,
        dateAdded
    })

    newProduct.save().then(() =>{
        res.json("Product added")
    }).catch((err) =>{
        console.log(err);
    })

})


//create route to view products 
//get all products
router.route("/").get((req,res) =>{
    //here we view all products find()
    Product.find().then((getproduct) =>{
        res.json(getproduct)
    }).catch((err) =>{
        console.log(err)
    })
})

//get only 1 product by id
router.route("/:id").get(async (req,res) =>{
    let productID = req.params.id;
    const product = await Product.findById(productID)
    .then((product) =>{
        res.status(200).send({status: "Product fetched", product})
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error while fetching", error: err.message})
    })
})


//update product by id
router.route("/:id").put(async (req,res) => {
    let productID = req.params.id;
    const{title, description, category, gender, price, images, sizes, colors, dateAdded} = req.body;

    const updateProduct = {
        title,
        description,
        category,
        gender,
        price,
        images,
        sizes,
        colors,
        dateAdded
    }

    const update = await Product.findByIdAndUpdate(productID,updateProduct).then(() =>{

    res.status(200).send({status:"Product updated"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error when Updating", error: err.message});
    })
})



//delete route 
router.route("/:id").delete(async (res,rep) =>{
    let productID = req.params.id;

    await Product.findByIdAndDelete(productID).then(() =>{
        res.status(200).send({status: "Product deleted"});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error when deleting", error: err.message});
    })
})

//export
module.exports = router;
