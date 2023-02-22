import logo from './logo.svg';
import './App.css';
import Control from './components/Control';
import ListStudents from './components/ListStudents';
import Form from './components/Form';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toggleSelector } from './redux/selector';

function App() {
  const filter = useSelector(toggleSelector)
  const elementForm = (filter.toggle.status) ? <Form toggle={filter.toggle} /> : ""
  return (
    <div className="App">
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            {/* START CONTROL */}
            <Control />
            {/* END CONTROL */}
            {/* START LIST STUDENT */}
            <Routes>
              <Route path="/" element={<ListStudents />} />
            </Routes>
            {/* END LIST STUDENT */}
          </div>
        </div>
        {/* START FORM SINH VIEN */}
        {elementForm}
        {/* END FORM SINH VIÊN */}
      </div>
    </div>

  );
}

export default App;
