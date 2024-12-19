import { IsString, IsDateString, IsNumber } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  name: string;

  @IsDateString()
  dob: string;

  @IsNumber()
  gpa: number;
}