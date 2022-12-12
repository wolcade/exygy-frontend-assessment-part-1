import "./ImageBlock.scss"

const ImageLabel = ({ labelName }: { labelName: string }) => {
  return <div className="image-label-box">{labelName}</div>
}

// We have provided an implementation of the image block component as a starting point
// You are free to use this component or build your own

export interface ImageBlockProps {
  deadline: string
  imageURL: string
  labels: string[]
}

export const ImageBlock = (props: ImageBlockProps) => {
  return (
    <div className="image-block">
      {props.labels.length > 0 && (
        <div className={"label-container"}>
          {props.labels.map((label, index) => {
            return <ImageLabel labelName={label} key={index} />
          })}
        </div>
      )}
      <img src={props.imageURL} alt={"Exterior view of building"} />
      <div className={"deadline"}>{`Application Deadline: ${props.deadline}`}</div>
    </div>
  )
}
