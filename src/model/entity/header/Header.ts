import * as HeaderProfileInterface from "./HeaderInterface";

export class HeaderProfileInf
  implements HeaderProfileInterface.HeaderProfileInterface
{
  id: number;
  profileImage: string;
  myName: string;
  todayView: number;
  viewChange: string;
  constructor(
    id: number,
    profileImage: string,
    myName: string,
    todayView: number,
    viewChange: string
  ) {
    this.id = id;
    this.profileImage = profileImage;
    this.myName = myName;
    this.todayView = todayView;
    this.viewChange = viewChange;
  }
}
