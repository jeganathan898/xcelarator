import { ColumnDef, SortingState, flexRender, useReactTable } from "@tanstack/react-table"
import { getCoreRowModel, getSortedRowModel } from "@tanstack/table-core"
import { useMemo, useState, useEffect } from "react"
import { appraisalCycleData } from "../resources"
import { appraisalCycleHeader } from "../resources/tableHeader"
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material"
import { Table, TableSortArrow } from "../assets/styles"

export default function DataTable() {
  const [sorting, setSorting] = useState<SortingState>([])
  const [data, setData] = useState<any[]>([])

  const columns = useMemo<ColumnDef<any>[]>(() => appraisalCycleHeader(), [])

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    enableSortingRemoval: false,
    enableMultiSort: true,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    // debugTable: true
  })

  useEffect(() => {
    setData(appraisalCycleData)
  }, [])

  return (
    <>
      <Table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort() ? "tableHeader" : "",
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        <TableSortArrow>
                          {{
                            asc: <KeyboardArrowUp className="sort_arrow up" />,
                            desc: <KeyboardArrowDown className="sort_arrow down" />,
                          }[header.column.getIsSorted() as string] ?? null}

                          <KeyboardArrowUp className="up" />
                          <KeyboardArrowDown className="down" />
                        </TableSortArrow>
                      </div>
                    )}
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>

        <tbody>
          {table
            .getRowModel()
            .rows.slice(0, 10)
            .map((row) => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                  })}
                </tr>
              )
            })}
        </tbody>
      </Table>
    </>
  )
}
