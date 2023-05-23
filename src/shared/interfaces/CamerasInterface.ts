export enum TransportEnum {
  Udp = "udp",
  Tcp = "tcp",
}

export enum ApplicationProtocolEnum {
  Rtsp = "rtsp",
  Rtmp = "rtmp",
  File = "file",
}

export interface CamerasInterface {
  id: string;
  name: string;
  address: string;
  path: string;
  port: string;
  transport_protocol: TransportEnum;
  application_protocol: ApplicationProtocolEnum;
  username: string;
  password: string;
  make: string;
  model: string;
  pulse_index: number;
}
