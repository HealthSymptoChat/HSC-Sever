import { Package } from "../models/Package.js";

class PackageServices {
    async getPackageId(package_id) {
        try {
            const packageData = await Package.findOne({ package_id });
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
          const pkg = await Package.findOne({ _id: packageId });
         
          if (!user) {
            throw new Error("Package not found");
          }
          
          pkg.packageName = packageUpdate.packageName;
          pkg.description = packageUpdate.description;
          pkg.price = packageUpdate.price;
          pkg.duration = packageUpdate.duration;
        
          await pkg.save();
          return pkg;
        } catch (error) {
          throw error;
        }
      }

}

export default new PackageServices();