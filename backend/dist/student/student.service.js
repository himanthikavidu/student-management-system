"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const student_entity_1 = require("./entities/student.entity");
let StudentService = class StudentService {
    constructor(studentsRepository) {
        this.studentsRepository = studentsRepository;
    }
    create(createStudentDto) {
        const student = this.studentsRepository.create(createStudentDto);
        return this.studentsRepository.save(student);
    }
    findAll() {
        return this.studentsRepository.find();
    }
    findOne(indexNo) {
        return this.studentsRepository.findOne({ where: { indexNo } });
    }
    async update(indexNo, updateStudentDto) {
        const student = await this.studentsRepository.preload({
            indexNo: indexNo,
            ...updateStudentDto,
        });
        if (!student) {
            throw new common_1.NotFoundException(`Student #${indexNo} not found`);
        }
        return this.studentsRepository.save(student);
    }
    async remove(indexNo) {
        const result = await this.studentsRepository.delete(indexNo);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Student #${indexNo} not found`);
        }
    }
};
exports.StudentService = StudentService;
exports.StudentService = StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(student_entity_1.Student)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], StudentService);
//# sourceMappingURL=student.service.js.map