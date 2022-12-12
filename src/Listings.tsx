import { ListingCard } from "./components/ListingCard/ListingCard"
import mockData from "./mock-data.json"

export type Address = {
  city: string
  state: string
  street: string
  zipCode: string
}

export interface UnitTableRow {
  minIncomeMaximum: number
  minIncomeMinimum: number
  rentMaximum: number
  rentMinimum: number
  rentUnit: "percentage" | "currency"
  type: "studio" | "oneBdrm" | "twoBdrm" | "threeBdrm" | "fourBdrm"
}

export interface Listing {
  address: Address
  deadline: string
  id: string
  imageLabels: string[]
  imageURL: string
  listingLabels: string[]
  name: string
  unitTableData: UnitTableRow[]
}

export const Listings = () => {
  const listingData = mockData as Listing[]
  return (
    listingData.length > 0 ?
      <ul>
        {listingData.map((listing, index) => (
          <ListingCard {...listing} key={index} />
        ))}
      </ul> : <h1>{"No Listings Available"}</h1>
  )
}
