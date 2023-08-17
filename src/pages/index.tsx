//react
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
//toolkit
import { RootState } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";
import { addDataFromExcel } from "@/app/features/excel/excelDataSlice";
//syled
import { HomeSlyled, SearchBox, Table } from "@/styles/homeSlyled";

export default function Home() {
  const excelData = useSelector((state: RootState) => state.excel.value);

  return (
    <>
      <Navbar />
      {excelData.length > 0 && (
        <SearchBox>
          <input type="text" placeholder="SEARCH FOR IP ADDRESS" />
        </SearchBox>
      )}

      <HomeSlyled>
        {excelData.length > 0 && (
          <Table>
            <thead>
              <tr>
                {Object.keys(excelData[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {excelData.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value: any, index) => (
                    <td key={index}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        {excelData.length == 0 && (
          <HomeSlyled>
            <h1>Escolha uma arquivo Excel primeiro.</h1>
          </HomeSlyled>
        )}
      </HomeSlyled>
    </>
  );
}
