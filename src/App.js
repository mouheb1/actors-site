
import { Switch, Route } from 'react-router-dom'
import { Movie } from './pages/Movie'
import { Album } from './pages/Album'
import { Actor } from './pages/Actor'
//import { FooterPage } from './pages/Footer'
import { NavBar } from './pages/NavBar'
import { SideBar } from './pages/SideBar'
import { Row, Col } from 'antd'
import "antd/dist/antd.css";
import './styles.css'
function App() {
  return (
    <div>
      <Row >
        <NavBar />
      </Row>
      <Row>
        <Col xs={0} sm={6} md={4}>
          <SideBar />
        </Col>
        <Col xs={24} sm={18} md={20}>
          <Switch>
            <Route path='/movies' component={Movie} />
            <Route path='/albums' component={Album} />
            <Route path='/actors' component={Actor} />
          </Switch>
        </Col>
      </Row>

    </div>
  );
}

export default App;
