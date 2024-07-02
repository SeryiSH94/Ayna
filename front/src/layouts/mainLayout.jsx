import { Outlet } from "react-router-dom"

export const Root = () => {
  return (
    <div>
        <div>Header</div>
        <Outlet />
        <div>Footer</div>
    </div>
  )
}

export default Root