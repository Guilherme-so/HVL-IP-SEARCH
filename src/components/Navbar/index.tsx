//react
import React, { useState } from "react";
import * as XLSX from "xlsx";
import Excel from "../icons/excel";
import { ExcelButton, SyledNavbar } from "./styled";
import Logo from "../icons/Logo";

//toolkit
import { RootState } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";
import { addDataFromExcel } from "@/app/features/excel/excelDataSlice";

interface Address {
  ID: any;
  NAME: any;
  IPADDRESS: any;
  CARGO: any;
}

function Navbar() {
  const [IpAddress, setIpAddress] = useState<Address[]>([]);

  const excelData = useSelector((state: RootState) => state.excel.value);
  const dispatch = useDispatch();

  const handleFileUpload = (e: any) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e: any) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData: any = XLSX.utils.sheet_to_json(sheet);
      setIpAddress(parsedData);
      dispatch(addDataFromExcel(parsedData));
    };
  };

  return (
    <SyledNavbar>
      <span>
        <Logo />
      </span>
      <ExcelButton>
        <input
          name="file"
          id="file"
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileUpload}
        />
        <label htmlFor="file">
          <Excel />
          <p>Escolha Arquivo Excel</p>
        </label>
      </ExcelButton>
    </SyledNavbar>
  );
}

export default Navbar;
