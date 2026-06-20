import Categories from "./components/Categories"
import NavigationBar from "./components/NavigationBar"
import TopBar from "./components/TopBar"

const App = () => {
  return (
    <div>
      <TopBar />
      <div className="flex">
        <Categories />
        <NavigationBar />
      </div>
    </div>
  )
}

export default App