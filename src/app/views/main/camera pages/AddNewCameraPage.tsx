import React, { useState } from "react";
import { AddNewCameraValidator } from "../../../../shared/validators/AddNewCameraValidator";
import { useFormik } from "formik";
import { FormikValidator } from "../../../../shared/utility";
import { FormikErrorMessage } from "../../../components/FormikErrorMessage";
import { ApplicationProtocolEnum } from "../../../../shared/interfaces";
import { API } from "../../../../api";

const AddNewCameraPage = (): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");

  const handleDivClick = (value) => {
    setSelectedOption(value);
  };
  const handleDivClick2 = (value) => {
    setSelectedOption2(value);
  };

  // const handleAnotherDivClick = (value) => {
  //   setSelectedOption(value);
  // };

  const NewCameraFormik = useFormik<AddNewCameraValidator>({
    initialValues: {
      name: "",
      password: "",
      address: "",
      model: "",
      port: "",
      make: "",
      username: "",
      path: "",
      transport_protocol: "",
      application_protocol: "",
      pulse_index: null,
    },
    onSubmit: (values) => {
      console.log("Add New Camera Values ==>", values);
      API.cameras
        .create(values)
        .then((response) => {
          console.log(response, "success!");
        })
        .catch((error) => {
          console.error(error);
        });
    },

    validate: FormikValidator.validator(AddNewCameraValidator),
  });

  const CustomRadio = ({ name, id, value, label }) => (
    <label
      htmlFor={id}
      className={`border cursor-pointer rounded-[10px]  font-medium text-[14px] mt-[9px] flex py-[18px] px-[16px] items-center justify-between ${
        NewCameraFormik.values.transport_protocol === value
          ? "border-2 border-[#7D3519] "
          : "border border-[#D8DBDD] "
      }`}
    >
      <p
        className={`text-[14px] leading-[140%] font-normal ${
          NewCameraFormik.values.transport_protocol === value
            ? "text-[#7D3519] font-medium"
            : "text-[#9EA6A9] "
        }`}
      >
        {label}
      </p>

      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={NewCameraFormik.values.transport_protocol === value}
        onChange={NewCameraFormik.handleChange}
        onBlur={NewCameraFormik.handleBlur}
        className="hidden"
      />

      <span
        className={`w-5 h-5 border border-gray-400 rounded-full flex items-center justify-center  ${
          NewCameraFormik.values.transport_protocol === value
            ? "bg-[#7D3519]"
            : "bg-white"
        }`}
      >
        {NewCameraFormik.values.transport_protocol === value && (
          <div className="w-4 h-4 border-2 border-white bg-[#7D3519] rounded-full m-auto">
            <span className="bg-[#7D3519] w-2 h-2"></span>
          </div>
        )}
      </span>
    </label>
  );

  const CustomRadio2 = ({ name, id, value, label }) => (
    <label
      htmlFor={id}
      className={`border cursor-pointer rounded-[10px]  font-medium text-[14px] mt-[9px] flex py-[18px] px-[16px] items-center justify-between ${
        NewCameraFormik.values.application_protocol === name
          ? "border-2 border-[#7D3519] "
          : "border border-[#D8DBDD] "
      }
      }`}
    >
      <p
        className={`text-[14px] leading-[140%] font-normal ${
          NewCameraFormik.values.application_protocol === name
            ? "text-[#7D3519] font-medium"
            : "text-[#9EA6A9] "
        }`}
      >
        {label}
      </p>

      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={NewCameraFormik.values.application_protocol === value}
        onChange={NewCameraFormik.handleChange}
        onBlur={NewCameraFormik.handleBlur}
        className="hidden"
      />

      <span
        className={`w-5 h-5 border border-gray-400 rounded-full flex items-center justify-center  ${
          NewCameraFormik.values.application_protocol === value
            ? "bg-[#7D3519]"
            : "bg-white"
        }`}
      >
        {NewCameraFormik.values.application_protocol === value && (
          <div className="w-4 h-4 border-2 border-white bg-[#7D3519] rounded-full m-auto">
            <span className="bg-[#7D3519] w-2 h-2"></span>
          </div>
        )}
      </span>
    </label>
  );

  return (
    <div className="w-full h-[100%] bg-white rounded-10px p-[20px]">
      <div className="flex gap-1">
        <p className="text-[#0163E0] underline leading-[150%] font-medium text-[16px]">
          Cameras
        </p>
        <span className="textb">/</span>
        <p className="text-[#0163E0] underline leading-[150%] font-medium text-[16px]">
          Add New Camera
        </p>
      </div>

      <h1 className="mt-[24px] text-[24px] font-semibold leading-[150%] textb">
        Add New Camera
      </h1>
      <h1 className="mt-[24px] text-[16px] font-semibold leading-[150%] textb">
        Transport Protocol
      </h1>

      <div className=" w-full overflow-auto">
        <form action="" onSubmit={NewCameraFormik.handleSubmit}>
          <div>
            <div className="grid grid-cols-2 gap-[10px] ">
              <div onClick={() => handleDivClick("udp")}>
                <CustomRadio
                  name="transport_protocol"
                  id="udp"
                  value="udp"
                  label="UDP"
                />
              </div>
              <div onClick={() => handleDivClick("tcp")}>
                <CustomRadio
                  name="transport_protocol"
                  id="tcp"
                  value="tcp"
                  label="TCP"
                />
                <FormikErrorMessage
                  formik={NewCameraFormik}
                  name="transport_protocol"
                  render={(error) => (
                    <span className="error mt-1 text-rose-500">{error}</span>
                  )}
                />
              </div>
            </div>
            <h1 className="mt-[24px] text-[16px] font-semibold leading-[150%] textb">
              Application Protocol
            </h1>
            <div className="grid grid-cols-3 gap-[10px] ">
              <div onClick={() => handleDivClick2("rtsp")}>
                <CustomRadio2
                  name="application_protocol"
                  id="rtsp"
                  value="rtsp"
                  label="RTSP"
                />
              </div>
              <div onClick={() => handleDivClick2("rtmp")}>
                <CustomRadio2
                  name="application_protocol"
                  id="rtmp"
                  value="rtmp"
                  label="RTMP"
                />
              </div>
              <div onClick={() => handleDivClick2("file")}>
                <CustomRadio2
                  name="application_protocol"
                  id="file"
                  value="file"
                  label="FILE"
                />
                <FormikErrorMessage
                  formik={NewCameraFormik}
                  name="application_protocol"
                  render={(error) => (
                    <span className="error mt-1 text-rose-500">{error}</span>
                  )}
                />
              </div>
            </div>
            <hr className="my-[24px]" />
            <div className="grid grid-cols-2 gap-5">
              <div>
                <input
                  className="border rounded-md py-5 px-4 w-full"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  onChange={NewCameraFormik.handleChange}
                  onBlur={NewCameraFormik.handleBlur}
                />
                <FormikErrorMessage
                  formik={NewCameraFormik}
                  name="name"
                  render={(error) => (
                    <span className="error mt-1 text-rose-500">{error}</span>
                  )}
                />
              </div>
              <div>
                <input
                  className="border rounded-md py-5 px-4 w-full"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={NewCameraFormik.handleChange}
                  onBlur={NewCameraFormik.handleBlur}
                />
                <FormikErrorMessage
                  formik={NewCameraFormik}
                  name="password"
                  render={(error) => (
                    <span className="error mt-1 text-rose-500">{error}</span>
                  )}
                />
              </div>
              <div>
                <input
                  className="border rounded-md py-5 px-4 w-full"
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Address"
                  onChange={NewCameraFormik.handleChange}
                  onBlur={NewCameraFormik.handleBlur}
                />
                <FormikErrorMessage
                  formik={NewCameraFormik}
                  name="address"
                  render={(error) => (
                    <span className="error mt-1 text-rose-500">{error}</span>
                  )}
                />
              </div>
              <div>
                <input
                  className="border rounded-md py-5 px-4 w-full"
                  type="text"
                  name="model"
                  id="model"
                  placeholder="Model"
                  onChange={NewCameraFormik.handleChange}
                  onBlur={NewCameraFormik.handleBlur}
                />
                <FormikErrorMessage
                  formik={NewCameraFormik}
                  name="model"
                  render={(error) => (
                    <span className="error mt-1 text-rose-500">{error}</span>
                  )}
                />
              </div>
              <div>
                <input
                  className="border rounded-md py-5 px-4 w-full"
                  type="text"
                  name="port"
                  id="port"
                  placeholder="Port"
                  onChange={NewCameraFormik.handleChange}
                  onBlur={NewCameraFormik.handleBlur}
                />
                <FormikErrorMessage
                  formik={NewCameraFormik}
                  name="port"
                  render={(error) => (
                    <span className="error mt-1 text-rose-500">{error}</span>
                  )}
                />
              </div>
              <div>
                <input
                  className="border rounded-md py-5 px-4 w-full"
                  type="text"
                  name="make"
                  id="make"
                  placeholder="Make"
                  onChange={NewCameraFormik.handleChange}
                  onBlur={NewCameraFormik.handleBlur}
                />
                <FormikErrorMessage
                  formik={NewCameraFormik}
                  name="make"
                  render={(error) => (
                    <span className="error mt-1 text-rose-500">{error}</span>
                  )}
                />
              </div>
              <div>
                <input
                  className="border rounded-md py-5 px-4 w-full"
                  type="text"
                  name="username"
                  id="username"
                  placeholder="User Name"
                  onChange={NewCameraFormik.handleChange}
                  onBlur={NewCameraFormik.handleBlur}
                />
                <FormikErrorMessage
                  formik={NewCameraFormik}
                  name="username"
                  render={(error) => (
                    <span className="error mt-1 text-rose-500">{error}</span>
                  )}
                />
              </div>
              <div>
                <input
                  className="border rounded-md py-5 px-4 w-full"
                  type="text"
                  name="path"
                  id="path"
                  placeholder="Path"
                  onChange={NewCameraFormik.handleChange}
                  onBlur={NewCameraFormik.handleBlur}
                />
                <FormikErrorMessage
                  formik={NewCameraFormik}
                  name="path"
                  render={(error) => (
                    <span className="error mt-1 text-rose-500">{error}</span>
                  )}
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="float-right px-[26px] py-[13px] text-white font-medium bg-[#7D3519] rounded-[10px] mt-[24px] "
          >
            Add Camera
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewCameraPage;
