import * as NetworkViewModelInterface from "../interface/NetworkViewModelInterface";
import { NetworkService } from "@/model/service/class/NetworkService";

export class NetworkViewModel {
  static getRecievedConnection(): Promise<
    NetworkViewModelInterface.NetworkRecievedInterface[]
  > {
    try {
      const response = NetworkService.getRecievedConnection();
      return response;
    } catch (error) {
      console.error("Error getting profile title data:", error);
      throw error;
    }
  }

  static getSentConnection(): Promise<
    NetworkViewModelInterface.NetworkSentInterface[]
  > {
    try {
      const response = NetworkService.getSentConnection();
      return response;
    } catch (error) {
      console.error("Error getting profile title data:", error);
      throw error;
    }
  }
  static getMyConnection(): Promise<
    NetworkViewModelInterface.NetworkMyConnectionInterface[]
  > {
    try {
      const response = NetworkService.getMyConnection();

      return response;
    } catch (error) {
      console.error("Error getting profile title data:", error);
      throw error;
    }
  }

  static async RecievedAccept(id: number) {
    try {
      const response = await NetworkService.postAccept(id);
      if (response.status >= 200 && response.status < 300) {
        const result = await this.getRecievedConnection();
        const connected = await this.getMyConnection();
        return {
          received: result,
          connected: connected,
        };
      }
    } catch (error) {
      return "wrong";
    }
  }

  static async SentDecline(id: number) {
    try {
      const response = await NetworkService.postSentDecline(id);

      if (response.status >= 200 && response.status < 300) {
        const result = await this.getSentConnection();

        return result;
      }
    } catch (error) {
      return "wrong";
    }
  }

  static async RecievedDecline(id: number) {
    try {
      const response = await NetworkService.postRecievedDecline(id);

      if (response.status >= 200 && response.status < 300) {
        const result = await this.getRecievedConnection();

        return result;
      }
    } catch (error) {
      return "wrong";
    }
  }

  static getProfileId(
    id: number
  ): Promise<NetworkViewModelInterface.getProfileIdData> {
    try {
      const response = NetworkService.getProfileId(id);
      return response;
    } catch (error) {
      console.error("Error getting profile title data:", error);
      throw error;
    }
  }
}

export default NetworkViewModel;
