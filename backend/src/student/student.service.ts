import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentsRepository: Repository<Student>,
  ) {}

  create(createStudentDto: CreateStudentDto): Promise<Student> {
    const student = this.studentsRepository.create(createStudentDto);
    return this.studentsRepository.save(student);
  }

  findAll(): Promise<Student[]> {
    return this.studentsRepository.find();
  }

  findOne(indexNo: number): Promise<Student> {
    return this.studentsRepository.findOne({ where: { indexNo } });
  }

  async update(indexNo: number, updateStudentDto: UpdateStudentDto): Promise<Student> {
    const student = await this.studentsRepository.preload({
      indexNo: indexNo,
      ...updateStudentDto,
    });
    if (!student) {
      throw new NotFoundException(`Student #${indexNo} not found`);
    }
    return this.studentsRepository.save(student);
  }

  async remove(indexNo: number): Promise<void> {
    const result = await this.studentsRepository.delete(indexNo);
    if (result.affected === 0) {
      throw new NotFoundException(`Student #${indexNo} not found`);
    }
  }
}
