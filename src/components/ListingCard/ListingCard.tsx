import './ListingCard.scss'
import { Listing } from "../../Listings"
import { ImageBlock } from "../ImageBlock/ImageBlock"
import { ListingData } from "../ListingData/ListingData"

export const ListingCard = (listing: Listing) => {
  return (
    <li className="listing-card">
      <ImageBlock
        deadline={listing.deadline}
        imageURL={listing.imageURL}
        labels={listing.imageLabels}
      />
      <ListingData
        listingName={listing.name}
        listingAddress={listing.address}
        listingLabels={listing.listingLabels}
        unitTableData={listing.unitTableData}
      />
    </li>
  )
}