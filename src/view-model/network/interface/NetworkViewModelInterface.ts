export interface NetworkViewModelInterface {
  getRecievedConnection: () => Promise<NetworkRecievedInterface[]>;
  getSentConnection: () => Promise<NetworkSentInterface[]>;
  getMyConnection: () => Promise<NetworkMyConnectionInterface[]>;
}

export interface NetworkRecievedInterface {
  id: number;
  isAccepted: boolean;
  message: string | null;
  connectedUser: { id: number; name: string; profileImage: string };
}

export interface NetworkSentInterface {
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

export interface getProfileIdData {
  id: number;
}
