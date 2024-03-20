const Department = require("../models/Department");

module.exports = class DepartmentController {
    static async addDepartment(req, res) {
        const { name } = req.body;

        const nome = name;

        if(!name) {
            return res.status(422).json({message: "O nome é obrigatório!"});
        }

        const department = new Department({
            name: nome
        });

        try {
            await department.save();
            res.status(201).json({department});
        } catch (error) {
            res.status(500).json({message: "Erro ao cadastrar o departamento!"});
        }
    }

    static getDepartments(req, res) {
        Department.find({}).then((result) =>{
            res.status(200).json({result});
        });
    }
}