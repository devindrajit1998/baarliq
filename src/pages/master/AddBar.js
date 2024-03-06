import React from "react";
import {
  Breadcrumbs,
  Input,
  Select,
  Option,
  Button,
} from "@material-tailwind/react";
import Layout from "../layout";
import Card from "../../components/Card";
import { countryList } from "../../utils/helpers/country";

const AddBar = () => {
  return (
    <Layout>
      <Breadcrumbs className="mb-4">
        <a href="#" className="opacity-60">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </a>
        <a href="#" className="opacity-60">
          <span>Master</span>
        </a>
        <a href="#">Create Bar</a>
      </Breadcrumbs>
      <Card>
        <h5 className="text-xl mb-6">Create Bar</h5>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input label="Name" />
          <Input label="Street Address" />
          <Input label="City" />

          <Input label="Pincode" />
          <Input label="State" />
          <Select label="Country">
            {countryList.map((item) => (
              <Option>{item.name}</Option>
            ))}
          </Select>
          <div className="grid-cols-1/3">
            <Button>Submit</Button>
          </div>
        </form>
      </Card>
    </Layout>
  );
};

export default AddBar;
