import { ProfileInterface } from "./ProfileInterface";

export class Profile implements ProfileInterface {
  id: number;
  message?: string;
  category?: string;
  data?: Data[];

  constructor(id: number, message: string, category: string, data: Data[]) {
    this.id = id;
    this.message = message;
    this.category = category;
    this.data = data;
  }
}

// Education 데이터를 나타내는 인터페이스 정의
export interface Data {
  imgSrc: string;
  title: string;
  titleSub: string;
  periodStart: number;
  periodEnd: number;
  detail: string;
  id: number;
  workSpace: string;
}
