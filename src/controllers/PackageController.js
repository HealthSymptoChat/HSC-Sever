import PackageServices from "../services/PackageServices.js";

class PackageController {
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