step 1:

### npm install react-router-dom ###

step 2:
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

add BrowserRouter to main App component

step 3:

create routes folder and MainRoutes.jsx

<Routes>
      {/*Routes contain multiple route*/}
      <Route path='/' element={<Home/>}/>
      <Route path='/moive/:name' element={<MovieDetails/>}/>
    </Routes>


step 5:pass this MainRoute.jsx in the app.jsx