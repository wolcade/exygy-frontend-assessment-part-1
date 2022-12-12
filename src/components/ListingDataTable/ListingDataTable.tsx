import { UnitTableRow } from "../../Listings"
import "./ListingDataTable.scss"

const UNIT_TYPES = {
  studio: "Studio",
  oneBdrm: "1 BR",
  twoBdrm: "2 BR",
  threeBdrm: "3 BR",
  fourBdrm: "4 BR",
}

const getUnitType = (unitType: string) => {
  return UNIT_TYPES[unitType as keyof typeof UNIT_TYPES] || "Unit";
}

const getIncomeString = (minIncomeMinimum: number) => {
  return `$${minIncomeMinimum} per month`
}

const getRentString = (rentUnit: string, rentMinimum: number) => {
  return rentUnit.includes("percent") ? `${rentMinimum}% income` : `$${rentMinimum} per month`
}

const ListingDataRow = ({ row }: { row: UnitTableRow }) => {
  const { type, minIncomeMinimum, rentUnit, rentMinimum } = { ...row }
  return (
    <tr className="row">
      <td className="listing-data-cell">{getUnitType(type)}</td>
      <td className="listing-data-cell">{getIncomeString(minIncomeMinimum)}</td>
      <td className="listing-data-cell">{getRentString(rentUnit, rentMinimum)}</td>
    </tr>
  )
}

export const ListingDataTable = ({ unitTableData }: { unitTableData: UnitTableRow[] }) => {
  return (
    <table className="listing-table">
      <thead>
        <tr className="header">
          <th className="header-cell">{"Name"}</th>
          <th className="header-cell">{"Minimum Income"}</th>
          <th className="header-cell">{"Rent"}</th>
        </tr>
      </thead>
      <tbody>
        {unitTableData.map((row, index) => {
          return <ListingDataRow row={row} key={index} />
        })}
      </tbody>
    </table>
  )
}
