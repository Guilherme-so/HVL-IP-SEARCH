//react
import Navbar from "@/components/Navbar";
import { useCallback, useEffect, useState } from "react";
//toolkit
import { RootState } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";
import {
  addDataFromExcel,
  searchExcel,
} from "@/app/features/excel/excelDataSlice";
//syled
import { HomeSlyled, SearchBox, Table } from "@/styles/homeSlyled";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [searchList, setSearchList] = useState([]);
  const excelData = useSelector((state: RootState) => state.excel.value);
  const newList = useSelector((state: RootState) => state.excel.searchList);
  const dispatch = useDispatch();

  const searchItems = useCallback(
    (title: string) => {
      const regex = new RegExp(searchValue, "i");
      return regex.test(title);
    },
    [searchValue]
  );
  useEffect(() => {
    const novaLista = excelData.filter((item) => searchItems(item.NAME));
    setSearchList(novaLista);
    dispatch(searchExcel(novaLista));
    if (searchValue === "") {
      setSearchList([]);
      dispatch(searchExcel([]));
    }
  }, [searchValue, searchItems]);

  return (
    <>
      <Navbar />
      {excelData.length > 0 && (
        <SearchBox>
          <input
            type="text"
            placeholder="SEARCH FOR IP ADDRESS"
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </SearchBox>
      )}

      <HomeSlyled>
        {newList.length > 0 ? (
          <Table>
            <thead>
              <tr>
                {/* @ts-ignore */}
                {Object.keys(newList[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {newList.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value: any, index) => (
                    <td key={index}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        ) : excelData.length > 0 ? (
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
        ) : (
          <HomeSlyled>
            <h1>Escolha uma arquivo Excel primeiro.</h1>
          </HomeSlyled>
        )}
      </HomeSlyled>
    </>
  );
}
