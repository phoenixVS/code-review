import { FC } from "react";

interface ContentProps {
  className?:string
}
const Content:FC<ContentProps> = ({ className}) => {
  return (
    <div className={className}>
      <div className="card">
        <h4 className="card-header">Header</h4>
        <p className="card-body">Body</p>
      </div>
      <div className="card">
        <h4 className="card-header">Header</h4>
        <p className="card-body">Body</p>
      </div>
      <div className="card">
        <h4 className="card-header">Header</h4>
        <p className="card-body">Body</p>
      </div>
      <div className="card">
        <h4 className="card-header">Header</h4>
        <p className="card-body">Body</p>
      </div>
      <div className="card">
        <h4 className="card-header">Header</h4>
        <p className="card-body">Body</p>
      </div>
    </div>
)};

export default Content;