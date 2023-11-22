export interface NetworkRecievedConnection {
  id: number;
  isAccepted: boolean;
  message: string | null;
  connectedUser: { id: number; name: string; profileImage: string };
}

export interface NetworkSentConnection {
  id: number;
  isAccepted: boolean;
  message: string | null;
  connectedUser: { id: number; name: string; profileImage: string };
}

export interface NetworkMyConnectionInterface {
  id: number;
  isAccepted: boolean;
  message: string | null;
  connectedUser: {
    id: number;
    name: string;
    profileImage: string;
  };
}
