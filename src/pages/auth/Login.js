import React from "react";
import { Card, Input, Typography } from "@material-tailwind/react";
import MyButton from "../../components/MyButton";

export default function Login() {
  return (
    <>
      <div className="login_body ">
        <Card className="login_card" color="transparent" shadow={false}>
          <img
            className="logo"
            src="https://www.pngall.com/wp-content/uploads/13/Pepsi-Logo-Old-Transparent.png"
            alt="Image Description"
            style={{ width: "189px" }}
          />
          <Typography variant="h4" color="blue-gray" className="login_text">
            Login
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-10 ">
              <div className="relative flex w-full flex-wrap items-stretch">
                <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i class="fa-solid fa-user" />
                </span>
                <input
                  type="text"
                  size="lg"
                  placeholder="USER NAME"
                  className="login_input px-3 relative outline-none focus:outline-none focus:ring w-full pl-10"
                />
              </div>
              <div className="relative flex w-full flex-wrap items-stretch">
                <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i class="fa-solid fa-key" />
                </span>
                <input
                  type="password"
                  size="lg"
                  placeholder="PASSWORD"
                  className="login_input px-3 relative outline-none focus:outline-none focus:ring w-full pl-10"
                />
              </div>
            </div>
            <div>
              <div className="text-center mt-8 login_btn">
                <MyButton>login</MyButton>
              </div>
            </div>
          </form>
        </Card>
        <img
          className="logo_sm"
          src="https://www.pngall.com/wp-content/uploads/13/Pepsi-Logo-Old-Transparent.png"
          alt="Image Description"
          style={{ width: "70px" }}
        />
      </div>
    </>
  );
}
