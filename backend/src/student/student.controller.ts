// src/students/students.controller.ts

import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('students')
export class StudentController {
  constructor(private readonly studentsService: StudentService) {}

  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }

  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  @Get(':indexNo')
  findOne(@Param('indexNo') indexNo: string) {
    return this.studentsService.findOne(+indexNo);
  }

  @Put(':indexNo')
  update(@Param('indexNo') indexNo: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentsService.update(+indexNo, updateStudentDto);
  }

  @Delete(':indexNo')
  remove(@Param('indexNo') indexNo: string) {
    return this.studentsService.remove(+indexNo);
  }
}
