export interface NetwrokServiceInterface {
  getRecievedConnection: () => Promise<getRecievedConnectionData[]>;
  getSentConnection: () => Promise<getSentConnectionData[]>;
  getMyConnection: () => Promise<getMyConnectionData[]>;
  postAccept: (id: number) => Promise<postAcceptOrDeclineData>;
  postDecline: (id: number) => Promise<postAcceptOrDeclineData>;
}

export interface getRecievedConnectionData {
  id: number;
  isAccepted: boolean;
  message: string | null;
  connectedUser: { id: number; name: string; profileImage: string };
}

export interface getSentConnectionData {
  id: number;
  isAccepted: boolean;
  message: string | null;
  connectedUser: { id: number; name: string; profileImage: string };
}

export interface getMyConnectionData {
  id: number;
  isAccepted: boolean;
  message: string | null;
  connectedUser: {
    id: number;
    name: string;
    profileImage: string;
  };
}

export interface postAcceptOrDeclineData {
  id: number;
}

export interface postAcceptDeclineData {
  id: number;
}

export interface ChangeUserId {
  id: number;
}
