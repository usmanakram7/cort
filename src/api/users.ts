import { AxiosPromise } from "axios";
import { AddNewUserValidator } from "../shared/validators";
import { UserInterface } from "../shared/interfaces";
import { axiosInstance } from "./axiosinstance";

export class users {
  static create(data: AddNewUserValidator): AxiosPromise<UserInterface> {
    return axiosInstance({
      url: "/users",
      method: "post",
      data,
    });
  }

  static list(): AxiosPromise<UserInterface[]> {
    return axiosInstance({
      url: "/users",
      method: "get",
    });
  }
}
