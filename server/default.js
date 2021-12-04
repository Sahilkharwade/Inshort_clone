import News from './modal/news.js';
import { data } from './constants/data.js';
const DefaultData = async () => {
  try {
    await News.deleteMany({}); // first we have to delete all data as every time we refresh below fun insert data into database
    await News.insertMany(data); // it push data to database
    console.log('Data imported Successfully');
  } catch (error) {
    console.log('error', error.message);
  }
};

export default DefaultData;
