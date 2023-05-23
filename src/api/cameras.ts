import { AxiosPromise } from "axios";
import { AddNewCameraValidator } from "../shared/validators";
import { axiosInstance } from "./axiosinstance";
import { CamerasInterface } from "../shared/interfaces";

export class cameras {
  static create(data: AddNewCameraValidator): AxiosPromise<CamerasInterface> {
    return axiosInstance({
      url: "/feeds",
      method: "post",
      data,
    });
  }

  //
  static list(): AxiosPromise<CamerasInterface[]> {
    return axiosInstance({
      url: "/feeds",
      method: "get",
    });
  }

  //

  static deleteById(id: string): AxiosPromise<CamerasInterface> {
    return axiosInstance({
      url: `feeds/${id}`,
      method: "delete",
    });
  }
}
