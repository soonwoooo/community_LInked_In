import * as NetworkInterface from "./NetworkInterface";

export class NetworkRecievedConnectionImp
  implements NetworkInterface.NetworkRecievedConnection
{
  id: number;
  isAccepted: boolean;
  message: string | null;
  connectedUser: { id: number; name: string; profileImage: string };

  constructor(
    id: number,
    isAccepted: boolean,
    message: string | null,
    connectedUser: { id: number; name: string; profileImage: string }
  ) {
    this.id = id;
    this.isAccepted = isAccepted;
    this.message = message;
    this.connectedUser = connectedUser;
  }
}

export class NetworkSentConnectionImp
  implements NetworkInterface.NetworkSentConnection
{
  id: number;
  isAccepted: boolean;
  message: string | null;
  connectedUser: { id: number; name: string; profileImage: string };
  constructor(
    id: number,
    isAccepted: boolean,
    message: string | null,
    connectedUser: { id: number; name: string; profileImage: string }
  ) {
    this.id = id;
    this.isAccepted = isAccepted;
    this.message = message;
    this.connectedUser = connectedUser;
  }
}

export class NetwrokMyconnectionImp
  implements NetworkInterface.NetworkMyConnectionInterface
{
  id: number;
  isAccepted: boolean;
  message: string | null;
  connectedUser: { id: number; name: string; profileImage: string };
  constructor(
    id: number,
    isAccepted: boolean,
    message: string | null,
    connectedUser: { id: number; name: string; profileImage: string }
  ) {
    this.id = id;
    this.isAccepted = isAccepted;
    this.message = message;
    this.connectedUser = connectedUser;
  }
}
