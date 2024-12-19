import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
export declare class StudentService {
    private studentsRepository;
    constructor(studentsRepository: Repository<Student>);
    create(createStudentDto: CreateStudentDto): Promise<Student>;
    findAll(): Promise<Student[]>;
    findOne(indexNo: number): Promise<Student>;
    update(indexNo: number, updateStudentDto: UpdateStudentDto): Promise<Student>;
    remove(indexNo: number): Promise<void>;
}
