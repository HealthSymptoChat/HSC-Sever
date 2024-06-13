import PackageServices from "../services/PackageServices.js";

class PackageController {
  async getAllPackages(req, res, next) {
    try {
      const allPackages = await PackageServices.getAllPackages();
      res.status(200).json({
        status: 200,
        message: "success",
        data: allPackages
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
      next();
    }
  }

  async getPackageById(req, res, next) {
    try {
      const _id = req.body;
      const allPackages = await PackageServices.getPackageId(_id);
      res.status(200).json({
        status: 200,
        message: "success",
        data: allPackages
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
      next();
    }
  }

  async createPackage(req, res, next) {
    try {
      const packageData = req.body;
      const newPackage = await PackageServices.createPackage(packageData);
      res.status(200).json({
        status: 200,
        message: "success",
        data: newPackage
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
      next();
    }
  }
    async updatePackageById(req, res, next) {
        try {
          const { id } = req.params;
          const packageUpdate = req.body;
          const pkg = await PackageServices.updatePackageById(id, packageUpdate);
          res.status(200).json({
            status: 200,
            message: "success",
            data: pkg
        });
        } catch (error) {
          res.status(500).json({ error: error.message });
          next();
        }
      }


    }
export default new PackageController;