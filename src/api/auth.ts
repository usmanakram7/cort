import { AxiosPromise } from "axios";
import { LoginFormValidator } from "../shared/validators";
import { UserInterface } from "../shared/interfaces";
import { axiosInstance } from "./axiosinstance";

export class auth {
  static login(data: LoginFormValidator): AxiosPromise<UserInterface> {
    return axiosInstance({
      url: "/auth/login",
      method: "Post",
      data,
    });
  }
}
