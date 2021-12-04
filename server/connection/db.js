import mongoose from 'mongoose';
const Connection = async () => {
  try {
    const URL = `mongodb://sahil:sahil@inshorts-shard-00-00.q7iuu.mongodb.net:27017,inshorts-shard-00-01.q7iuu.mongodb.net:27017,inshorts-shard-00-02.q7iuu.mongodb.net:27017/INSHORT_CLONE?ssl=true&replicaSet=atlas-by7yg7-shard-0&authSource=admin&retryWrites=true&w=majority`;
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log(`connection sucessfully with db`);
  } catch (error) {
    console.log(`Error while connecting with database`, error);
  }
};
export default Connection;
