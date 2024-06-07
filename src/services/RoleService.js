import { Role } from "../models/Role.js";

class RoleService {
    async createRole(role) {
        return await Role.create(role);
    }
    async getRoleById(roleId) {
        return await Role.findById(roleId);
    }
    async getRoleByName(roleName) {
        return await Role.findOne
        ({ name: roleName });
    }
};

export default new RoleService();