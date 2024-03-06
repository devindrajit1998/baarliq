import React, { useMemo } from "react";
import Layout from "../layout";
import MyPagination from "../../components/MyPagination";
import { Breadcrumbs } from "@material-tailwind/react";
import {
  useReactTable,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";
import {

  Avatar,
 
} from "@material-tailwind/react";
import Card from "../../components/Card";
import MyDatePicker from "../../components/MyDatePicker";

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("firstName", {
    header: () => <span>Liquor</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.lastName, {
    id: "lastName",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Category</span>,
  }),
  columnHelper.accessor((row) => row.lastName, {
    id: "lastName",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Starting Inventory</span>,
  }),
  columnHelper.accessor((row) => row.lastName, {
    id: "lastName",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Ending Inventory</span>,
  }),
  columnHelper.accessor((row) => row.lastName, {
    id: "lastName",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Edit</span>,
  }),
];

const BottleDashboard = () => {
  const data = useMemo(
    () => [
      { firstName: "Rajesh", lastName: "Mondal" },
      { firstName: "Rajesh", lastName: "Mondal" },
      { firstName: "Rajesh", lastName: "Mondal" },
      { firstName: "Rajesh", lastName: "Mondal" },
      { firstName: "Rajesh", lastName: "Mondal" },
      { firstName: "Rajesh", lastName: "Mondal" },
      { firstName: "Rajesh", lastName: "Mondal" },
    ],
    []
  );
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
<Layout>
  <div className="flex flex-col md:flex-row md:justify-between">
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
        <span>Bottle</span>
      </a>
      <a href="#">Bottle Dashboard</a>
    </Breadcrumbs>
    <MyDatePicker/>
  </div>

  <Card className="table_card">
    <div className="overflow-x-auto">
      <table className="w-full table rounded-md">
       
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="">
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
       
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-2 text-left">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>

    <div className="mt-10 grid justify-items-end">
      <MyPagination />
    </div>
  </Card>
</Layout>

  );
};

export default BottleDashboard;
