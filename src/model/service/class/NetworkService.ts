import * as NetworkInterface from "@/model/entity/network/NetworkInterface";
import * as NetworkServiceInterface from "../interface/NetworkServiceInterface";
import * as Network from "@/model/entity/network/Network";
import axios from "axios";
import { AxiosResponse } from "axios";
import BASE_API from "@/model/config";

export class NetworkService {
  static async getRecievedConnection(): Promise<
    NetworkInterface.NetworkRecievedConnection[]
  > {
    const token = localStorage.getItem("token");
    const response: AxiosResponse<
      NetworkServiceInterface.getRecievedConnectionData[]
    > = await axios.get(`/connection/received`, {
      baseURL: `${BASE_API}`,
      headers: {
        Authorization: token,
      },
    });
    const result = response.data.map(
      (data) =>
        new Network.NetworkRecievedConnectionImp(
          data.id,
          data.isAccepted,
          data.message,
          data.connectedUser
        )
    );
    return result;
  }

  static async getSentConnection(): Promise<
    NetworkInterface.NetworkSentConnection[]
  > {
    const token = localStorage.getItem("token");
    const response: AxiosResponse<
      NetworkServiceInterface.getSentConnectionData[]
    > = await axios.get(`/connection/sent`, {
      baseURL: `${BASE_API}`,
      headers: {
        Authorization: token,
      },
    });
    const result = response.data.map(
      (data) =>
        new Network.NetworkSentConnectionImp(
          data.id,
          data.isAccepted,
          data.message,
          data.connectedUser
        )
    );
    return result;
  }

  static async getMyConnection(): Promise<
    NetworkInterface.NetworkMyConnectionInterface[]
  > {
    const token = localStorage.getItem("token");
    const response: AxiosResponse<
      NetworkServiceInterface.getMyConnectionData[]
    > = await axios.get(`/connection/connected`, {
      baseURL: `${BASE_API}`,
      headers: {
        Authorization: token,
      },
    });

    const result = response.data.map(
      (data) =>
        new Network.NetwrokMyconnectionImp(
          data.id,
          data.isAccepted,
          data.message,
          data.connectedUser
        )
    );

    return result;
  }

  static async postAccept(
    id: number
  ): Promise<AxiosResponse<NetworkServiceInterface.postAcceptOrDeclineData>> {
    const token = localStorage.getItem("token");
    const response: AxiosResponse<NetworkServiceInterface.postAcceptOrDeclineData> =
      await axios.patch(
        `/connection/${id}`,
        {},

        {
          baseURL: `${BASE_API}`,
          headers: {
            Authorization: token,
          },
        }
      );

    return response;
  }

  static async postSentDecline(
    id: number
  ): Promise<AxiosResponse<NetworkServiceInterface.postAcceptOrDeclineData>> {
    const token = localStorage.getItem("token");
    const response: AxiosResponse<NetworkServiceInterface.postAcceptOrDeclineData> =
      await axios.delete(`/connection/${id}`, {
        baseURL: `${BASE_API}`,
        headers: {
          Authorization: token,
        },
      });
    return response;
  }

  static async postRecievedDecline(
    id: number
  ): Promise<AxiosResponse<NetworkServiceInterface.postAcceptDeclineData>> {
    const token = localStorage.getItem("token");
    const response: AxiosResponse<NetworkServiceInterface.postAcceptDeclineData> =
      await axios.delete(`/connection/${id}`, {
        baseURL: `${BASE_API}`,
        headers: {
          Authorization: token,
        },
      });
    return response;
  }

  static async getProfileId(
    userId: number
  ): Promise<NetworkServiceInterface.ChangeUserId> {
    const token = localStorage.getItem("token");
    const response: AxiosResponse<NetworkServiceInterface.ChangeUserId> =
      await axios.get(`/profile/user/${userId}`, {
        baseURL: `${BASE_API}`,
        headers: {
          Authorization: token,
        },
      });
    const result = response.data;

    return result;
  }
}
