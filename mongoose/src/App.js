const mongoose = require("mongoose");

// connection creation and creating a new db if not already present
mongoose.connect("mongodb://localhost:27017/latest")
  .then(() => console.log("Connection Successful..."))
  .catch((err) => console.log(err));


  // schema
  // it defies the structure of the document
  // default values, validators , etc.

  const testSchema = new mongoose.Schema ({
    name:{
      type: String,
      required: true
    },
    age:Number,
    profile:String,
    createdAt:{
      type:Date,
      default:Date.now
    }
  })  

  // A Mongoose Model Is a Wrapper on the Mongoose schema.
  // A Mongoose Schema defines the structure of the document ,
  // default values , validators , etc. , wheras a mongoose model provides an interface to the database for creating , querying , updating , deleting the records.

  const Test = new mongoose.model("Test",testSchema);

// create document or insert

const createDocument = async() => {
  try{
    const testDocument = new Test ({
      name:"Shreyaskar",
      age:21,
      profile:"Dev Ops"
    })
    const testtDocument = new Test ({
      name:"lakshya",
      age:24,
      profile:"Front End Developer"
    }) 
    const testtttDocument = new Test ({
      name:"Shubham",
      age:28,
      profile:"Back End Developer"
    })
    const testttttDocument = new Test ({
      name:"Arnav",
      age:27,
      profile:"Web Designer"
    })
  const result = await Test.insertMany([testDocument,testtDocument,testtttDocument,testttttDocument]);
  console.log(Test);
  }catch(err){
    console.log(err);
  }
}

// createDocument();

// read document and querying in it
const readDocument = async() => {
  try{
    const result = await Test
    // using logical operator in querying
    // or operator performs logicalor operation on an array of two or more expression and selects the documents that satisfy at keast one of the expression.
    // .find({
    //   $or: [
    //     { profile: { $in: [ "Web Designer"] } }
    //     , { age: { $gt: 20 } }
    //   ]
    // })

    // and operator 
    // .find({
    //   $and: [
    //     { profile: { $in: [ "Web Designer", "Full Stack Developer"] } }
    //     , { age: { $gt: 20 } }
    //   ]
    // })
    
    // nor opertaor
    .find({
      $nor: [
        { profile: { $in: [ 'Full Stack Developer', 'Web Designer'] } }
        , { age: { $gt: 30 } }
      ]
    })

    // using count : used to count the document of the database.
    // .countDocuments()

    // sort method
    .sort({name:1})

    // using in operator that gives output if it matches any value specified in th array
    // we can also use nin for not in 
    // .find({profile:{$in:["Full Stack Developer", "Web Designer"]}})

    // gt refers to greater than and if you put and e it denotes equal to  . also it is same for less than
    // .find({age:{$gte:22}})

    // used to normally read the data from database 
    // .find({age:21}) 

    // select is used to select only one field of the whole databse
    // .select({name:1})

    // limit helps to put an limit to the database fields
    // .limit(1);

    console.log(result);
  }catch(err){
    console.log(err);
  }
}
// readDocument();

// Updating the Document using updateOne or updateMany
// we can also use findByIdAndUpdate by putting useFindAndModify to false .
const updateDocument = async (_id) =>{
  try{
    const res = await Test.findByIdAndUpdate({_id},{$set:{name:"Lakshya"}},
      {
        new:true
      }
    );
    console.log(res);
  }catch(err){
    console.log(err);
  }
}
updateDocument("666de1fa98a39f3423781697")




