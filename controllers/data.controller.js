const DataService = require("../services/data");
const asyncHandler = require("../utils/async.handler");

class DataController {
  constructor() {
    this.DataService = new DataService();
    this.addData = asyncHandler(this.addData.bind(this));
    this.updateData = asyncHandler(this.updateData.bind(this));
    this.getCount = asyncHandler(this.getCount.bind(this));
  }

  // Add data to table
  async addData(req, res) {
    const response = await this.DataService.addData(req.body);
    res.status(200).json(response);
  }

  // Update Data
  async updateData(req, res) {
    const response = await this.DataService.updateData(req.body, req.query);
    res.status(200).json(response);
  }

  // Get count for add and update requests
  async getCount() {
    const response = await this.DataService.getCount();
    res.status(200).json(response);
  }
}

module.exports = DataController;
