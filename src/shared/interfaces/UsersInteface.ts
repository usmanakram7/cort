export enum userRoleEnum {
  Admin = "admin",
  Staff = "staff",
}

export interface UserInterface {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  roles: userRoleEnum[];
  cameras: string[];
  phoneNumber: string;
  createdAt: string;
  updatedAt: string;
  access_token: string;
}

export interface loginExtraMeta {
  deviceId: string;
  deviceName: string;
  deviceType: string;
  fcm: string;
}
