import Header from './Header'
import Blog from './Blog'
import NavBar from './NavBar'
import './App.css'
function App() {
  const post = [
    {
      id: 1,
      date: "11/12/2020",
      title: "On the Street in Brooklyn",
      image: "https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-1.jpg",
      imageAlt: "On the Street in Brooklyn",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem deleniti cupiditate voluptatum provident commodi unde atque nulla adipisci exercitationem animi aut ipsum qui deserunt, laboriosam mollitia molestias? Doloribus, id sequi.",
    },
    {
      id: 2,
      date: '11/11/2020',
      title: "Vintage in Vogue",
      image: "https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-2.jpg",
      imageAlt: "Vintage in Vogue",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem deleniti cupiditate voluptatum provident commodi unde atque nulla adipisci exercitationem animi aut ipsum qui deserunt, laboriosam mollitia molestias? Doloribus, id sequi.",
    }
  ]

  return (
    <div className="App">
      <Header />
      <NavBar />
      {post.map((item) => (
        <Blog item={item} />



      ))}

      -
      <footer></footer>
    </div>
  )
}


export default App
