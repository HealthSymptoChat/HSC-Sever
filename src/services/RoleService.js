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
    async updateRole(roleId, role) {
        return await Role.findByIdAndUpdate(roleId, role, {
            new: true
        });
    }
};

export default new RoleService();