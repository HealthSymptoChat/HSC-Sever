import { Package } from "../models/Package.js";

class PackageService {
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
}

export default new PackageService();