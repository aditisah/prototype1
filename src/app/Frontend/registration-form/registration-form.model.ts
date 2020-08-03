export class StudentDetails {
  public college: string;
  public name: string;
  public batch: string;
  public branch: string;

  constructor(college: string, name: string, batch: string, branch: string){
    this.college = college;
    this.name = name;
    this.batch = batch;
    this.branch = branch;
  }
}

