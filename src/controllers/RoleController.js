import RoleService from "../services/RoleService.js";

class RoleController {
    async createRole(req, res) {
        try {
            const role = await RoleService.createRole(req.body);
            res.status(200).json({
                status: 200,
                message: "success",
                data: role
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default new RoleController();