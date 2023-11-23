import * as HeaderViewModelInterface from "../interface/HeaderViewModelInterface";
import { HeaderService } from "@/model/service/class/HeaderService";

class HeaderViewModel {
  static async getHeaderData(): Promise<HeaderViewModelInterface.GetHeaderViewdata> {
    try {
      const response = await HeaderService.getHeaderProfileTitle();

      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default HeaderViewModel;
