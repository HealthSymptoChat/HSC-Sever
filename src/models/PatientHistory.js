import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
        user: { 
            type: mongoose.Schema.Types.ObjectId,
             ref: 'User', required: true 
            },
        address: {
            type: String,
            default: "",
        },
        gender: {
            type: String,
            default: "",
        },
        //Đã từng mắc bệnh hay không
        past_diseases: {
            type: String,
            default: "",
        },
        //Kết quả điều trị của bệnh trước đây
        past_disease_treatment: {
            type: String,
            default: "",
        },
        //Đã từng phẫu thuật hay không
        had_surgery: {
            type: String,
            default: "",
        },
        //Loại phẫu thuật
        surgery_type: {
            type: String,
            default: "",
        },
        //Tiếp xúc với chất độc hại hoặc làm việc trong môi trường nguy hiểm
        exposure_to_toxic_substances: {
            type: String,
            default: "",
        },
        //Đã từng đến vùng dịch tễ hay không
        visited_epidemic_areas: {
            type: String,
            default: "",
        },
        //Gia đình có ai từng mắc bệnh di truyền hay không
        family_genetic_disease: {
            type: String,
            default: "",
        },
        //Gia đình có ai từng mắc bệnh tim mạch hay không
        family_cardiovascular_disease: {
            type: String,
            default: "",
        },
        //Gia đình có ai từng mắc bệnh ác tính hay không
        family_malignant_disease: {
            type: String,
            default: "",
        },
        //Gia đình có ai từng mắc bệnh tự miễn hay không
        family_autoimmune_disease: {
            type: String,
            default: "",
        },
        //Có thói quen hút thuốc hay không
        uses_tobacco: {
            type: String,
            default: "",
        },
        //Có thói quen uống rượu hay không
        uses_alcohol: {
            type: String,
            default: "",
        },
        //Có thói quen sử dụng chất kích thích hay không
        uses_stimulants: {
            type: String,
            default: "",
        },
        //Có thường xuyên vận động hoặc luyện tập thể dục thể thao hay không
        exercises_regularly: {
            type: String,
            default: "",
        }
       

    }
);

export const PatientHistory = mongoose.model('PatientHistory', schema);