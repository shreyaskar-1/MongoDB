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
    const result = await Test.find({age:21})
    .select({name:1})
    .limit(1);
    console.log(result);
  }catch(err){
    console.log(err);
  }
}
// readDocument();




