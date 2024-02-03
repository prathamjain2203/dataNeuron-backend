const HttpException = require("../errors/httpException");
const Count = require("../models/count");
const Data = require("../models/data");
const validateData = require("../validators/data.validator");

class DataService {
  constructor() {}

  async addData(body) {
    let count = await Count.findOne();

    // Incrementing the add counter by 1
    count = {
      ...count,
      addCount: count + 1,
    };
    await count.save();

    // validating the req body and throwing the error if fails
    const error = validateData(body);
    if (error) {
      throw new HttpException(400, error.details[0].message);
    }

    // Adding the data in table
    const data = await Data.create(body);
    +8;
    return {
      message: "Data created successfully",
      data: data,
    };
  }

  async getAllData() {
    const data = await Data.find();
    return {
      data,
    };
  }

  async updateData(body, query) {
    let count = await Count.findOne();

    // Incrementing the update counter by 1
    count = {
      ...count,
      updateCount: count + 1,
    };
    await count.save();
    const { id } = query;
    let data = await Data.findOne({ _id: id });
    if (!data) {
      throw new HttpException(400, "Wrong ID");
    }

    const error = validateData(body);
    if (error) {
      throw new HttpException(400, error.details[0].message);
    }
    data = body;

    await data.save();
    return {
      message: "Data saved successfully",
      data: body,
    };
  }

  async getCount() {
    const count = await Count.findOne();
    return {
      count,
    };
  }
}

module.exports = DataService;
