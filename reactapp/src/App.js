import { useState } from 'react';
import './App.css';
import Button from './components/button/Button';
import Form from './components/form/Form';
import Input from './components/input/Input';

function App() {
  const [user,setUser]=useState({name:"" , password:""});
  const handleChange=(e)=>{
    if(e.target.type==="text"){
      setUser({...user, name: e.target.value});
      console.log(user)
    }
    else{
      setUser({...user, password: e.target.value});
      console.log(user)
    }
  }
  const handleClick=()=>{
    if(user.name===""){
      alert("Kullanıcı adı boş bırakılamaz")
    }
    else if(user.password===""){
      alert("Şifre boş bırakılamaz")
    }
    else{
      alert(`
      Kullanıcı adı: ${user.name} 
      Şifre: ${user.password}`)
    }
  }
  return (
    <div className="App">
      <h2>Giriş Formu</h2>
      <Form>
        <Input type={"text"} placeHolder={"Kullanıcı Adı"} onChange={handleChange} value={user.name}/>
        <Input type={"password"} placeHolder={"Şifre"} onChange={handleChange} value={user.password}/>
        <Button onClick={handleClick}/>
      </Form>
    </div>
  );
}

export default App;
