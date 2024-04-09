// import logo from './logo.svg';
import './App.css';
import Class_VuAnhDuong from './components/Class_VuAnhDuong';
import Func_JSX_VuAnhDuong from './components/Func_JSX_VuAnhDuong';

function App() {
  return (
    <section className="App">
        <h1>Demo JSX</h1>
        {/* function component demo */}
        <Func_JSX_VuAnhDuong/>
        <Func_JSX_VuAnhDuong fullname="Vu Anh Duong" age="20"/>

        <Class_VuAnhDuong/>
        <hr/>
        <Class_VuAnhDuong info="Hoc reactjs" time="11"/>
    </section>
  );
}

export default App;
