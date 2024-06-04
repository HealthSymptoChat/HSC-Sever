import { Package } from "../models/Package.js";

class PackageServices {
    async getPackageId(package_id) {
        try {
            const packageData = await Package.findOne({ _id: package_id });
            if (!packageData) {
                throw new Error("Invalid package_id");
            }
            return packageData;
        }
        catch (error) {
            throw error;
        }
    }

    async updatePackageById(packageId, packageUpdate) {
        try {
          const pkg = await Package.findOneAndUpdate({ _id: packageId }, { $set: packageUpdate },{ new: true });
         
          if (!pkg) {
            throw new Error("Package not found");
          }
        
          await pkg.save();
          return pkg;
        } catch (error) {
          throw error;
        }
      }

}

export default new PackageServices();