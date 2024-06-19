import DashboardService from "../services/DashboardService.js";

class DashboardController {
  async getDashboard(req, res) {
    try {
        const dashboardData = await DashboardService.getDashboardData();
        // console.log(dashboardData);
        if(dashboardData) {
            res.status(200).json({status: 200, message: "success", data: dashboardData});
        } else {
            res.status(400).json({status: 400, message: "not found", data: {}});
        }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new DashboardController();