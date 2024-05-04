import {useState} from 'react';
import MainPage from "../mainPage/MainPage";



export function Input() {

    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [age, setAge] = useState(0);

    function doSubmit (e){
        e.preventDefault();
        console.log('пользователь создан')
    }

    function doReset (){
        setName('');
        setLastName('');
        setAge(0);
        console.log('отменено')
    }



    return (
        <div>
                <h1>User info</h1>
            <form onSubmit={doSubmit} onReset={doReset}>
                <input type="text" placeholder='name' value={name} onChange={(e) => {setName(e.target.value)
                    console.log(e.target.value)}} name='name'/>
                <input type="text" placeholder='lastname' value={lastname} onChange={(e) => {setLastName(e.target.value)
                    console.log(e.target.value)}} name='lastname'/>
                <input type="number" placeholder='age' onChange={(e) => {setAge(+e.target.value)
                    console.log(e.target.value)}} name='age'/>
                <button>submit</button>
                <button type="reset">reset</button>
                <MainPage age={age}/>
            </form>


        </div>
    );
}






