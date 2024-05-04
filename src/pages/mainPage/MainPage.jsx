import React from 'react';
import {Success} from "../../components/success/Success";
import {Error} from "../../components/error/Error";

function MainPage({age}) {


    if(age < 18 && age > 0 || age > 50) {
        return <Error age={age}/>
    }
    else if (age >= 18 && age <= 50) {
    return  <Success age={age}/>
}

    return (
        <div>
            {
                age === 0 && ''
            }
        </div>
    );
}

export default MainPage;