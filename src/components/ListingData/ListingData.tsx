import { Address, UnitTableRow } from "../../Listings"
import { ListingDataTable } from "../ListingDataTable/ListingDataTable"
import "./ListingData.scss"

const ListingName = ({ listingName }: { listingName: string }) => {
  return <h1 className="listing-name">{listingName}</h1>
}

const AddressBlock = ({ listingAddress }: { listingAddress: Address }) => {
  const address = listingAddress
  return (
    <h2 className="address-block" >{`${address.street}, ${address.city} ${address.state}, ${address.zipCode}`}</h2>
  )
}

const ListingLabel = ({ labelName }: { labelName: string }) => {
  return <div className="listing-label-box">{labelName}</div>
}

const Divider = () => {
  return <div className="divider" />
}

interface ListingDataHeaderProps {
  listingName: string
  listingAddress: Address
  listingLabels: string[]
  listingId: string;
}

const ListingDataHeader = ({
  listingName,
  listingAddress,
  listingLabels,
  listingId,
}: ListingDataHeaderProps) => {
  return (
    <div className="listing-data-header">
      <ListingName listingName={listingName} />
      <AddressBlock listingAddress={listingAddress} />
      {listingLabels.length > 0 && (
        <div className={"listing-label-container"}>
          {listingLabels.map((label) => {
            return <ListingLabel labelName={label} key={`${listingId}_${label}`} />
          })}
        </div>
      )}
    </div>
  )
}

interface ListingDataSubHeaderProps {
  unitTableData: UnitTableRow[]
  listingId: string;
}

const ListingDataSubHeader = ({ unitTableData, listingId}: ListingDataSubHeaderProps) => {
  return (
    <div className="ListingDataSubHeader">
      <Divider />
      <ListingDataTable listingId={listingId} unitTableData={unitTableData} />
    </div>
  )
}

interface ListingDataProps {
  listingName: string
  listingAddress: Address
  listingLabels: string[]
  unitTableData: UnitTableRow[]
  listingId: string;
}

export const ListingData = (props: ListingDataProps) => {
  return (
    <div className="listing-data">
      <ListingDataHeader {...props} />
      <ListingDataSubHeader listingId={props.listingId} unitTableData={props.unitTableData} />
    </div>
  )
}
