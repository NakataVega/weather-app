import React from "react"
import AppFrame from "./AppFrame"
import { BrowserRouter as Router } from "react-router-dom"

export default {
  title: "AppFrame",
  component: AppFrame
}

export const AppFrameExample = () => (
  <Router>
    <AppFrame>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi quas voluptatum atque praesentium debitis assumenda voluptates iste optio minima inventore. Natus nobis hic incidunt esse aliquam ut cum eveniet reprehenderit?
    </AppFrame>
  </Router>
)